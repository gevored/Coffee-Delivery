import styled from 'styled-components'

export const ContainerListButtons = styled.div`
  gap: 0.5rem;
  display: flex;
  label {
    font-family: 'Roboto';
    font-size: 0.75rem;
    line-height: 19.2px;
    font-weight: 400;
    color: ${(props) => props.theme['brown-400']};
  }
`

export const Button = styled.input.attrs({ type: 'radio' })`
  all: unset;

  font-family: 'Roboto';
  font-size: 0.75rem;
  line-height: 19.2px;
  font-weight: 400;
  color: ${(props) => props.theme['brown-400']};
`

interface BoxButtonProps {
  isSelected?: boolean
}

export const BoxButton = styled.div<BoxButtonProps>`
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 6px;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 0.5rem;
  width: 178px;
  height: 51px;
  background-color: ${(props) =>
    props.isSelected
      ? (props) => props.theme['purple-100']
      : (props) => props.theme['gray-50']};

  border-color: ${(props) =>
    props.isSelected ? (props) => props.theme['purple-400'] : 'transparent'};
  img {
    margin-left: 8px;
    height: 16px;
    width: 16px;
  }
`
