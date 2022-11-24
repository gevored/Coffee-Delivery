import { ButtonStyles, ButtonStylesContainer } from './stylex'
import { useState } from 'react'

export function IncreaseDecreaseButton() {
  const [numberOfCafes, setNumberOfCafes] = useState(0)
  function handleChangeQuantity(qtd: number) {
    const auxQtd = numberOfCafes + qtd
    if (auxQtd >= 0) {
      console.log('epa')
      setNumberOfCafes(numberOfCafes + qtd)
    }
  }
  return (
    <ButtonStylesContainer>
      <ButtonStyles onClick={() => handleChangeQuantity(-1)}>-</ButtonStyles>
      <span>{numberOfCafes}</span>
      <ButtonStyles onClick={() => handleChangeQuantity(1)}>+</ButtonStyles>
    </ButtonStylesContainer>
  )
}
