import { render, screen } from '@testing-library/react'

import OrdersTableV2 from '.'

describe('<OrdersTableV2 />', () => {
  it('should render the heading', () => {
    const { container } = render(<OrdersTableV2 />)

    expect(screen.getByRole('heading', { name: /OrdersTableV2/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
