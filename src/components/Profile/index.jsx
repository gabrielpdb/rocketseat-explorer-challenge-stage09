import { Link } from 'react-router-dom'
import { Container } from './styles'

export function Profile() {
  return (
    <Container>
      <div>
        <span>Gabriel Dal Bó</span>
        <a href="#">sair</a>
      </div>
      <img src="https://github.com/gabrielpdb.png" alt="Imagem de Gabriel" />
    </Container>
  )
}
