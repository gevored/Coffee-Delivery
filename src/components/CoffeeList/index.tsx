import { useContext } from 'react'
import { ItemCoffee } from './ItemCoffee'
import { ItemListContainer, Title } from './styles'
import { CreateContextCaffe } from '../../context/cartContext'

export function CoffeeList() {
  const { initialListCaffes } = useContext(CreateContextCaffe)

  return (
    <ItemListContainer>
      <Title>Nossos Cafés</Title>

      <div>
        {initialListCaffes?.map((item) => (
          <ItemCoffee key={item.id} {...item} />
        ))}
      </div>
    </ItemListContainer>
  )
}
