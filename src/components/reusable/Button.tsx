import React from 'react'
import styled from 'styled-components'

interface Props {
  children: React.ReactNode | React.ReactNode[]
}

const Button: React.FC<Props> = ({ children }: Props) => (
  <StyledButton type="button">{children}</StyledButton>
)

export default Button

const StyledButton = styled.button``
