import { render, screen } from '@testing-library/react'
import Dropdown from '.'

describe('<Dropdown />', () => {
  it('should render with passed value', () => {
    render(
      <Dropdown
        name="teste"
        label="foi"
        items=" {
          label: 'Janeiro',
          value: 0
        },
        {
          label: 'Fevereiro',
          value: 1
        }]"
      />
    )
    expect(screen.getAllByLabelText('foi')).toBeInTheDocument()
  })

  it('should render witch passed value in "name', () => {
    render(
      <Dropdown
        name="dropdwon1"
        label="Deu cerrto"
        items="[
      {
        label: 'Janeiro',
        value: 0
      },
      {
        label: 'Fevereiro',
        value: 1
      }
    ]"
      />
    )
  })
})

//     const { container } = render(<Dropdown />)

//     expect(
//       screen.getByRole('heading', { name: /Dropdown/i })
//     ).toBeInTheDocument()

//     expect(container.firstChild).toMatchSnapshot()
//   })
