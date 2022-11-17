import { ButtonStyles, ButtonStylesContainer } from './stylex'
export function IncreaseDecreaseButton() {
  return (
    <ButtonStylesContainer>
      <ButtonStyles>-</ButtonStyles>
      <span>1</span>
      <ButtonStyles>+</ButtonStyles>
    </ButtonStylesContainer>
  )
}
