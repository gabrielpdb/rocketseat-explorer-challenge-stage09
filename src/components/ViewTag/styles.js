import styled from 'styled-components'

export const Container = styled.span`
  font-size: 1.2rem;
  font-weight: 400;
  padding: 0.5rem 1.6rem;
  background: ${({ theme }) => theme.COLORS.GRAY_300};
  border-radius: 0.8rem;

  font-family: 'Roboto', sans-serif;
`
