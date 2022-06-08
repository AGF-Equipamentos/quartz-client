import { render, screen } from '@testing-library/react'

import { TagsInput } from '.'

const Tags = ['CE25P', 'MF75P2', 'CE28P']

describe('<TagsInput />', () => {
  it('should render the "defaultValues" of the tags', () => {
    render(<TagsInput setValue={() => true} initialTags={Tags} />)

    expect(screen.getByText('MF75P2')).toBeInTheDocument()
    expect(screen.getByText('CE25P')).toBeInTheDocument()
    expect(screen.getByText('CE28P')).toBeInTheDocument()
  })

  it('should render a delete tag', () => {
    render(<TagsInput setValue={() => true} initialTags={Tags} />)
    console.log(screen.getByText('MF75P2').nextSibling)
    //  expect(screen.)
  })
})
