import styled from 'styled-components'

export const ButtonStyles = styled.button`
  all: unset;

  color: ${(props) => props.theme['purple-400']};
  text-align: center;
  cursor: pointer;
  height: 100%;
  width: 100%;
`

export const ButtonStylesContainer = styled.div`
  height: 32px;
  width: 72px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme['gray-50']};
  border-radius: 6px;

  & > span {
    color: ${(props) => props.theme['brown-400']};
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    line-height: 20.8x;
    font-weight: 400;
  }
`
