import { Button, BoxButton, ContainerListButtons } from './styles'
import CreditCartIcon from '../../../../assets/Images/CreditCartIcon.png'
import DebitCardIcon from '../../../../assets/Images/DebitCardIcon.png'
import CashIcon from '../../../../assets/Images/CashIcon.png'
import { useState } from 'react'
import { useFormContext } from 'react-hook-form'

export function SelectButton() {
  const [typePayment, setTypePayment] = useState('Cartão de Crédito')

  function handleSelectTypePayment(payment: string) {
    setTypePayment(payment)
  }
  const { register } = useFormContext()
  return (
    <ContainerListButtons>
      <BoxButton
        onClick={() => handleSelectTypePayment('Cartão de Crédito')}
        isSelected={typePayment === 'Cartão de Crédito'}
      >
        <img src={CreditCartIcon} alt="" />
        <label>
          <Button
            checked={typePayment === 'Cartão de Crédito'}
            {...register('radioPaymentMethod')}
            value={typePayment}
          />
          CARTÃO DE CRÉDITO
        </label>
      </BoxButton>

      <BoxButton
        onClick={() => handleSelectTypePayment('Cartão de Débito')}
        isSelected={typePayment === 'Cartão de Débito'}
      >
        <img src={DebitCardIcon} alt="" />
        <label>
          <Button
            checked={typePayment === 'Cartão de Débito'}
            {...register('radioPaymentMethod')}
            value={typePayment}
          />
          CARTÃO DE DÉBITO
        </label>
      </BoxButton>

      <BoxButton
        onClick={() => handleSelectTypePayment('Dinheiro')}
        isSelected={typePayment === 'Dinheiro'}
      >
        <img src={CashIcon} alt="" />
        <label>
          <Button
            checked={typePayment === 'Dinheiro'}
            {...register('radioPaymentMethod')}
            value={typePayment}
          />
          DINHEIRO
        </label>
      </BoxButton>
    </ContainerListButtons>
  )
}
