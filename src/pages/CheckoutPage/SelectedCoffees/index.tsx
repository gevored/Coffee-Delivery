import { SelectedCoffeesContainer, ConfirmButton } from './styles'
import { ListItems } from './ListItems'
import { TotalValue } from './TotalValue'
import { useFormContext } from 'react-hook-form'

interface IForm {
  fieldForm?: {
    CEP: string
    adress: string
    number: string
    area: string
    city: string
    uf: string
  }
}
export function SelectedCoffees() {
  const { handleSubmit } = useFormContext()

  const handleConfirmationPayment = (data: IForm) => {
    console.log(data)
  }

  return (
    <SelectedCoffeesContainer>
      <ListItems />
      <TotalValue />
      <ConfirmButton onClick={handleSubmit(handleConfirmationPayment)}>
        CONFIRMAR PEDIDO
      </ConfirmButton>
    </SelectedCoffeesContainer>
  )
}
