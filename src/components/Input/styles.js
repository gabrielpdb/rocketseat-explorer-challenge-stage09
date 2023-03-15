import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  border-radius: 1rem;
  display: flex;
  align-items: center;
  margin-bottom: 0.8rem;

  > input {
    width: 100%;
    height: 5.6rem;

    padding: 1.2rem;
    background: transparent;

    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 1.4rem;
    font-weight: 400;
  }

  > svg {
    margin-left: 1.6rem;
  }

  > svg fill {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
`
