import styled from 'styled-components'

export const TitlePaymentWay = styled.div`
  padding: 40px;
  background-color: ${(props) => props.theme['gray-100']};

  width: 640px;
  height: 207px;
  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;

    & > div:nth-child(1) {
      display: flex;
      flex-direction: row;
      gap: 0.5rem;
      align-items: flex-start;
      justify-content: start;
      img {
        width: 22px;
        height: 22px;
      }
    }

    & > div:nth-child(2) {
      margin-top: 32px;
    }
  }
`

export const DivTitle = styled.div`
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
`
