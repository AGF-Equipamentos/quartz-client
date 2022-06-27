import { render, screen, fireEvent, waitFor } from '@testing-library/react'
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

    const numberInput = screen.getByLabelText('Número')
    fireEvent.change(numberInput, { target: { value: '011' } })

    const button = screen.getByText('Filtrar')
    fireEvent.click(button)

    waitFor(() =>
      expect(handleFilter).toHaveBeenCalledWith([
        {
          id: 'number',
          value: '011'
        }
      ])
    )
  })
})
