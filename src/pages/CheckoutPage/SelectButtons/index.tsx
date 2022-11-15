import { Button, BoxButton, ContainerListButtons } from './styles'
import CreditCartIcon from '../../../assets/Images/CreditCartIcon.png'
import DebitCardIcon from '../../../assets/Images/DebitCardIcon.png'
import CashIcon from '../../../assets/Images/CashIcon.png'

export function SelectButton() {
  return (
    <ContainerListButtons>
      <BoxButton>
        <img src={CreditCartIcon} alt="" />
        <Button>CATÃO DE CRÉDIO</Button>
      </BoxButton>

      <BoxButton>
        <img src={DebitCardIcon} alt="" />
        <Button>CARTÃO DE DÉBITO</Button>
      </BoxButton>

      <BoxButton>
        <img src={CashIcon} alt="" />
        <Button>DINHEIRO</Button>
      </BoxButton>
    </ContainerListButtons>
  )
}
