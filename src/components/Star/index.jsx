import { FiStar } from 'react-icons/fi'
import { Container } from './styles'

export function Star({ check }) {
  return (
    <Container check={check}>
      <FiStar />
    </Container>
  )
}
