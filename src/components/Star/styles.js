import styled from 'styled-components'

export const Container = styled.div`
  svg {
    color: ${({ theme }) => theme.COLORS.RED};
    fill: ${({ check, theme }) => (check ? theme.COLORS.RED : 'trensparent')};
  }
`
