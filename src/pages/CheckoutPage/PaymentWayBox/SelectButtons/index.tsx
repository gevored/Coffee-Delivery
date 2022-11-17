import { Button, BoxButton, ContainerListButtons } from './styles'
import CreditCartIcon from '../../../../assets/Images/CreditCartIcon.png'
import DebitCardIcon from '../../../../assets/Images/DebitCardIcon.png'
import CashIcon from '../../../../assets/Images/CashIcon.png'
import { useState } from 'react'

export function SelectButton() {
  const [typePayment, setTypePayment] = useState('')

  function handleSelectTypePayment(payment: string) {
    setTypePayment(payment)
  }

  return (
    <ContainerListButtons>
      <BoxButton
        onClick={() => handleSelectTypePayment('CREDITO')}
        isSelected={typePayment === 'CREDITO'}
      >
        <img src={CreditCartIcon} alt="" />
        <Button>CATÃO DE CRÉDIO</Button>
      </BoxButton>

      <BoxButton
        onClick={() => handleSelectTypePayment('DEBITO')}
        isSelected={typePayment === 'DEBITO'}
      >
        <img src={DebitCardIcon} alt="" />
        <Button>CARTÃO DE DÉBITO</Button>
      </BoxButton>

      <BoxButton
        onClick={() => handleSelectTypePayment('CASH')}
        isSelected={typePayment === 'CASH'}
      >
        <img src={CashIcon} alt="" />
        <Button>DINHEIRO</Button>
      </BoxButton>
    </ContainerListButtons>
  )
}
