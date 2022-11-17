import { ButtonContainer } from './styles'
import Cart from '../../../assets/Images/CartPurple.svg'
import { IncreaseDecreaseButton } from '../../IncreaseDecreaseButton/index'
export function ButtonChangeQuantity() {
  return (
    <ButtonContainer>
      <IncreaseDecreaseButton />
      <span>
        <img src={Cart} alt="" />
      </span>
    </ButtonContainer>
  )
}
