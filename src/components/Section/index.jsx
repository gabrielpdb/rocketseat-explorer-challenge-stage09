import { Container } from './styles'

export function Section({ title, children }) {
  return (
    <Container>
      <h3>{title}</h3>
      <div>{children}</div>
    </Container>
  )
}
