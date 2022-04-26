import React from 'react'
import { Routes, Route } from 'react-router'
import { Home } from './pages/Home'
import { Link } from 'react-router-dom'
import { PhotoDetail } from './pages/PhotoDetail'

export function App() {
  return (
    <div>
      <header>
        <h1>These are a few of my favorite things</h1>
        <h2>by Chad Lada</h2>
        <p>
          <Link to="/">Home</Link>
        </p>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/:things" element={<PhotoList />}></Route>
          <Route path="/:things/:photoIndex" element={<PhotoDetail />}></Route>
        </Routes>
      </main>
    </div>
  )
}
