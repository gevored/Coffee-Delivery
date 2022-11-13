import styled, { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/globalStyles'
import { theme } from './styles/colors'
import { Header } from './components/Header'
import { Intro } from './components/Intro'

const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  /* Color the border and text with theme.main */
  color: ${(props) => props.theme.main};
  border: 2px solid ${(props) => props.theme.main};
`

Button.defaultProps = {
  theme: {
    main: 'red',
  },
}

export function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Intro />
      </ThemeProvider>
    </>
  )
}
