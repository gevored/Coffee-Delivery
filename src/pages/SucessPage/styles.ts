import styled from 'styled-components'

export const SucessPageContainer = styled.div`
  margin: 0 160px;
  display: flex;
  flex-direction: column;

  & > span {
    & > img {
      width: 492px;
      height: 293px;
    }
  }
`

export const TitleDelivery = styled.div`
  margin: 50px 0;
  h1 {
    color: ${(props) => props.theme['orange-400']};
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    line-height: 41.6px;
    font-weight: 800;
  }
  p {
    color: ${(props) => props.theme['gray-400']};
    font-family: 'Roboto', sans-serif;
    font-size: 1.25rem;
    line-height: 26px;
    font-weight: 400;
  }
`

export const SetInfo = styled.div`
  border: double 1px transparent;
  border-radius: 6px 36px;

  background-image: linear-gradient(white, white),
    linear-gradient(
      to right,
      ${(props) => props.theme['yellow-400']},
      ${(props) => props.theme['purple-400']}
    );
  background-origin: border-box;
  background-clip: content-box, border-box;

  width: 526px;
  height: 270px;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 32px;
    padding: 40px;
  }
`
export const RowInfo = styled.div`
  display: flex;
  gap: 0.5rem;

  color: ${(props) => props.theme['gray-400']};
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  line-height: 20.8px;
  font-weight: 400;

  img {
    width: 32px;
    height: 32px;
  }
`

export const InfoContet = styled.div`
  display: flex;
  gap: 100px;
`
