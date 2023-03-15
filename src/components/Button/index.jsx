import { Container } from './styles'

export function Button({ title, to, icon: Icon, ...rest }) {
  return (
    <Container type="button" {...rest}>
      {Icon && <Icon size={16} />}
      {title}
    </Container>
  )
}
