import { ButtonContainer } from './styles'
import Cart from '../../../assets/Images/CartPurple.svg'
import { IncreaseDecreaseButton } from '../../IncreaseDecreaseButton/index'

interface ButtonChangeQuantityProps {
  coffee: {
    name: string
    price: number
    description: string
    classification: string[]
    id: string
    qtd?: number
  }
}

export function ButtonChangeQuantity({ coffee }: ButtonChangeQuantityProps) {
  return (
    <ButtonContainer>
      <IncreaseDecreaseButton coffee={{ ...coffee }} />
      <span>
        <img src={Cart} alt="" />
      </span>
    </ButtonContainer>
  )
}
