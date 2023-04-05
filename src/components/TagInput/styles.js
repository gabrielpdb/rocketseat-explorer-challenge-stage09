import styled from 'styled-components'

export const Container = styled.div`
  width: 35%;
  height: 5.6rem;
  padding: 1.6rem;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  border: dashed;
  border-color: ${({ theme }) => theme.COLORS.GRAY_100};

  border-radius: 1rem;
  display: flex;
  align-items: center;
  gap: 1.6rem;

  > input {
    width: 100%;
    background: transparent;
    outline: none;
    font-size: 1.6rem;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  svg {
    color: ${({ theme }) => theme.COLORS.RED};
    cursor: pointer;
  }
`
