import { createGlobalStyle } from 'styled-components'

interface GlobalStyleProps {
  theme: {
    secondary: string
    main: string
    background: string
  }
}

export const GlobalStyle = createGlobalStyle<GlobalStyleProps>`

    *{
        margin  :0 ;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background-color: ${(props) => props.theme.background};
        font-size: 16px;
    }

`
