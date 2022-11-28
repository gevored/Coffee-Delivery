import styled from 'styled-components'

export const HeaderContainer = styled.div`
  width: 100%;
  height: 100px;
  padding: 0 160px;

  background-color: inherit;
  display: flex;
  align-items: center;
  justify-content: center;

  & > div {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  a {
    all: unset;
  }
`

export const SideHeaderMenu = styled.span`
  width: 200px;
  display: flex;
  gap: 0.5rem;
  align-items: center;

  & > span {
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

export const BoxCart = styled.div`
  position: relative;
`

export const SpanCart = styled.span`
  color: ${(props) => props.theme.background};
  font-weight: 700;
  font-family: 'Roboto', sans-serif;
  font-size: 0.8rem;

  width: 20px;
  height: 20px;
  background-color: ${(props) => props.theme['orange-400']};

  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  img {
    z-index: -1;
    position: relative;
  }

  position: absolute;
  top: -5px;
  left: 30px;
`
