import { SelectedCoffeesContainer, ConfirmButton } from './styles'
import { ListItems } from './ListItems'
import { TotalValue } from './TotalValue'
export function SelectedCoffees() {
  return (
    <SelectedCoffeesContainer>
      <ListItems />
      <TotalValue />
      <ConfirmButton>CONFIRMAR PEDIDO</ConfirmButton>
    </SelectedCoffeesContainer>
  )
}
