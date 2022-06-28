import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import FilterModal from '.'

describe('< FilterModal />', () => {
  it('should be possible to filter by the number', async () => {
    const handleFilter = jest.fn()

    render(
      <FilterModal
        isOpen={true}
        handleClose={() => false}
        handleFilter={handleFilter}
      />
    )
    //Input number
    const numberInput = screen.getByLabelText('Número')
    fireEvent.change(numberInput, { target: { value: '011' } })

    const button = screen.getByText('Filtrar')
    fireEvent.click(button)

    await waitFor(() =>
      expect(handleFilter).toHaveBeenCalledWith([
        {
          id: 'number',
          value: '011'
        },
        {
          id: 'provider',
          value: ''
        },
        {
          id: 'tags',
          value: ''
        },
        {
          id: 'observation',
          value: ''
        },
        {
          id: 'month',
          value: ''
        },
        {
          id: 'approved',
          value: ''
        },
        {
          id: 'delivery',
          value: ''
        },
        {
          id: 'status',
          value: ''
        },
        {
          id: 'buyer',
          value: ''
        }
      ])
    )
  })
  it('should be possible to filter by the provider', async () => {
    const handleFilter = jest.fn()

    render(
      <FilterModal
        isOpen={true}
        handleClose={() => false}
        handleFilter={handleFilter}
      />
    )
    const providerInput = screen.getByLabelText('Fornecedor')
    fireEvent.change(providerInput, { target: { value: 'Ronaldo' } })

    const button = screen.getByText('Filtrar')
    fireEvent.click(button)

    await waitFor(() =>
      expect(handleFilter).toHaveBeenCalledWith([
        {
          id: 'number',
          value: ''
        },
        {
          id: 'provider',
          value: 'Ronaldo'
        },
        {
          id: 'tags',
          value: ''
        },
        {
          id: 'observation',
          value: ''
        },
        {
          id: 'month',
          value: ''
        },
        {
          id: 'approved',
          value: ''
        },
        {
          id: 'delivery',
          value: ''
        },
        {
          id: 'status',
          value: ''
        },
        {
          id: 'buyer',
          value: ''
        }
      ])
    )
  })
  it('should be possible to filter by the tags', async () => {
    const handleFilter = jest.fn()
    render(
      <FilterModal
        isOpen={true}
        handleClose={() => false}
        handleFilter={handleFilter}
      />
    )

    const tagsInput = screen.getByPlaceholderText('Adicionar Tag...')
    fireEvent.change(tagsInput, { target: { value: 'PEDIDO CE27P' } })

    fireEvent.keyDown(tagsInput, { key: 'Enter' })

    const button = screen.getByText('Filtrar')
    fireEvent.click(button)
    await waitFor(() =>
      expect(handleFilter).toHaveBeenCalledWith([
        {
          id: 'number',
          value: ''
        },
        {
          id: 'provider',
          value: ''
        },
        {
          id: 'tags',
          value: 'PEDIDO CE27P'
        },
        {
          id: 'observation',
          value: ''
        },
        {
          id: 'month',
          value: ''
        },
        {
          id: 'approved',
          value: ''
        },
        {
          id: 'delivery',
          value: ''
        },
        {
          id: 'status',
          value: ''
        },
        {
          id: 'buyer',
          value: ''
        }
      ])
    )
  })
})
