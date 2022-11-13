import styled from 'styled-components'

export const HeaderContainer = styled.div`
  width: 100%;
  height: 100px;
  background-color: inherit;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    display: flex;
    width: 80%;
    justify-content: space-between;
  }
`

export const SideHeaderMenu = styled.span`
  width: 200px;
  display: flex;
  gap: 0.5rem;
  align-items: center;

  span {
    height: 2.375rem;
    display: flex;
    border-radius: 6px;
    padding: 4px 8px;
    background-color: ${(props) => props.theme['purple-100']};
    align-items: center;
    h1 {
      color: ${(props) => props.theme['purple-400']};
      font-weight: 400;
      font-family: 'Roboto', sans-serif;
      font-size: 0.8rem;
    }
  }
`
