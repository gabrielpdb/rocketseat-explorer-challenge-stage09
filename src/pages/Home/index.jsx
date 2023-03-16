import { Container, NewMovie } from './styles'
import { Header } from '../../components/Header'
import { MovieNote } from '../../components/MovieNote'
import { FiPlus } from 'react-icons/fi'

export function Home() {
  return (
    <Container>
      <Header />

      <div className="content">
        <div className="header">
          <h2>Meus filmes</h2>
          <NewMovie to="/create">
            <FiPlus />
            Adicionar filme
          </NewMovie>
        </div>
        <div className="movies">
          <MovieNote to={'/preview'} />
          <MovieNote to={'/preview'} />
          <MovieNote to={'/preview'} />
        </div>
      </div>
    </Container>
  )
}
