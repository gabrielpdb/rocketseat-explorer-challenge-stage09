import { FiStar } from 'react-icons/fi'
import { Container } from './styles'

import { TagList } from '../TagList'
import { ViewTag } from '../ViewTag'

export function MovieNote() {
  return (
    <Container>
      <h3>Interestellar</h3>
      <div className="stars">
        <FiStar />
        <FiStar />
        <FiStar />
        <FiStar />
        <FiStar />
      </div>
      <p>
        Pragas nas colheitas fizeram a civilização humana regredir para uma
        sociedade agrátia em futuro de data desconhecida. Cooper, ex piloto da
        NASA, tem uma fazendo com sua família. Murphy, a filha de dez anos de
        Cooper, acredita que seu quarto está assombrado por um fantasma que
        tenta se...
      </p>

      <TagList>
        <ViewTag title={'Ficção Científica'} />
        <ViewTag title={'Drama'} />
        <ViewTag title={'Família'} />
      </TagList>
    </Container>
  )
}
