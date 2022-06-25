import { render, screen } from '@testing-library/react'
import FilterModal from '.'

describe('< FilterModal />', () => {
  it('should to filter by number', () => {
    render(<FilterModal isOpen={true} handleClose={() => false} />)
  })
})
