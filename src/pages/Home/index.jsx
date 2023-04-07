import { Container, NewMovie } from './styles'
import { Header } from '../../components/Header'
import { MovieNote } from '../../components/MovieNote'
import { FiPlus } from 'react-icons/fi'
import { useEffect, useState } from 'react'
import { api } from '../../services/api'

export function Home() {
  const [search, setSearch] = useState('')
  const [notes, setNotes] = useState([])

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes?title=${search}`)

      setNotes(response.data)
    }

    fetchNotes()
  }, [search])
  return (
    <Container>
      <Header onChange={e => setSearch(e.target.value)} />

      <div className="content">
        <div className="header">
          <h2>Meus filmes</h2>
          <NewMovie to="/create">
            <FiPlus />
            Adicionar filme
          </NewMovie>
        </div>
        <div className="movies">
          {notes &&
            notes.map(note => (
              <MovieNote
                to={'/preview'}
                title={note.title}
                description={note.description}
                rating={note.rating}
                tags={note.tags}
                key={note.id}
              />
            ))}
        </div>
      </div>
    </Container>
  )
}
