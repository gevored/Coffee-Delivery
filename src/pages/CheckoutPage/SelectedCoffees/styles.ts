import styled from 'styled-components'

export const SelectedCoffeesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${(props) => props.theme['gray-100']};
  border-radius: 6px 44px 6px 44px;
  width: 448px;
  height: 498px;

  padding: 40px;
`

export const ConfirmButton = styled.button`
  all: unset;
  cursor: pointer;
  height: 46px;
  width: 368px;
  background-color: ${(props) => props.theme['yellow-400']};

  color: ${(props) => props.theme.background};
  font-family: 'Roboto', sans-serif;
  font-size: 0.875rem;
  line-height: 22.4px;
  font-weight: 700;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 24px;
`
