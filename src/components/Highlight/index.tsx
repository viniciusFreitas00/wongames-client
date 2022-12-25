import { Button } from 'components/Button'

import * as S from './styles'

export type HighlightProps = {
  title: string
  subtitle: string
  buttonLabel: string
  buttonLink: string
  backgroundImage: string
}

export function Highlight({
  title,
  subtitle,
  buttonLabel,
  buttonLink,
  backgroundImage
}: HighlightProps) {
  return (
    <S.Wrapper backgroundImage={backgroundImage}>
      <S.Content>
        <S.Title>{title}</S.Title>
        <S.Subtitle>{subtitle}</S.Subtitle>

        <Button as="a" href={buttonLink}>
          {buttonLabel}
        </Button>
      </S.Content>
    </S.Wrapper>
  )
}
