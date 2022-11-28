import styled from 'styled-components'

export const SelectedItemContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  & > img {
    height: 64px;
    width: 64px;
  }
  & > div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    h1 {
      color: ${(props) => props.theme['gray-400']};
      font-family: 'Roboto', sans-serif;
      font-size: 1rem;
      line-height: 20.8px;
      font-weight: 400;
    }
  }
`
export const SetButtons = styled.span`
  display: flex;
  gap: 0.3rem;
  flex-direction: row;
`

export const RemoveButton = styled.div`
  cursor: pointer;
  padding-left: 5px;
  gap: 0.2rem;
  height: 32px;
  width: 91px;
  border-radius: 6px;
  background-color: ${(props) => props.theme['gray-50']};
  display: flex;
  align-items: center;
  img {
    width: 16px;
    height: 16px;
  }

  p {
    color: ${(props) => props.theme['brown-400']};
    font-family: 'Roboto', sans-serif;
    font-size: 0.75rem;
    line-height: 19.2px;
    font-weight: 400;
  }
`

export const Divider = styled.div`
  width: 100%;
  border: solid 1px;
  border-color: ${(props) => props.theme['gray-50']};
`
