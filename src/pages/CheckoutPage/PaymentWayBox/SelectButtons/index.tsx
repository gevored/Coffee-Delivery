import { Button, BoxButton, ContainerListButtons } from './styles'
import CreditCartIcon from '../../../../assets/Images/CreditCartIcon.png'
import DebitCardIcon from '../../../../assets/Images/DebitCardIcon.png'
import CashIcon from '../../../../assets/Images/CashIcon.png'
import { useState } from 'react'
import { useFormContext } from 'react-hook-form'

export function SelectButton() {
  const [typePayment, setTypePayment] = useState('')

  function handleSelectTypePayment(payment: string) {
    setTypePayment(payment)
  }
  const { register } = useFormContext()
  return (
    <ContainerListButtons>
      <BoxButton
        onClick={() => handleSelectTypePayment('CREDITO')}
        isSelected={typePayment === 'CREDITO'}
      >
        <img src={CreditCartIcon} alt="" />
        <label>
          <Button
            checked={typePayment === 'CREDITO'}
            {...register('radio_payment_method')}
            value={typePayment}
          />
          CARTÃO DE CRÉDITO
        </label>
      </BoxButton>

      <BoxButton
        onClick={() => handleSelectTypePayment('DEBITO')}
        isSelected={typePayment === 'DEBITO'}
      >
        <img src={DebitCardIcon} alt="" />
        <label>
          <Button
            checked={typePayment === 'DEBITO'}
            {...register('radio_payment_method')}
            value={typePayment}
          />
          CARTÃO DE DÉBITO
        </label>
      </BoxButton>

      <BoxButton
        onClick={() => handleSelectTypePayment('CASH')}
        isSelected={typePayment === 'CASH'}
      >
        <img src={CashIcon} alt="" />
        <label>
          <Button
            checked={typePayment === 'CASH'}
            {...register('radio_payment_method')}
            value={typePayment}
          />
          DINHEIRO
        </label>
      </BoxButton>
    </ContainerListButtons>
  )
}
