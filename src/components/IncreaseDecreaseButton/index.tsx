import { ButtonStyles, ButtonStylesContainer } from './stylex'
import { useState, useContext } from 'react'
import { CreateContextCaffe } from '../../context/cartContext'

interface IncreaseDecreaseButtonProps {
  coffee: {
    name: string
    price: number
    description: string
    classification: string[]
    id: string
    qtd?: number
  }
}
export function IncreaseDecreaseButton({
  coffee,
}: IncreaseDecreaseButtonProps) {
  const [numberOfCafes, setNumberOfCafes] = useState(coffee.qtd || 0)
  const { modifyCoffeeSelected } = useContext(CreateContextCaffe)

  function handleChangeQuantity(qtd: number) {
    const auxQtd = numberOfCafes + qtd
    if (auxQtd >= 0) {
      setNumberOfCafes(numberOfCafes + qtd)
      modifyCoffeeSelected(auxQtd, coffee)
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
