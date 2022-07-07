import { render, screen } from '@testing-library/react'
import Table from '.'
import { data, columns } from 'components/Table/mock'

describe('<Table />', () => {
  it('should be possible to bring the lines.', async () => {
    render(<Table data={data} columns={columns} />)

    expect(screen.getByText('004')).toBeInTheDocument()
    expect(screen.getAllByText('Kevin')).toHaveLength(2)
    expect(screen.getByText(/PEDIDO CE28P/i)).toBeInTheDocument()
    // expect(screen.getByText('')).toBeInTheDocument()
  })
})
