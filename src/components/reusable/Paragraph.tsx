import * as React from 'react'
import styled from 'styled-components'
import generateResponsiveFontSizesMap from '../../helpers/generateResponsiveFontSizesMap'

interface Props {
  size: number[]
  color?: string
  weight?: 'light' | 'regular' | 'medium' | 'bold'
  children: React.ReactNode | React.ReactNode[]
}

const Paragraph: React.FC<Props> = ({
  size,
  color = 'text',
  weight = 'regular',
  children,
}: Props) => (
  <StyledParagraph weight={weight} sizes={size} color={color}>
    {children}
  </StyledParagraph>
)

Paragraph.defaultProps = {
  color: 'text',
  weight: 'regular',
}

export default Paragraph

const StyledParagraph = styled.p<{
  sizes: number[]
  weight: string
  color: string
}>`
  color: ${({ theme, color }) => theme.colors[color]};
  font-weight: ${({ theme, weight }) => theme.weights[weight]};

  ${({ sizes }) => generateResponsiveFontSizesMap(sizes)}
`
