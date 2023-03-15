import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  > .content {
    height: 85%;
    display: flex;
    flex-direction: column;

    padding: 5rem 12.3rem;

    gap: 2.4rem;

    > .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 4rem;

      h2 {
        font-size: 3.2rem;
        font-weight: 400;
      }
    }

    > .movies {
      max-height: 85%;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      gap: 2.4rem;
    }
  }
`

export const NewMovie = styled(Link)`
  padding: 1.35rem 3.2rem;
  background: ${({ theme }) => theme.COLORS.RED};

  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  font-size: 1.6rem;
  font-weight: 400;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  border-radius: 0.8rem;
  transition: 400ms;

  &:hover {
    filter: brightness(0.6);
  }
`
