import * as React from 'react'
import styled from 'styled-components'
import generateResponsiveFontSizesMap from '../../helpers/generateResponsiveFontSizesMap'

interface Props {
  size: number[]
  color?: string
  weight?: 'light' | 'regular' | 'medium' | 'bold'
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  children: React.ReactNode | React.ReactNode[]
}

const Heading: React.FC<Props> = ({
  size,
  color = 'text',
  tag,
  weight = 'regular',
  children,
}: Props) => (
  <StyledHeading sizes={size} color={color} weight={weight} as={tag}>
    {children}
  </StyledHeading>
)

Heading.defaultProps = {
  color: 'text',
  weight: 'regular',
}

export default Heading

const StyledHeading = styled.h1<{
  sizes: number[]
  weight: string
  color: string
}>`
  color: ${({ theme, color }) => theme.colors[color]};
  font-weight: ${({ theme, weight }) => theme.weights[weight]};

  ${({ sizes }) => generateResponsiveFontSizesMap(sizes)}
`
