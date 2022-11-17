import styled from 'styled-components'

export const ButtonContainer = styled.div`
  height: 38px;
  width: 118px;
  display: flex;
  gap: 0.5rem;
  div {
    background-color: ${(props) => props.theme['gray-50']};
    width: 72px;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    span {
      margin: 0 10px;
    }
  }
`
