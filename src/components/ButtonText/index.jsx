import { Container } from './styles'

export function ButtonText({ title, to, icon: Icon, ...rest }) {
  return (
    <Container to={to} {...rest}>
      {Icon && <Icon size={12} />}
      {title}
    </Container>
  )
}
