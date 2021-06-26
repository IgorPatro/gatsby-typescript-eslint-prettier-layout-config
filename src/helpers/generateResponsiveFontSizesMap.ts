import { css, FlattenSimpleInterpolation } from 'styled-components'
import theme from 'layout/theme'

const generateResponsiveFontSizesMap = (
  sizes: number[]
): FlattenSimpleInterpolation => {
  const devicesMap = ['initial', 'phone', 'tablet', 'desktop', 'huge'] as const

  return sizes.map(
    (size, index) => css`
      ${theme.MQ[devicesMap[index]]} {
        font-size: ${size}rem;
      }
    `
  )
}

export default generateResponsiveFontSizesMap
