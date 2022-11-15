import { TitlePaymentWay, DivTitle } from './styles'
import IconCash from '../../../assets/Images/IconCash.png'
import { SelectButton } from '../SelectButtons'
export function PaymentWayBox() {
  return (
    <TitlePaymentWay>
      <div>
        <div>
          <img src={IconCash} alt="" />
          <DivTitle>
            <strong>Pagamento</strong>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </DivTitle>
        </div>
        <div>
          <SelectButton />
        </div>
      </div>
    </TitlePaymentWay>
  )
}
