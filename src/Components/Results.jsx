import React from 'react'
import { Link } from 'react-router-dom'

function Results({score, setscore}) {
  return (
    <div className='results'>
        <h2>Your Score</h2>
      <p>You got {score} out of 5 questions correct!</p>
      <Link to= "/">
      <button onClick={()=>setscore(0)}>Play again</button>
      
      </Link>
    </div>
  )
}

export default Results
