import { IncreaseDecreaseButton } from '../../../../components/IncreaseDecreaseButton'
import {
  SetButtons,
  SelectedItemContainer,
  RemoveButton,
  Divider,
} from './styles'

import CoffeeItem from '../../../../assets/ConffeeItens/CoffeeItem.png'
import IconTrash from '../../../../assets/Images/IconTrash.png'

interface SelectedItemProps {
  coffee: {
    name: string
    price: number
    description: string
    classification: string[]
    id: string
    qtd?: number
  }
}

export function SelectedItem({ coffee }: SelectedItemProps) {
  return (
    <>
      <SelectedItemContainer>
        <img src={CoffeeItem} alt="" />

        <div>
          <h1>{coffee.name}</h1>
          <SetButtons>
            <IncreaseDecreaseButton coffee={{ ...coffee }} />
            <RemoveButton>
              <img src={IconTrash} alt="" />
              <p>REMOVER</p>
            </RemoveButton>
          </SetButtons>
        </div>
      </SelectedItemContainer>
      <Divider />
    </>
  )
}
