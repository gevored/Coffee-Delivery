import { SelectedItem } from '../SelectedItem'
import { ListItemsContainer } from './stylex'
import { useContext } from 'react'
import { CreateContextCaffe } from '../../../../context/cartContext'

export function ListItems() {
  const { selectedListCaffes } = useContext(CreateContextCaffe)

  return (
    <ListItemsContainer>
      {selectedListCaffes?.map((item) => (
        <SelectedItem key={item.id} coffee={{ ...item }} />
      ))}
    </ListItemsContainer>
  )
}
