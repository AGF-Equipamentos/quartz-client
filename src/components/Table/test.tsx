import { render, screen } from '@testing-library/react'
import Table from '.'
import { data, columns } from 'components/Table/mock'

describe('<Table />', () => {
  it('should be possible to open the filter', () => {
    render(<Table data={data} columns={columns} />)

    // const button = screen.getByText('Filtrar')
  })
})
