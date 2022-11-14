import styled from 'styled-components'

export const FormContainer = styled.div`
  background-color: ${(props) => props.theme['gray-100']};
  padding: 0 40px;
  width: 640px;
  height: 372px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const FormFill = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  div:nth-child(1) {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  div:nth-child(2) {
    display: flex;
    gap: 0.8rem;
  }
  div:nth-child(3) {
    display: flex;
    gap: 0.8rem;
  }
`

const InputBase = styled.input`
  background-color: ${(props) => props.theme['gray-300']};
  border: 1px ${(props) => props.theme['gray-50']} solid;
  border-radius: 4px;
  padding-left: 0.5rem;
  outline: none;
  font-family: 'Roboto';
  font-size: 0.875rem;
  line-height: 18.2px;
  font-weight: 400;
  color: ${(props) => props.theme['brown-400']};

  ::placeholder {
    padding-left: 0.5rem;
  }
`

export const InputCEP = styled(InputBase)`
  width: 200px;
  height: 42px;
  ::placeholder {
    margin-left: 8px;
  }
`

export const InputStreet = styled(InputBase)`
  width: 100%;
  height: 42px;
`

export const InputDefault = styled(InputBase)`
  width: 200px;
  height: 42px;
`

export const InputComplement = styled(InputBase)`
  width: 348px;
  height: 42px;
`

export const InputCity = styled(InputBase)`
  width: 276px;
  height: 42px;
`

export const InputUF = styled(InputBase)`
  width: 60px;
  height: 42px;
`
