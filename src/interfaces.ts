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
  name: string
  id: string
  genres: IGenre[]
}

export interface IMovieList {
  id: number
  page: number
  results: IResult[]
}

export interface IGenre {
  id: number
  name: string
}

export interface ICast {
  id: number
  name: string
  profile_path: string
}

export interface IVideo {
  iso_639_1: string
  iso_3166_1: string
  name: string
  key: string
  site: string
  size: number
  type: string
  id: string
}