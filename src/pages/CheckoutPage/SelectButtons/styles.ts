import styled from 'styled-components'

export const Button = styled.button`
  all: unset;
  cursor: pointer;

  font-family: 'Roboto';
  font-size: 0.75rem;
  line-height: 19.2px;
  font-weight: 400;
  color: ${(props) => props.theme['brown-400']};
`

export const BoxButton = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 0.5rem;
  width: 178px;
  height: 51px;
  background-color: ${(props) => props.theme['gray-50']};

  img {
    margin-left: 8px;
    height: 16px;
    width: 16px;
  }
`

export const ContainerListButtons = styled.div`
  gap: 0.5rem;
  display: flex;
`
