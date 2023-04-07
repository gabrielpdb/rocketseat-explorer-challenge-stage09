import { FiStar } from 'react-icons/fi'
import { Container } from './styles'

import { TagList } from '../TagList'
import { ViewTag } from '../ViewTag'
import { Star } from '../Star'

export function MovieNote({ to, title, rating, description, tags }) {
  const stars = []
  for (let index = 1; index <= 5; index++) {
    let fill = index <= rating
    stars.push(<Star check={fill} key={index} />)
  }
  console.log()

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
