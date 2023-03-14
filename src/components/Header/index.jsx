import { Container } from './styles'

import { Input } from '../Input'
import { Profile } from '../Profile'

export function Header() {
  return (
    <Container>
      <h1>RocketMovies</h1>
      <Input type="text" name="search" title={'Pesquisar por título'} />
      <Profile />
    </Container>
  )
}
