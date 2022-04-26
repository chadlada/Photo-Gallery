import React from 'react'
import data from './data.json'
import { Link } from 'react-router-dom'

// Home page

export function Home() {
  return (
    <div>
      <section>
        <p>
          <Link to={`/${Object.keys(data)[0]}`}>{data.pandas.title}</Link>
        </p>
        <p>{data.pandas.description}</p>
        <img src={data.pandas.photos[0].imageURL} width="600px" />
      </section>
      <section>
        <p>
          <Link to="/miniatures">{data.miniatures.title}</Link>
        </p>
        <p>{data.miniatures.description}</p>
        <img src={data.miniatures.photos[0].imageURL} width="600px" />
      </section>
    </div>
  )
}
