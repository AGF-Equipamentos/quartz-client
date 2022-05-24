import { render, screen } from '@testing-library/react'
import Input from '.'

const defaultValue = [{ id: 'teste', value: 'teste01' }]

describe('<Edit />', () => {
  it('should render the label of the Input', () => {
    render(
      <Input
        formDefaultValues={defaultValue}
        name="InputStatus_Observation"
        label="Status_Observation"
      />
    )

    expect(screen.getByLabelText('Status_Observation')).toBeInTheDocument()
  })
})
