import React from 'react'
import { useParams } from 'react-router'
import data from './data.json'

export function PhotoDetail() {
  const params = useParams<{ things: 'pandas' | 'miniatures'; id: string }>()
  console.log(params)
  return (
    <div>
      <h1>{data[params.things!].photos[Number(params.id)].title}</h1>
      <img src={data[params.things!].photos[Number(params.id)].imageURL} />
    </div>
  )
}
