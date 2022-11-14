import { ButtonContainer, Button } from './styles'
import Cart from '../../../assets/Images/CartPurple.svg'
export function ButtonChangeQuantity() {
  return (
    <ButtonContainer>
      <div>
        <Button>-</Button>
        <span>1</span>
        <Button>+</Button>
      </div>

      <span>
        <img src={Cart} alt="" />
      </span>
    </ButtonContainer>
  )
}
