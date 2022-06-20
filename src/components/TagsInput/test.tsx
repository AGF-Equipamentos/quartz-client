import { fireEvent, render, screen } from '@testing-library/react'
import { TagsInput } from '.'

const tags = ['CE25P', 'MF75P2', 'CE28P']

describe('<TagsInput />', () => {
  it('should render the "defaultValues" of the tags', () => {
    render(<TagsInput setValue={() => true} initialTags={tags} />)

    expect(screen.getByText('MF75P2')).toBeInTheDocument()
    expect(screen.getByText('CE25P')).toBeInTheDocument()
    expect(screen.getByText('CE28P')).toBeInTheDocument()
  })

  it('should delete a tag', () => {
    render(<TagsInput setValue={() => true} initialTags={tags} />)
    const button = screen.getByText('MF75P2').nextSibling

    if (button === null) return

    fireEvent.click(button)
    expect(screen.queryByText('MF75P2')).not.toBeInTheDocument()
  })

  it('should create new tag', () => {
    render(<TagsInput setValue={() => true} />)

    const tagInput = screen.getByPlaceholderText('Adicionar Tag...')
    fireEvent.change(tagInput, { target: { value: 'alana' } })

    fireEvent.keyDown(tagInput, { key: 'Enter' })
    expect(screen.getByText('alana')).toBeInTheDocument()
  })

  it('should not be possible to tighten another tacla be to be the "Enter"', () => {
    render(<TagsInput setValue={() => true} />)

    const tagInput = screen.getByPlaceholderText('Adicionar Tag...')
    fireEvent.change(tagInput, { target: { value: 'alana' } })

    fireEvent.keyDown(tagInput, { key: 'Espaço' })
    expect(screen.queryByText('alana')).not.toBeInTheDocument()
  })

  it('should not render empty', () => {
    render(<TagsInput setValue={() => true} initialTags={tags} />)

    const tagInput = screen.getByPlaceholderText('Adicionar Tag...')
    fireEvent.change(tagInput, { target: { value: '  ' } })

    fireEvent.keyDown(tagInput, { key: 'Enter' })

    expect(screen.getAllByRole('button')).toHaveLength(3)
  })

  // const tags = ['CE25P', 'MF75P2', 'CE28P']

  it('should trigger the "setValue" function', () => {
    const setValue = jest.fn()
    // initial tags
    render(<TagsInput setValue={setValue} initialTags={tags} />)
    expect(setValue).toHaveBeenCalledWith('tags', tags.join(';'))

    // add tag
    const tagInput = screen.getByPlaceholderText('Adicionar Tag...')
    fireEvent.change(tagInput, { target: { value: 'bia' } })

    fireEvent.keyDown(tagInput, { key: 'Enter' })
    // expect(setValue).toHaveBeenCalledWith()

    // remove tag
  })
})
