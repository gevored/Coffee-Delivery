import { ReactNode } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const FormSchema = z.object({
  cep: z.string(),
  street: z.string(),
  numberStreet: z.number({
    invalid_type_error: 'porfavor só inserir números',
  }),
  complement: z.string(),
  area: z.string().min(1),
  city: z.string(),
  UF: z.string().min(2),
  radioPaymentMethod: z.string(),
})

export type FormSchemaType = z.infer<typeof FormSchema>

interface FormContextProps {
  children: ReactNode
}

export function FormContext({ children }: FormContextProps) {
  const methods = useForm<FormSchemaType>({ resolver: zodResolver(FormSchema) })
  return <FormProvider {...methods}>{children}</FormProvider>
}
