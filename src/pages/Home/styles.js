import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  > .content {
    padding: 5rem 12.3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.4rem;

    > .header {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 4rem;

      h2 {
        font-size: 3.2rem;
        font-weight: 400;
      }
    }
  }
`
