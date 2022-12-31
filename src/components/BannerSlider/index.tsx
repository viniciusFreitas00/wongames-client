import { Slider, SliderSetting } from 'components/Slider'
import { Banner, BannerProps } from 'components/Banner'

import * as S from './styles'

export type BannerSliderProps = {
  items: BannerProps[]
}

const settings: SliderSetting = {
  dots: true,
  arrows: false,
  vertical: true,
  verticalSwiping: true,
  infinite: false,
  responsive: [
    {
      breakpoint: 1170,
      settings: {
        vertical: false,
        verticalSwiping: false
      }
    }
  ]
}
export function BannerSlider({ items }: BannerSliderProps) {
  return (
    <S.Wrapper>
      <Slider settings={settings}>
        {items.map((item) => (
          <Banner key={item.title} {...item} />
        ))}
      </Slider>
    </S.Wrapper>
  )
}
