import { Container } from './styles'

import { Input } from '../Input'
import { Profile } from '../Profile'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <Container>
      <Link to={'/'}>
        <h1>RocketMovies</h1>
      </Link>
      <Input type="text" name="search" placeholder={'Pesquisar por título'} />
      <Profile />
    </Container>
  )
}
