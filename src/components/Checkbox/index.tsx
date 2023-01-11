import * as S from './styles'

export function Checkbox() {
  return (
    <S.Wrapper>
      <input id="action" type="checkbox" />
      <label htmlFor="action">Action</label>
    </S.Wrapper>
  )
}
