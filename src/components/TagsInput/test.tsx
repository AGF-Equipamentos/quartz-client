import { render, screen } from '@testing-library/react'

import TagsInput from '.'

describe('<TagsInput />', () => {
  it('should render the heading', () => {
    const { container } = render(<TagsInput />)

    expect(screen.getByRole('heading', { name: /TagsInput/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
