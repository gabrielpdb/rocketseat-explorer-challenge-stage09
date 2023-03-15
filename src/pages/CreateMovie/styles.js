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
      flex-direction: column;
      gap: 2.4rem;
      align-items: flex-start;

      margin-bottom: 4rem;

      h2 {
        font-size: 3.65rem;
        font-weight: 500;
      }
    }
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 4rem;

  > div {
    display: flex;
    align-items: center;
    gap: 4rem;
  }

  .buttons {
    display: flex;
    justify-content: space-between;

    button {
      width: 100%;
    }
  }
`
