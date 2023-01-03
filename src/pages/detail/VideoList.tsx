import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import tmdbApi from '../../api/tmdbApi'
import { IVideo } from '../../interfaces'
import Video from './Video'

interface IProps {
  id: string
}

export default function VideoList(props: IProps) {
  const {category} = useParams()
  const [videos, setVideos] = useState<IVideo[]>([])

  useEffect(() => {
    const getVideos = async () => {
      const res = await tmdbApi.getVideos(category!, props.id)
      setVideos(res.data.results.slice(0, 5))
    }
    getVideos()
  }, [category, props.id])

  return (
    <>
      {
        videos.map((item, i) => (
          <Video key={i} item={item}/>
        ))
      }
    </>
  )
}
