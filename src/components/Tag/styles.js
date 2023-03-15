import styled from 'styled-components'

export const Container = styled.div`
  height: 5.6rem;
  padding: 1.6rem;
  background: ${({ theme, isNew }) =>
    isNew ? theme.COLORS.BACKGROUND_900 : theme.COLORS.BACKGROUND_700};
  border: ${({ isNew }) => (isNew ? 'dashed' : 'none')};
  border-color: ${({ isNew, theme }) => (isNew ? theme.COLORS.GRAY_100 : '')};
  color: ${({ isNew, theme }) => isNew && theme.COLORS.GRAY_100};
  border-radius: 1rem;

  font-size: 1.6rem;
  font-weight: 400;
  display: flex;
  align-items: center;
  gap: 1.6rem;

  svg {
    transform: rotate(${({ isNew }) => (isNew ? '0' : '45deg')});
    color: ${({ theme }) => theme.COLORS.RED};
    cursor: pointer;
  }
`
