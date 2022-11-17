import styled from 'styled-components'

export const TitleFormContainer = styled.div`
  margin-bottom: 32px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  & > img {
    width: 22px;
    height: 22px;
  }

  & > div {
    strong {
      font-family: 'Roboto';
      font-size: 1rem;
      line-height: 20.8px;
      font-weight: 400;
      color: ${(props) => props.theme['gray-400']};
    }
    p {
      font-family: 'Roboto';
      font-size: 0.875rem;
      line-height: 18.2px;
      font-weight: 400;
      color: ${(props) => props.theme['brown-400']};
    }
  }

  & > h1 {
    border: 1px orange solid;
    font-family: 'Roboto';
    font-size: 0.875rem;
    line-height: 18.2px;
    font-weight: 400;
    color: ${(props) => props.theme['brown-400']};
  }
`
