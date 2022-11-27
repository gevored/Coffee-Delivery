import { SelectedCoffeesContainer, ConfirmButton } from './styles'
import { ListItems } from './ListItems'
import { TotalValue } from './TotalValue'
import { useFormContext } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { FormSchemaType } from '../../../context/formContext'
import { useContext } from 'react'
import { CreateContextCaffe } from '../../../context/cartContext'
// import { FormScemaType } from '../../../context/formContext'
// import { resolvePath } from 'react-router-dom'

export function SelectedCoffees() {
  const { handleSubmit } = useFormContext<FormSchemaType>()
  const { saveFormData } = useContext(CreateContextCaffe)
  const navigate = useNavigate()

  const handleConfirmationPayment = (data: FormSchemaType) => {
    saveFormData(data)
    navigate('/success')
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
