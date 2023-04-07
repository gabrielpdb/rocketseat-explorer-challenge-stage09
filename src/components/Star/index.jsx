import { FiStar } from 'react-icons/fi'
import { Container } from './styles'

export function Star({ check, size }) {
  return (
    <Container check={check}>
      <FiStar size={size} />
    </Container>
  )
}
