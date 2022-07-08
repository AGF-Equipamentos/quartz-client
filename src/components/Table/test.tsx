import { render, screen } from '@testing-library/react'
import Table from '.'
import { data, columns } from 'components/Table/mock'

describe('<Table />', () => {
  it('should be possible to bring the lines.', async () => {
    render(<Table data={data} columns={columns} />)

    expect(
      screen.getByRole('row', {
        name: '004 Kevin pedido CE28p MAR. Tá quase dando certo 31/03/2022 Confirmado Bruna Não'
      })
    ).toBeInTheDocument()
  })
})
