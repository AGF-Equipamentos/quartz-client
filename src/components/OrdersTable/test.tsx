import { render, screen } from '@testing-library/react'

import OrdersTable from '.'
import ordersMock from './mock'

describe('<Orders_Table />', () => {
  it('should render the heading', () => {
    const { container } = render(<OrdersTable orders={ordersMock} />)

    expect(
      screen.getByRole('heading', { name: /Orders_Table/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
