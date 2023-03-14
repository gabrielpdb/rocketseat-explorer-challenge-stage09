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
