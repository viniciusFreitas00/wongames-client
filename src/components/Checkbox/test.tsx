import { screen } from '@testing-library/react'

import { Checkbox } from '.'
import { renderWithTheme } from 'utils/tests/helper'
import theme from 'styles/theme'

describe('<Checkbox />', () => {
  it('should render with a label', () => {
    renderWithTheme(<Checkbox label="checkbox label" labelFor="check" />)

    expect(screen.getByRole('checkbox')).toBeInTheDocument()

    expect(screen.getByLabelText(/checkbox label/i)).toBeInTheDocument()

    expect(screen.getByText(/checkbox label/i)).toHaveAttribute('for', 'check')
  })

  it('should render without a label', () => {
    renderWithTheme(<Checkbox />)

    expect(screen.queryByLabelText('Checkbox')).not.toBeInTheDocument()
  })

  it('should render with a black label', () => {
    renderWithTheme(
      <Checkbox label="checkbox label" labelFor="check" labelColor="black" />
    )

    expect(screen.getByText(/checkbox label/i)).toHaveStyle({
      color: theme.colors.black
    })
  })
})
