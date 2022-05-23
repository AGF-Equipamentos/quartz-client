import { render, screen } from '@testing-library/react'

import Edit from '.'

describe('<Edit />', () => {
  it('should render the heading', () => {
    const { container } = render(<Edit />)

    expect(screen.getByRole('heading', { name: /Edit/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
