import styled from 'styled-components'

export const Container = styled.button`
  padding: 1.35rem 3.2rem;
  background: ${({ theme }) => theme.COLORS.RED};

  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  font-size: 1.6rem;
  font-weight: 400;

  display: flex;
  align-items: center;
  gap: 0.8rem;
  border-radius: 0.8rem;
`
