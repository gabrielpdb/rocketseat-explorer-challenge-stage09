import { Container } from './styles'

import { TagList } from '../TagList'
import { ViewTag } from '../ViewTag'
import { Stars } from '../Stars'

export function MovieNote({ title, rating, description, tags, ...rest }) {
  return (
    <Container {...rest}>
      <h3>{title}</h3>

      <Stars gap={0.5} rating={rating} size={10} />
      <p>{description}</p>

      <TagList>
        {tags &&
          tags.map((tag, index) => <ViewTag title={tag.name} key={index} />)}
      </TagList>
    </Container>
  )
}
