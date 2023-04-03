import { Link } from 'react-router-dom'
import { Container } from './styles'
import { useAuth } from '../../hooks/auth'

export function Profile() {
  const { signOut } = useAuth()

  return (
    <Container>
      <div>
        <span>Gabriel Dal Bó</span>
        <button onClick={signOut}>sair</button>
      </div>
      <Link to={'/profile'}>
        <img src="https://github.com/gabrielpdb.png" alt="Imagem de Gabriel" />
      </Link>
    </Container>
  )
}
