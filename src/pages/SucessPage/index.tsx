import { Header } from '../../components/Header'
import DeliveryPerson from '../../assets/Images/DeliveryPerson.png'
import PointPurpleFullIcon from '../../assets/Images/PointPurpleFullIcon.png'
import TimeFullIcon from '../../assets/Images/TimeFullIcon.png'
import CashFullIcon from '../../assets/Images/CashFullIcon.png'

import {
  RowInfo,
  SucessPageContainer,
  TitleDelivery,
  SetInfo,
  InfoContet,
} from './styles'
export function SucessPage() {
  return (
    <>
      <Header />

      <SucessPageContainer>
        <TitleDelivery>
          <h1>Uhu! Pedido confirmado</h1>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </TitleDelivery>
        <InfoContet>
          <SetInfo>
            <div>
              <RowInfo>
                <img src={PointPurpleFullIcon} alt="" />
                <span>
                  <p>
                    Entrega em <strong>Rua João Daniel Martinelli,102 </strong>
                  </p>
                  <p>Farrapos - Porto ALegre, RS</p>
                </span>
              </RowInfo>
              <RowInfo>
                <img src={TimeFullIcon} alt="" />
                <span>
                  <p>Previsão de entrega</p>
                  <p>
                    <strong>20 min - 30 min</strong>
                  </p>
                </span>
              </RowInfo>
              <RowInfo>
                <img src={CashFullIcon} alt="" />
                <span>
                  <p>Pagamento na entrega</p>
                  <p>
                    <strong>Cartão de Crédito</strong>
                  </p>
                </span>
              </RowInfo>
            </div>
          </SetInfo>
          <span>
            <img src={DeliveryPerson} alt="" />
          </span>
        </InfoContet>
      </SucessPageContainer>
    </>
  )
}
