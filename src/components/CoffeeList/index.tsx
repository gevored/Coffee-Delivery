import { ItemCoffee } from './ItemCoffee'
import { ItemListContainer, Title } from './styles'
export function CoffeeList() {
  return (
    <ItemListContainer>
      <Title>Nossos Cafés</Title>

      <div>
        <ItemCoffee />
        <ItemCoffee />
        <ItemCoffee />
        <ItemCoffee />
        <ItemCoffee />
        <ItemCoffee />
        <ItemCoffee />
      </div>
    </ItemListContainer>
  )
}
