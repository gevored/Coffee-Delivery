import { ButtonChangeQuantity } from '../ButtonChangeQuantity'
import {
  ItemCoffeeContainer,
  TitleTopItem,
  DescriptionItem,
  ContainterSelectItem,
} from './styles'

import ItemCoffee1 from '../../../assets/ConffeeItens/CoffeeItem.png'
interface ItemCoffeeProps {
  name: string
  price: number
  description: string
  classification: string[]
  id: string
  qtd?: number
}
export function ItemCoffee(props: ItemCoffeeProps) {
  return (
    <ItemCoffeeContainer>
      <div>
        <TitleTopItem>
          <img src={ItemCoffee1} alt="" />
          <div>
            {props.classification.map((item, i) => (
              <p key={i}>{item}</p>
            ))}
          </div>
        </TitleTopItem>
        <DescriptionItem>
          <strong>{props.name}</strong>
          <p>{props.description}</p>
        </DescriptionItem>
        <ContainterSelectItem>
          <span>
            R$ <strong>{(props.price / 100).toFixed(2)}</strong>
          </span>
          <ButtonChangeQuantity coffee={{ ...props }} />
        </ContainterSelectItem>
      </div>
    </ItemCoffeeContainer>
  )
}
