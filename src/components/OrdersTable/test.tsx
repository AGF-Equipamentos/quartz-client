import { fireEvent, render, screen } from '@testing-library/react'

import OrdersTable from '.'
import orders from './mock'

describe('<OrdersTable />', () => {
  it('should render rows and columns', () => {
    render(<OrdersTable orders={orders} />)

    // Columns
    expect(screen.getByText('Status')).toBeInTheDocument()
    expect(screen.getByText('Número')).toBeInTheDocument()
    expect(screen.getByText('Fornecedor')).toBeInTheDocument()
    expect(screen.getByText('Tags')).toBeInTheDocument()
    expect(screen.getByText('Mês')).toBeInTheDocument()
    expect(screen.getByText('Observação')).toBeInTheDocument()
    expect(screen.getByText('Entrega')).toBeInTheDocument()
    expect(screen.getByText('Comprador')).toBeInTheDocument()
    expect(screen.getByText('Aprovado')).toBeInTheDocument()
    expect(screen.getByText('Ações')).toBeInTheDocument()

    // Rows
    expect(
      screen.getByRole('row', {
        name: '001 Ronaldo pedido CE26p pedidoMF75P2 MAR. Deu certo 28/03/2022 Arthur Sim'
      })
    ).toBeInTheDocument()
  })

  it('should render grouped rows', () => {
    render(<OrdersTable orders={orders} />)

    fireEvent.click(
      screen.queryAllByRole('button', {
        name: 'Minimizar'
      })[0]
    )

    expect(screen.getAllByRole('cell', { name: '4 Números' })).toHaveLength(3)

    fireEvent.click(screen.getAllByTitle('Toggle Row Expanded')[0])

    fireEvent.click(
      screen.getByRole('button', {
        name: 'Expandir'
      })
    )

    fireEvent.click(
      screen.queryAllByRole('button', {
        name: 'Minimizar'
      })[1]
    )

    expect(screen.getAllByRole('cell', { name: '1 Status' })).toHaveLength(10)
  })

  it('should open and close filter', () => {
    render(<OrdersTable orders={orders} />)

    fireEvent.click(screen.getByRole('button', { name: 'Filtrar' }))
    fireEvent.click(screen.getByRole('button', { name: 'Cancelar' }))
  })
})
