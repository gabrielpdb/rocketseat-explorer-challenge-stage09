import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 5.6rem;
  display: flex;
  align-items: center;
  justify-content: center;

  > input {
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    padding: 1.9rem 2.4rem;
    border-radius: 1rem;

    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 1.4rem;
    font-weight: 400;
  }
`
