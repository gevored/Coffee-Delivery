import styled from 'styled-components'
import BackgroundImage from '../../assets/Images/BackgroundImage.png'

export const IntroContainer = styled.div`
  display: flex;
  background-image: url(${BackgroundImage});
  justify-content: center;
  width: 100%;
  height: 544px;

  div {
    display: flex;
  }

  aside {
    display: flex;
    height: 100%;
    align-items: center;
  }
`
export const MainContent = styled.main`
  min-width: 800px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
`

export const TitleContent = styled.div`
  max-width: 600px;
  gap: 2rem;
  display: flex;
  flex-direction: column;
  min-width: 600px;

  h1 {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 3rem;
    line-height: 62px;
  }

  h2 {
    color: ${(props) => props.theme['gray-400']};

    font-family: 'Roboto';
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 26px;
  }
`

export const IconsContainer = styled.div`
  height: 200px;
  display: flex;
  justify-content: start;
  gap: 5rem;
  div {
    display: flex;
    flex-direction: column;
    justify-content: start;
    gap: 1rem;
    div {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: start;
      p {
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 1rem;
        line-height: 20.8px;
        color: ${(props) => props.theme['brown-400']};
      }
    }
  }
`

interface backgroundIconProps {
  bgColor: string
}

export const BackgroundIcon = styled.span<backgroundIconProps>`
  background-color: ${(props) => props.bgColor};
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 1.3rem;
    height: 1.3rem;
  }
`
