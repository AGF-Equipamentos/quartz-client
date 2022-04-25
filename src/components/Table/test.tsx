import { render, screen } from '@testing-library/react'

import Table from '.'

describe('<Table />', () => {
  it('should render the heading', () => {
    const { container } = render(<Table />)

    expect(screen.getByRole('heading', { name: /Table/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
