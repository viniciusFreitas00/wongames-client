import styled, { css } from 'styled-components'
import { HighlightProps } from '.'
import media from 'styled-media-query'

type WrapperProps = Pick<HighlightProps, 'backgroundImage'>

export const Wrapper = styled.section<WrapperProps>`
  ${({ backgroundImage }) => css`
    position: relative;
    height: 23rem;
    display: grid;
    grid-template-areas: 'floatimage content';
    grid-template-columns: 1.3fr 2fr;

    background-image: url(${backgroundImage});
    background-position: center center;
    background-size: cover;

    &::after {
      content: ' ';
      position: absolute;
      height: 100%;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.6);
    }

    ${media.greaterThan('medium')`
      height: 32rem;
    `}
  `}
`
export const FloatImage = styled.img`
  ${({ theme }) => css`
    grid-area: floatimage;
    z-index: ${theme.layers.base};
    max-height: 23rem;
    max-width: 100%;

    align-self: end;

    ${media.greaterThan('medium')`
      max-height: 32rem;
    `}
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    grid-area: content;
    z-index: ${theme.layers.base};
    text-align: right;
    padding: ${theme.spacings.xsmall};

    ${media.greaterThan('medium')`
      align-self: end;
      padding: ${theme.spacings.large};
    `}
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge}
    `}
  `}
`

export const Subtitle = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.light};
    color: ${theme.colors.white};
    margin-bottom: ${theme.spacings.medium};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.medium}
    `}
  `}
`
