import { TitleForm } from '../TitleForm'
import {
  FormFill,
  InputCEP,
  InputStreet,
  InputDefault,
  InputComplement,
  InputCity,
  InputUF,
  FormContainer,
} from './styles'
export function Form() {
  return (
    <FormContainer>
      <TitleForm />

      <FormFill action="">
        <div>
          <InputCEP placeholder="CEP" type="text" name="cep" />
          <InputStreet placeholder="Rua " type="text" name="street" />
        </div>

        <div>
          <InputDefault placeholder="Número" type="text" name="number" />
          <InputComplement
            placeholder="Complemento"
            type="text"
            name="complement"
          />
        </div>
        <div>
          <InputDefault placeholder="Bairro" type="text" name="district" />
          <InputCity placeholder="Cidade" type="text" name="city" />
          <InputUF placeholder="UF" type="text" name="UF" />
        </div>
      </FormFill>
    </FormContainer>
  )
}
