import SlickSlider, { Settings } from 'react-slick'

import * as S from './styles'

export type SliderSetting = Settings

export type SliderProps = {
  children: React.ReactNode
  settings: SliderSetting
}

export function Slider({ children, settings }: SliderProps) {
  return (
    <S.Wrapper>
      <SlickSlider {...settings}>{children}</SlickSlider>
    </S.Wrapper>
  )
}
