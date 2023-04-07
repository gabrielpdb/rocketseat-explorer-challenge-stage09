import { Star } from '../Star'
import { Container } from './styles'

export function Stars({ size = 16, rating = 4, gap = 0.5 }) {
  const stars = []
  for (let index = 1; index <= 5; index++) {
    let fill = index <= rating
    stars.push(<Star check={fill} key={index} size={size} />)
  }
  return <Container gap={gap}>{stars.map(star => star)}</Container>
}
