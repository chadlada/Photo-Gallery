import React from 'react'
import { Link, useParams } from 'react-router-dom'
import data from './data.json'

export function PhotoList() {
  const params = useParams<{ things: 'pandas' | 'miniatures' }>()

  return (
    <div>
      <p>{data[params.things].title}</p>
      <p>{data[params.things].description}</p>
      <ul>
        {data[params.things].photos.map((photo, index) => {
          return (
            <>
              <img key={index} src={photo.imageURL} width="300px" />
              <Link to={`/${params.things}/${index}`}>{photo.title}</Link>
            </>
          )
        })}
      </ul>
    </div>
  )
}
