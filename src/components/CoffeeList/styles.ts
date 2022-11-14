import styled from 'styled-components'

export const ItemListContainer = styled.div`
  padding: 0 5rem;

  & > div {
    display: flex;
    gap: 5rem 2rem;
    flex-wrap: wrap;
  }
`

export const Title = styled.h1`
  margin-bottom: 3rem;

  color: ${(props) => props.theme['gray-400']};

  font-family: 'Baloo 2';
  font-size: 2rem;
  line-height: 41.6px;
  font-weight: 800;
`
