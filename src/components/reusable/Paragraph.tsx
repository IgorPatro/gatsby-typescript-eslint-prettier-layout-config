import * as React from 'react'
import styled from 'styled-components'
import generateResponsiveFontSizesMap from '../../helpers/generateResponsiveFontSizesMap'

interface Props {
  size: number[]
  color?: string
  children: React.ReactNode | React.ReactNode[]
}

const Paragraph: React.FC<Props> = ({ size, color, children }: Props) => (
  <StyledParagraph sizes={size} color={color}>
    {children}
  </StyledParagraph>
)

Paragraph.defaultProps = {
  color: 'text',
}

export default Paragraph

const StyledParagraph = styled.p<{ sizes: number[] }>`
  color: ${({ theme, color }) =>
    theme.colors[color !== undefined ? color : 'text']};

  ${({ sizes }) => generateResponsiveFontSizesMap(sizes)}
`
