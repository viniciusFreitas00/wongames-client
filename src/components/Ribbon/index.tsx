import * as S from './styles'

export type RibbonColors = 'primary' | 'secondary'
export type RibbonSizes = 'small' | 'normal'

export type RibbonProps = {
  children: React.ReactNode
  color?: RibbonColors
  size?: RibbonSizes
}

export function Ribbon({
  children,
  color = 'primary',
  size = 'normal'
}: RibbonProps) {
  return (
    <S.Wrapper color={color} size={size}>
      {children}
    </S.Wrapper>
  )
}
