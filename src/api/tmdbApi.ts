import axiosClient from "./axiosClient"
import apiConfig from "./apiConfig"

export const category = {
  movie: 'movie',
  tv: 'tv'
}

export const movieType = {
  upcoming: 'upcoming',
  popular: 'popular',
  top_rated: 'top_rated'
}

export const tvType = {
  popular: 'popular',
  top_rated: 'top_rated',
  on_the_air: 'on_the_air'
}

const api_key = { api_key: apiConfig.apiKey }

const setUrlParams = (params: any) => {
  const queryParams = { ...params, ...api_key }
  return new URLSearchParams(queryParams)
}

const tmdbApi = {
  getMoviesList: (type: string, params: any) => {
    const urlParams = setUrlParams(params)
    const queryUrl = 'movie/' + movieType[type as keyof typeof movieType] + `/?${urlParams}`
    return axiosClient.get(queryUrl)
  },
  getTvList: (type: string, params: any) => {
    const urlParams = setUrlParams(params)
    const url = 'tv/' + tvType[type as keyof typeof tvType] + `/?${urlParams}`
    return axiosClient.get(url)
  },
  getVideos: (categ: string, id: string) => {
    const urlParams = setUrlParams({})
    const url = category[categ as keyof typeof category] + '/' + id + '/videos?' + urlParams
    return axiosClient.get(url)
  },
  search: (categ: string, params: any) => {
    const url = 'search/' + category[categ as keyof typeof category]
    return axiosClient.get(url, params)
  },
  detail: (categ: string, id: string, params: any) => {
    const url = category[categ  as keyof typeof category] + '/' + id
    return axiosClient.get(url, params)
  },
  credits: (categ: string, id: string) => {
    const url = category[categ as keyof typeof category] + '/' + id + '/credits'
    return axiosClient.get(url, {params: {}})
  },
  similar: (categ: string, id: string) => {
    const urlParams = setUrlParams({})
    const url = category[categ as keyof typeof category] + '/' + id + '/similar?' +  + urlParams
    return axiosClient.get(url)
  }
}

export default tmdbApi