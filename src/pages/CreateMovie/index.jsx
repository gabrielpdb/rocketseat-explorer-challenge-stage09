import { Container, Form } from './styles'

import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { FiArrowLeft } from 'react-icons/fi'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'
import { Tag } from '../../components/Tag'
import { useState } from 'react'
import { TagInput } from '../../components/TagInput'
import { api } from '../../services/api'
import { useNavigate } from 'react-router-dom'

export function CreateMovie() {
  const [title, setTitle] = useState('')
  const [rating, setRating] = useState()
  const [obs, setObs] = useState('')
  const [newTag, setNewTag] = useState('')
  const [tags, setTags] = useState([])

  const navigate = useNavigate()

  function handleAddNewTag() {
    setTags(prevState => [...prevState, newTag])
    setNewTag('')
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted))
  }

  async function handleNewNote() {
    if (!title) {
      return alert('Digite o título da nota!')
    }

    if (!rating) {
      console.log(rating)
      return alert('Informe a nota do filme')
    }

    if (!obs) {
      return alert('Digite as observações sobre o filme!')
    }

    if (newTag) {
      return alert('Adicione o marcador que ficou sobrando no campo')
    }

    api.post('/notes', {
      title,
      description: obs,
      rating,
      tags
    })

    alert('Nota criada com sucesso!')

    navigate(-1)
  }

  return (
    <Container>
      <Header />

      <div className="content">
        <div className="header">
          <ButtonText icon={FiArrowLeft} title="Voltar" to={'/'} />
          <h2>Novo filme</h2>
        </div>

        <Form>
          <div>
            <Input
              placeholder="Título"
              type="text"
              onChange={e => setTitle(e.target.value)}
            />
            <Input
              placeholder="Sua nota (de  0 a 5)"
              type="number"
              min="0"
              max="5"
              onChange={e => setRating(e.target.value)}
            />
          </div>

          <Textarea
            placeholder="Observações"
            onChange={e => setObs(e.target.value)}
          />

          <Section title={'Marcadores'}>
            {tags.map((tag, index) => {
              return (
                <Tag
                  title={tag}
                  key={index}
                  onClick={() => handleRemoveTag(tag)}
                />
              )
            })}
            <TagInput
              value={newTag}
              onChange={e => setNewTag(e.target.value)}
              onClick={handleAddNewTag}
            />
          </Section>

          <div className="buttons">
            <Button title={'Excluir filme'} disabled />
            <Button title={'Salvar alterações'} onClick={handleNewNote} />
          </div>
        </Form>
      </div>
    </Container>
  )
}
