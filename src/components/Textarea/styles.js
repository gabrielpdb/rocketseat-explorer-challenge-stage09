import styled from 'styled-components'

export const Container = styled.textarea`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  border-radius: 1rem;
  min-height: 27.4rem;
  padding: 1.2rem;

  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: 1.4rem;
  font-weight: 400;
  resize: none;
`
