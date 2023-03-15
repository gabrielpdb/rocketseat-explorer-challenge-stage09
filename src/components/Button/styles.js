import styled from 'styled-components'

export const Container = styled.button`
  padding: 1.35rem 3.2rem;
  background: ${({ theme, disabled }) =>
    disabled ? theme.COLORS.BACKGROUND_900 : theme.COLORS.RED};

  color: ${({ theme, disabled }) =>
    disabled ? theme.COLORS.RED : theme.COLORS.BACKGROUND_900};
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
