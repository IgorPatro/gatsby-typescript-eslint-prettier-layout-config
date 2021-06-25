import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'layout/GlobalStyles'
import theme from 'layout/theme'

interface Props {
  children: JSX.Element | JSX.Element[]
}

const Layout: React.FC<Props> = ({ children }: Props) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <main>{children}</main>
  </ThemeProvider>
)

export default Layout
