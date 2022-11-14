import { TitlePaymentWay } from './styles'
import IconCash from '../../../assets/Images/IconCash.png'

export function PaymentWayBox() {
  return (
    <TitlePaymentWay>
      <div>
        <img src={IconCash} alt="" />
        <div>
          <strong>Endereço de Entrega</strong>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </div>
      </div>
      <div>
        <select name="payment_way_name" id="payment_way_id">
          <option value="credit_card">CARTÃO DE CRÉDITO</option>
          <option value="credit_card">CARTÃO DE DÉBITO</option>
          <option value="cash">DINHEIRO</option>
        </select>
      </div>
    </TitlePaymentWay>
  )
}
