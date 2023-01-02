import { Link } from 'react-router-dom'
import Button from '../button/Button'
import { category } from '../../api/tmdbApi'
import apiConfig from '../../api/apiConfig'
import { IMovieItem } from '../../interfaces'
import './movie-card.scss'

interface IProps {
  category: string
  item: IMovieItem
}

export default function MovieCard(props: IProps) {
  const item  = props.item
  const link = '/' + category[props.category as keyof typeof category] + '/' + item.id
  const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path)

  return (
    <Link to={link}>
      <div className="movie-card" style={{backgroundImage: `url(${bg})`}}>
        <Button>
          <i className="bx bx-play"></i>
        </Button>
      </div>
      <h3>{item.title || item.name}</h3>
    </Link>
  )
}
