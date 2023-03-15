import { Link } from 'react-router-dom'
import { Container } from './styles'

export function Profile() {
  return (
    <Container>
      <div>
        <span>Gabriel Dal Bó</span>
        <Link to={'/signin'}>sair</Link>
      </div>
      <Link to={'/profile'}>
        <img src="https://github.com/gabrielpdb.png" alt="Imagem de Gabriel" />
      </Link>
    </Container>
  )
}
