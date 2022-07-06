import { render, screen } from '@testing-library/react'
import Table from '.'
import { data, columns } from 'components/Table/mock'

describe('<Table />', () => {
  it('should be possible to bring the lines.', async () => {
    render(<Table data={data} columns={columns} />)

    // const row = screen.getByRole('cell', { name: '004' }).closest('tr')
    // expect(row).toBeInTheDocument()
  })
})
