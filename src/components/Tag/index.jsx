import { Container } from './styles'
import { FiPlus } from 'react-icons/fi'

export function Tag({ isNew = false, title = 'Novo marcador' }) {
  return (
    <Container isNew={isNew}>
      {title}
      <FiPlus size={20} />
    </Container>
  )
}
