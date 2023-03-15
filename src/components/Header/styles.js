import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 6.4rem;
  padding: 3rem 12.3rem;
  border-bottom: 1px solid #3e3b47;

  h1 {
    font-size: 2.4rem;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.RED};
  }
`
