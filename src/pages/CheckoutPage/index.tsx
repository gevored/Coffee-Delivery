import { CheckoutContainer, CompleteOrderContent } from './styles'
import { Header } from '../../components/Header'
import { Form } from './Form'
import { SelectedCoffees } from './SelectedCoffees'
import { FormContext } from '../../context/formContext'
import { PaymentWayBox } from './PaymentWayBox'

export function CheckoutPage() {
  return (
    <FormContext>
      <Header />
      <CheckoutContainer>
        <CompleteOrderContent>
          <Form />
          <PaymentWayBox />
        </CompleteOrderContent>
        <SelectedCoffees />
      </CheckoutContainer>
    </FormContext>
  )
}
