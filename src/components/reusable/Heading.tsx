import * as React from 'react'
import styled from 'styled-components'
import generateResponsiveFontSizesMap from '../../helpers/generateResponsiveFontSizesMap'

interface Props {
  size: number[]
  color?: string
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  children: React.ReactNode | React.ReactNode[]
}

const Heading: React.FC<Props> = ({ size, color, tag, children }: Props) => (
  <StyledHeading sizes={size} color={color} as={tag}>
    {children}
  </StyledHeading>
)

Heading.defaultProps = {
  color: 'text',
}

export default Heading

const StyledHeading = styled.h1<{ sizes: number[] }>`
  color: ${({ theme, color }) =>
    theme.colors[color !== undefined ? color : 'text']};

  ${({ sizes }) => generateResponsiveFontSizesMap(sizes)}
`
