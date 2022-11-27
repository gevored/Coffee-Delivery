import { ReactNode } from 'react'
import { useForm, FormProvider } from 'react-hook-form'

interface FormContextProps {
  children: ReactNode
}

export function FormContext({ children }: FormContextProps) {
  const methods = useForm()
  return <FormProvider {...methods}>{children}</FormProvider>
}
