import React from 'react'
import Headers from './Components/Headers'
import Home from './Components/Home'
import CardDetails from './Components/CardDetails'
import {Routes,Route} from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Headers/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<CardDetails/>}/>
      </Routes>
    </div>
  )
}

export default App
