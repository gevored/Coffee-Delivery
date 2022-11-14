import { ButtonChangeQuantity } from '../ButtonChangeQuantity'
import {
  ItemCoffeeContainer,
  TitleTopItem,
  DescriptionItem,
  ContainterSelectItem,
} from './styles'

import ItemCoffee1 from '../../../assets/ConffeeItens/CoffeeItem.png'
export function ItemCoffee() {
  return (
    <ItemCoffeeContainer>
      <div>
        <TitleTopItem>
          <img src={ItemCoffee1} alt="" />
          <p>Tradicional</p>
        </TitleTopItem>
        <DescriptionItem>
          <strong>Expresso Tradicional</strong>
          <p>O tradicional Café feito com água quente e grãos moídos</p>
        </DescriptionItem>
        <ContainterSelectItem>
          <span>
            R$ <strong>9,90</strong>
          </span>
          <ButtonChangeQuantity />
        </ContainterSelectItem>
      </div>
    </ItemCoffeeContainer>
  )
}
