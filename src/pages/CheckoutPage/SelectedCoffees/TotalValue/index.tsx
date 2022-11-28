import { TotalValueContainer, ValueRowDefault, ValueRowTotal } from './styles'
import { CreateContextCaffe } from '../../../../context/cartContext'
import { useContext } from 'react'
export function TotalValue() {
  const { selectedListCaffes } = useContext(CreateContextCaffe)

  const totalValue = selectedListCaffes?.reduce(
    (partialSum, obj) => partialSum + obj.price * obj.qtd!,
    0
  )

  return (
    <TotalValueContainer>
      <ValueRowDefault>
        <p>Total de itens</p>
        <p>R$ {totalValue ? (totalValue / 100).toFixed(2) : 0}</p>
      </ValueRowDefault>
      <ValueRowDefault>
        <p>Entrega</p>
        <p>R$3,50</p>
      </ValueRowDefault>
      <ValueRowTotal>
        <p>Total</p>
        <p>{totalValue ? (totalValue / 100 + 3.5).toFixed(2) : 0}</p>
      </ValueRowTotal>
    </TotalValueContainer>
  )
}
