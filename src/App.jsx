import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Category from './Components/Category'
import Results from './Components/Results'
import Question from './Components/Question'
import {  Routes, Route } from 'react-router-dom'

function App() {
  const [optionSelected, setoptionSelected] = useState(null)
  const [score, setscore] = useState(0)
  

  return (
    <>

    <Navbar/>
    
    <Routes>
      <Route path = '/' element = {<Category optionSelected = {optionSelected} setoptionSelected = {setoptionSelected}/>} />
      <Route path = '/question' element = {<Question optionSelected = {optionSelected}score = {score} setscore={setscore}/>} />
      <Route path = '/result' element = {<Results setscore = {setscore} score = {score}/>} />
    </Routes>

    </>
  )
}

export default App
