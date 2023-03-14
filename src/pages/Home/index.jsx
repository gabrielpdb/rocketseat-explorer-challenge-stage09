import { Container } from './styles'
import { Header } from '../../components/Header'
import { MovieNote } from '../../components/MovieNote'

export function Home() {
  return (
    <Container>
      <Header />

      <div className="content">
        <div className="header">
          <h2>Meus filmes</h2>
          <button>Adicionar filme</button>
        </div>
        <MovieNote />
        <MovieNote />
        <MovieNote />
      </div>
    </Container>
  )
}
