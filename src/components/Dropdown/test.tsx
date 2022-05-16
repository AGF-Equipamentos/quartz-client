import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'
import Dropdown from '.'

const items = [
  {
    label: 'Janeiro',
    value: 0
  },
  {
    label: 'Fevereiro',
    value: 1
  }
]

describe('<Dropdown />', () => {
  it('should render with passed value', () => {
    render(<Dropdown name="teste" label="foi" items={items} />)
    expect(screen.getByLabelText('foi')).toBeInTheDocument()
  })

  it('should render witch passed value in "name"', () => {
    render(<Dropdown name="dropdwon1" label="Deu cerrto" items={items} />)

    expect(
      screen.getByRole('combobox', { name: 'Deu cerrto' })
    ).toHaveAttribute('name', 'dropdwon1')
  })
  it('should render the dropdown options', async () => {
    render(<Dropdown name="teste" label="Deu certo" items={items} />)

    expect(screen.getByRole('option', { name: 'Janeiro' })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'Janeiro' })).toHaveAttribute(
      'value',
      '0'
    )

    expect(
      screen.getByRole('option', { name: 'Fevereiro' })
    ).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'Fevereiro' })).toHaveAttribute(
      'value',
      '1'
    )

    expect(
      screen.queryByRole('option', { name: 'Março' })
    ).not.toBeInTheDocument()
  })

  it('should render the chakra styles', async () => {
    render(<Dropdown name="teste" label="Deu certo" items={items} />)

    await userEvent.selectOptions(
      screen.getByRole('combobox'),
      screen.getByRole('option', { name: 'Janeiro' })
    )

    // @ts-expect-error type error on react-testing-library
    expect(screen.getByRole('option', { name: 'Janeiro' }).selected).toBe(true)
  })

  it('should render the chakra styles', () => {
    const { container } = render(
      <Dropdown name="teste" label="Deu certo" items={items} />
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
