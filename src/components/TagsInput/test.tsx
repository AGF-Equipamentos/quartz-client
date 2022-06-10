import { fireEvent, render, screen } from '@testing-library/react'
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
    render(<TagsInput setValue={() => true} />)

    const TagInput = screen.getByPlaceholderText('Adicionar Tag...')
    fireEvent.change(TagInput, { target: { value: 'alana' } })

    console.log(TagInput)

    fireEvent.keyDown(TagInput, { key: 'Enter' })
    expect(screen.getByText('alana')).toBeInTheDocument()
  })
  // fazer o se for diferente de "entre"
  // fazer se o !value.trim()
  it('should create new tag', () => {
    const setValue = jest.fn()
    // initial tags
    // adicionar
    // remove tag
    render(<TagsInput setValue={setValue} initialTags={Tags} />)

    expect(setValue).toHaveBeenCalledWith('tags', 'alana;arthur')
  })
})
