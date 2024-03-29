import * as S from './styles'

export type CheckboxProps = {
  label?: string
  labelFor?: string
  labelColor?: 'black' | 'white'
}

export function Checkbox({
  label,
  labelFor = '',
  labelColor = 'white'
}: CheckboxProps) {
  return (
    <S.Wrapper>
      <input id={labelFor} type="checkbox" />
      {!!label && (
        <S.Label htmlFor={labelFor} labelColor={labelColor}>
          {label}
        </S.Label>
      )}
    </S.Wrapper>
  )
}
