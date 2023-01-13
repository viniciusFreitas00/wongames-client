import styled, { css } from 'styled-components'
import { CheckboxProps } from '.'

export const Wrapper = styled.div``

type LabelProps = Pick<CheckboxProps, 'labelColor'>

export const Label = styled.label<LabelProps>`
  ${({ theme, labelColor }) => css`
    color: ${theme.colors[labelColor!]};
  `}
`
