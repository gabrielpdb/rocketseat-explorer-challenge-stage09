import { FiPlus } from 'react-icons/fi'
import { Container } from './styles'

export function TagInput({ onClick, ...rest }) {
  return (
    <Container>
      <input type="text" placeholder="Novo marcador" {...rest} />
      <FiPlus
        size={20}
        onClick={onClick}
        onChange={e => setNewTag(e.target.value)}
      />
    </Container>
  )
}
