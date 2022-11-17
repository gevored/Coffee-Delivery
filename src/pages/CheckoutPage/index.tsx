import { CheckoutContainer, CompleteOrderContent } from './styles'
import { Header } from '../../components/Header'
import { Form } from './Form'
import { PaymentWayBox } from './PaymentWayBox'
import { SelectedCoffees } from './SelectedCoffees'
export function CheckoutPage() {
  return (
    <>
      <Header />
      <CheckoutContainer>
        <CompleteOrderContent>
          <Form />
          <PaymentWayBox />
        </CompleteOrderContent>
        <SelectedCoffees />
      </CheckoutContainer>
    </>
  )
}
