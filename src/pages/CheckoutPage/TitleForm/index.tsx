import { TitleFormContainer } from './styles'
import OrangePoint from '../../../assets/Images/OrangePoint.png'

export function TitleForm() {
  return (
    <TitleFormContainer>
      <img src={OrangePoint} alt="" />
      <div>
        <strong>Endereço de Entrega</strong>
        <p>Informe o endereço onde deseja receber seu pedido</p>
      </div>
    </TitleFormContainer>
  )
}
