export interface IResult {
  description: string
  favorite_count: number
  id: number
  item_count: number
  iso_639_1: string
  list_type: string
  name: string
  poster_path: null | string
}

export interface IMovieItem {
  backdrop_path: string
  poster_path: string
  overview: string
  title: string
  id: string
}

export interface IMovieList {
  id: number
  page: number
  results: IResult[]
}