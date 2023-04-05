import { FiStar } from 'react-icons/fi'
import { Container } from './styles'

import { TagList } from '../TagList'
import { ViewTag } from '../ViewTag'

export function MovieNote({ to, title, rating, description, tags }) {
  const stars = []

  for (let index = rating; index > 0; index--) {
    stars.push(<FiStar key={index} />)
  }

  return (
    <Container to={to}>
      <h3>{title}</h3>
      <div className="stars">{stars.map(star => star)}</div>
      <p>{description}</p>

      <TagList>
        {tags &&
          tags.map((tag, index) => <ViewTag title={tag.name} key={index} />)}
      </TagList>
    </Container>
  )
}
