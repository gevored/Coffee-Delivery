import styled from 'styled-components'

export const ItemCoffeeContainer = styled.div`
  background-color: ${(props) => props.theme['gray-100']};
  height: 19.375rem;
  width: 256px;

  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;

  & > div {
    height: 100%;
  }
`

export const TitleTopItem = styled.span`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  img {
    margin-top: -20px;
    width: 7.5rem;
    height: 7.5rem;
  }

  & > div {
    display: flex;
    justify-content: center;
    gap: 2px;
    p {
      background-color: ${(props) => props.theme['yellow-100']};
      color: ${(props) => props.theme['yellow-400']};
      border-radius: 100px;

      padding: 4px 6px;

      font-family: 'Roboto' sans-serif;
      font-size: 0.625rem;
      line-height: 13px;
      font-weight: 700;
    }
  }
`

export const DescriptionItem = styled.div`
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  font-family: 'Baloo 2';
  font-size: 1.25rem;
  line-height: 26px;
  font-weight: 700;

  p {
    color: ${(props) => props.theme['gray-200']};
    margin: 0 10px;
    font-family: 'Roboto' sans-serif;
    font-size: 0.9375rem;
    line-height: 18.2px;
    font-weight: 400;
    text-align: center;
  }
`

export const ContainterSelectItem = styled.div`
  height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  padding-bottom: 20px;
  font-family: 'Roboto';
  font-size: 0.875rem;
  line-height: 18.2px;
  font-weight: 400;
  color: ${(props) => props.theme['brown-400']};

  span {
    strong {
      font-family: 'Baloo 2';
      font-size: 1.5rem;
      line-height: 31.2px;
      font-weight: 700;
    }
  }
`
