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

    overflow-y: auto;

    > .header {
      display: flex;
      flex-direction: column;
      gap: 2.4rem;
      align-items: flex-start;

      margin-bottom: 4rem;

      h2 {
        font-size: 3.6rem;
        font-weight: 500;

        display: flex;
        align-items: center;
        gap: 2rem;

        .stars {
          display: flex;
          align-items: center;
          gap: 1rem;
          color: ${({ theme }) => theme.COLORS.RED};
        }
      }

      .infos {
        display: flex;
        align-items: center;
        gap: 0.8rem;
        font-family: 'Roboto', sans-serif;
        font-size: 1.6rem;
        font-weight: 400;

        .author {
          display: flex;
          align-items: center;
          gap: 0.8rem;

          img {
            width: 1.6rem;
            height: 1.6rem;
            border-radius: 50%;
          }
        }

        .created_at {
          display: flex;
          align-items: center;
          gap: 0.8rem;

          svg {
            color: ${({ theme }) => theme.COLORS.RED};
          }
        }
      }
    }

    .text {
      font-size: 1.6rem;
      font-weight: 400;
      line-height: 2.1rem;
      text-align: justify;

      display: flex;
      flex-direction: column;
      gap: 2.5rem;
    }
  }
`
