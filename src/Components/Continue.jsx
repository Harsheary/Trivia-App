import React from 'react'

const Continue = ({optionSelected, onClick}) => {
  return (
    <button onClick={onClick} className='continue'  disabled = {!optionSelected}>Continue</button>
  )
}

export default Continue
