import styled from 'styled-components'
import backgroundImg from '../../assets/background.png'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: stretch;
`

export const Form = styled.form`
  padding: 16rem;
  justify-self: center;
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  > h1 {
    color: ${({ theme }) => theme.COLORS.RED};
    font-size: 4.8rem;
    font-weight: 700;
    line-height: 6.3rem;
  }

  > p {
    align-self: flex-start;
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 1.8rem;
    margin-bottom: 4.8rem;
  }

  > h2 {
    align-self: flex-start;
    font-size: 2.4rem;
    font-weight: 500;
    line-height: 3.2rem;
    margin-bottom: 4.8rem;
  }

  > button {
    margin-top: 2.4rem;
    margin-bottom: 4.2rem;
    width: 100%;
  }
`

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`
