import { Container } from './styles'
import { Header } from '../../components/Header'
import { MovieNote } from '../../components/MovieNote'
import { Button } from '../../components/Button'
import { FiPlus } from 'react-icons/fi'

export function Home() {
  return (
    <Container>
      <Header />

      <div className="content">
        <div className="header">
          <h2>Meus filmes</h2>
          <Button title="Adicionar filme" icon={FiPlus} />
        </div>
        <div className="movies">
          <MovieNote />
          <MovieNote />
          <MovieNote />
        </div>
      </div>
    </Container>
  )
}
