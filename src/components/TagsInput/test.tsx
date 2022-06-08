import { fireEvent, render, screen } from '@testing-library/react'
import { TagsInput } from '.'

const initialTags = ['MF75P2', 'CE25P', 'MF25P2']

describe('<TagsInput />', () => {
  it('should render the initial tags', () => {
    render(<TagsInput setValue={() => true} initialTags={initialTags} />)

    expect(screen.getByText('MF75P2')).toBeInTheDocument()
    expect(screen.getByText('CE25P')).toBeInTheDocument()
    expect(screen.getByText('MF25P2')).toBeInTheDocument()
  })

  it('should delete a tag', () => {
    render(<TagsInput setValue={() => true} initialTags={initialTags} />)

    const tag = screen.getByText('MF75P2').nextSibling

    if (tag) {
      fireEvent.click(tag)
    }

    expect(screen.queryByText('MF75P2')).not.toBeInTheDocument()
  })

  it('should add a new tag', () => {
    render(<TagsInput setValue={() => true} />)

    const input = screen.getByPlaceholderText('Adicionar Tag...')

    fireEvent.change(input, { target: { value: 'VB45E' } })
    fireEvent.keyDown(input, { key: 'Enter' })

    expect(screen.getByText('VB45E')).toBeInTheDocument()
  })

  it('should not add a new tag without press enter', () => {
    render(<TagsInput setValue={() => true} initialTags={initialTags} />)

    const input = screen.getByPlaceholderText('Adicionar Tag...')

    fireEvent.change(input, { target: { value: 'VB45E' } })
    fireEvent.keyDown(input, { key: 'Tab' })

    expect(screen.queryByText('VB45E')).not.toBeInTheDocument()
  })

  it('should not add a empty tag', () => {
    render(<TagsInput setValue={() => true} initialTags={initialTags} />)

    const input = screen.getByPlaceholderText('Adicionar Tag...')

    fireEvent.change(input, { target: { value: '' } })
    fireEvent.keyDown(input, { key: 'Enter' })

    expect(screen.getAllByRole('button')).toHaveLength(3)
  })

  it('should setValue with the tags', () => {
    const setValue = jest.fn()
    render(<TagsInput setValue={setValue} initialTags={initialTags} />)

    // initial state
    expect(setValue).toHaveBeenCalledWith(
      'tags',
      ['MF75P2', 'CE25P', 'MF25P2'].join(';')
    )

    // delete a tag
    const tag = screen.getByText('MF75P2').nextSibling

    if (tag) {
      fireEvent.click(tag)
    }

    expect(setValue).toHaveBeenCalledWith('tags', ['CE25P', 'MF25P2'].join(';'))

    // add a tag
    const input = screen.getByPlaceholderText('Adicionar Tag...')

    fireEvent.change(input, { target: { value: 'VB45E' } })
    fireEvent.keyDown(input, { key: 'Enter' })

    expect(setValue).toHaveBeenCalledWith(
      'tags',
      ['CE25P', 'MF25P2', 'VB45E'].join(';')
    )
  })
})
