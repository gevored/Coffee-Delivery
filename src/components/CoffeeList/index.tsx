import { ItemCoffee } from './ItemCoffee'
import { ItemListContainer, Title } from './styles'
import { useEffect, useState } from 'react'
import axios from 'axios'

interface ItemCafeProps {
  name: string
  price: number
  id: string
  description: string
  classification: string[]
}

export function CoffeeList() {
  const [listCafes, setListCafes] = useState<ItemCafeProps[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get<ItemCafeProps[]>(
        'http://localhost:3000/type_cafes',
      )
      setListCafes(data)
    }

    fetchData()
  }, [])

  return (
    <ItemListContainer>
      <Title>Nossos Cafés</Title>

      <div>
        {listCafes.map((item) => (
          <ItemCoffee
            key={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
            classification={item.classification}
          />
        ))}
      </div>
    </ItemListContainer>
  )
}
