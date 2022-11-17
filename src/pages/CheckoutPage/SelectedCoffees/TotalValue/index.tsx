import { TotalValueContainer, ValueRowDefault, ValueRowTotal } from './styles'
export function TotalValue() {
  return (
    <TotalValueContainer>
      <ValueRowDefault>
        <p>Total de itens</p>
        <p>R$ 29,70</p>
      </ValueRowDefault>
      <ValueRowDefault>
        <p>Entrega</p>
        <p>R$3,50</p>
      </ValueRowDefault>
      <ValueRowTotal>
        <p>Total</p>
        <p>R$ 33,20</p>
      </ValueRowTotal>
    </TotalValueContainer>
  )
}
