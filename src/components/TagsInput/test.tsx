import { fireEvent, getByText, render, screen } from '@testing-library/react'

import { TagsInput } from '.'
const Tags = ['CE25P', 'MF75P2', 'CE28P']

describe('<TagsInput />', () => {
  it('should render the "defaultValues" of the tags', () => {
    render(<TagsInput setValue={() => true} initialTags={Tags} />)

    expect(screen.getByText('MF75P2')).toBeInTheDocument()
    expect(screen.getByText('CE25P')).toBeInTheDocument()
    expect(screen.getByText('CE28P')).toBeInTheDocument()
  })

  it('should delete a tag', () => {
    render(<TagsInput setValue={() => true} initialTags={Tags} />)
    const button = screen.getByText('MF75P2').nextSibling

    if (button === null) return

    fireEvent.click(button)
    expect(screen.queryByText('MF75P2')).not.toBeInTheDocument()
  })

  it('should create new tag', () => {
    render(<TagsInput setValue={() => true} initialTags={Tags} />)
  })
})
