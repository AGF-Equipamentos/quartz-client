import { render, screen } from '@testing-library/react'

import TableV2 from '.'

describe('<TableV2 />', () => {
  it('should render the heading', () => {
    const { container } = render(<TableV2 />)

    expect(screen.getByRole('heading', { name: /TableV2/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
