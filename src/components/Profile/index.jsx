import { Link } from 'react-router-dom'
import { Container } from './styles'
import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'

export function Profile() {
  const { signOut, user } = useAuth()
  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder

  return (
    <Container>
      <div>
        <span>Gabriel Dal Bó</span>
        <button onClick={signOut}>sair</button>
      </div>
      <Link to={'/profile'}>
        <img src={avatarUrl} alt="Imagem de Gabriel" />
      </Link>
    </Container>
  )
}
