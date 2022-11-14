import { CheckoutContainer, CompleteOrderContent } from './styles'
import { Header } from '../../components/Header'
import { Form } from './Form'
import { PaymentWayBox } from './PaymentWayBox'

export function CheckoutPage() {
  return (
    <>
      <Header />
      <CheckoutContainer>
        <CompleteOrderContent>
          <Form />
          <PaymentWayBox />
        </CompleteOrderContent>
      </CheckoutContainer>
    </>
  )
}
