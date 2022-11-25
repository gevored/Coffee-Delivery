import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/globalStyles'
import { theme } from './styles/colors'
import { Routers } from './router'
import { ContextCaffe } from './context/cartContext'

export function App() {
  return (
    <ContextCaffe>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routers />
      </ThemeProvider>
    </ContextCaffe>
  )
}
