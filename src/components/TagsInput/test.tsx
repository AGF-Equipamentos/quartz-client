import { render, screen } from '@testing-library/react'

import { TagsInput } from '.'

// const Tags = ['CE25P', 'MF75P2']

describe('<TagsInput />', () => {
  it('should render the "defaultValues" of the tags', () => {
    render(
      <TagsInput
        setValue={}
        // initialTags={Tags}
      />
    )

    expect(
      screen.getByRole('heading', { name: /TagsInput/i })
    ).toBeInTheDocument()

    // expect(container.firstChild).toMatchSnapshot()
  })
})
