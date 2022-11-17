import styled from 'styled-components'

export const TotalValueContainer = styled.div`
  height: 92px;
  width: 368;
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
`

export const ValueRowDefault = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${(props) => props.theme['gray-400']};
  font-family: 'Roboto', sans-serif;
  font-size: 0.875rem;
  line-height: 18.2px;
  font-weight: 400;
`

export const ValueRowTotal = styled.div`
  display: flex;
  justify-content: space-between;

  color: ${(props) => props.theme['gray-400']};
  font-family: 'Roboto', sans-serif;
  font-size: 1.25rem;
  line-height: 26px;
  font-weight: 700;
`
