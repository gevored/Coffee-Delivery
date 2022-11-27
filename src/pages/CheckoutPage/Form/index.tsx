import { TitleForm } from './TitleForm'
import { useFormContext } from 'react-hook-form'
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
import { ErrorMessage } from '@hookform/error-message'

export function Form() {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  console.log(errors)
  return (
    <FormContainer>
      <TitleForm />

      <FormFill action="">
        <div>
          <InputCEP placeholder="CEP" type="text" {...register('cep')} />
          <InputStreet placeholder="Rua " type="text" {...register('street')} />
        </div>

        <div>
          <ErrorMessage errors={errors} name="number_street" />
          <InputDefault
            placeholder="Número"
            type="string"
            {...register('numberStreet', {
              valueAsNumber: true,
            })}
          />
          <InputComplement
            placeholder="Complemento"
            type="text"
            {...register('complement')}
          />
        </div>
        <div>
          <InputDefault
            placeholder="Bairro"
            type="text"
            {...register('area')}
          />
          <InputCity placeholder="Cidade" type="text" {...register('city')} />
          <InputUF placeholder="UF" type="text" {...register('UF')} />
        </div>
      </FormFill>
    </FormContainer>
  )
}
