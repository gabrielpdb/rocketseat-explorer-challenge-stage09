import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_HIGHLIGHT};
  padding: 3.2rem;
  border-radius: 1.6rem;
  text-decoration: none;
  color: ${({ theme }) => theme.COLORS.WHITE};
  cursor: pointer;

  > h3 {
    font-size: 2.4rem;
    font-weight: 700;
    margin-bottom: 0.8rem;
  }

  > p {
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.875rem;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    margin-bottom: 1.5rem;
    margin-top: 0.8rem;
  }
`
