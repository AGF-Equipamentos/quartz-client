import { render, screen } from '@testing-library/react'

import Orders_Table from '.'

describe('<Orders_Table />', () => {
  it('should render the heading', () => {
    const { container } = render(<Orders_Table />)

    expect(
      screen.getByRole('heading', { name: /Orders_Table/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
