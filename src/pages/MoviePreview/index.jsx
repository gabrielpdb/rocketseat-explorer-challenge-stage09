import { Container } from './styles'
import { FiArrowLeft, FiStar, FiClock } from 'react-icons/fi'

import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { ViewTag } from '../../components/ViewTag'
import { TagList } from '../../components/TagList'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { api } from '../../services/api'
import { Star } from '../../components/Star'
import { Stars } from '../../components/Stars'

export function MoviePreview() {
  const [data, setData] = useState(null)

  const navigate = useNavigate()
  const params = useParams()

  function handleBack() {
    navigate(-1)
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}
      `)

      setData(response.data)
    }

    fetchNote()
  }, [])

  return (
    <Container>
      <Header />

      {data && (
        <div className="content">
          <div className="header">
            <ButtonText
              icon={FiArrowLeft}
              title="Voltar"
              to={'/'}
              onClick={handleBack}
            />
            <h2>
              {data.title}
              <Stars gap={1} rating={data.rating} size={18.75} />
            </h2>
            <div className="infos">
              <div className="author">
                <img
                  src="https://github.com/gabrielpdb.png"
                  alt="Imagem de Gabriel"
                />
                Por {data.user_name}
              </div>
              <div className="created_at">
                <FiClock />
                {data.created_at.replace(/-/g, '/')}
              </div>
            </div>
            <TagList>
              {data.tags &&
                data.tags.map(tag => <ViewTag title={tag.name} key={tag.id} />)}
            </TagList>
          </div>

          <div className="text">
            <p>{data.description}</p>
          </div>
        </div>
      )}
    </Container>
  )
}
