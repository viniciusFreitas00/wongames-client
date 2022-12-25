import { Button } from 'components/Button'

import * as S from './styles'

export type HighlightProps = {
  title: string
  subtitle: string
  buttonLabel: string
  buttonLink: string
  backgroundImage: string
  floatImage?: string
}

export function Highlight({
  title,
  subtitle,
  buttonLabel,
  buttonLink,
  backgroundImage,
  floatImage
}: HighlightProps) {
  return (
    <S.Wrapper backgroundImage={backgroundImage}>
      {floatImage && <S.FloatImage src={floatImage} alt={title} />}

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
