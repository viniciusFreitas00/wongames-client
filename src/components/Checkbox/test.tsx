import { screen } from '@testing-library/react'

import { Checkbox } from '.'
import { renderWithTheme } from 'utils/tests/helper'

describe('<Checkbox />', () => {
  it('should render with a label', () => {
    renderWithTheme(<Checkbox label="checkbox label" labelFor="check" />)

    expect(screen.getByRole('checkbox')).toBeInTheDocument()

    expect(screen.getByLabelText(/checkbox label/i)).toBeInTheDocument()

    expect(screen.getByText(/checkbox label/i)).toHaveAttribute('for', 'check')
  })
})
