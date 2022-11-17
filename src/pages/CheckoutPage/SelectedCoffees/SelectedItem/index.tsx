import { IncreaseDecreaseButton } from '../../../../components/IncreaseDecreaseButton'
import {
  SetButtons,
  SelectedItemContainer,
  RemoveButton,
  Divider,
} from './styles'

import CoffeeItem from '../../../../assets/ConffeeItens/CoffeeItem.png'
import IconTrash from '../../../../assets/Images/IconTrash.png'

export function SelectedItem() {
  return (
    <>
      <SelectedItemContainer>
        <img src={CoffeeItem} alt="" />

        <div>
          <h1>Expresso Tradicional</h1>
          <SetButtons>
            <IncreaseDecreaseButton />
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
