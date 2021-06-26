import React from 'react'
import styled from 'styled-components'

interface Props {
  children: React.ReactNode | React.ReactNode[]
}

const Section: React.FC<Props> = ({ children }: Props) => (
  <StyledSection>{children}</StyledSection>
)

export default Section

const StyledSection = styled.section``
