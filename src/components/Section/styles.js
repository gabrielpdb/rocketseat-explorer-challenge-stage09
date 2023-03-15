import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  h3 {
    font-size: 2rem;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    align-self: start;
  }

  > div {
    width: 100%;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 2.4rem;
    padding: 1.6rem;
    border-radius: 0.8rem;
  }
`
