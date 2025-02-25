import { useState } from 'react'
import './App.css'
import MainPage from './pages/MainPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MovieDetail from './pages/MovieDetail'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<MainPage/>} />
      <Route path='/movie/:movieId' element={<MovieDetail />} />
    </Routes>
    
    </BrowserRouter>
  )
}

export default App
