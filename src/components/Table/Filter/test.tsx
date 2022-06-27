import { render, screen, fireEvent } from '@testing-library/react'
import FilterModal from '.'

describe('< FilterModal />', () => {
  it('should trigger the "handleFilter"', () => {
    const handleFilter = jest.fn()

    render(
      <FilterModal
        isOpen={true}
        handleClose={() => false}
        handleFilter={handleFilter}
      />
    )
    const observationInput = screen.getByLabelText('Número')
    fireEvent.change(observationInput, { target: { value: '011' } })

    const button = screen.getByText('Filtrar')
    fireEvent.click(button)

    // expect(handleFilter).
  })
})
