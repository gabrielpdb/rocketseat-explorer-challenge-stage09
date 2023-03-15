import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.9rem;
  text-decoration: none;

  > div {
    min-width: 12.5rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    font-size: 1.4rem;

    span {
      font-weight: 700;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }

    a {
      font-weight: 400;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }

  img {
    width: 6.4rem;
    height: 6.4rem;
    border-radius: 50%;
  }
`
