import { useState, React } from 'react'
import Continue from './Continue'
import { Link } from 'react-router-dom'


const Category = ({ optionSelected, setoptionSelected }) => {
    
    const categories = ["General Knowledge", "Film", "Music", "Television", "Video Games"]
    

    const handleOptionClick = (option) => {
        setoptionSelected(option)

    }

    return (
        <div className='category'>
            <h2>Choose your Trivia Category</h2>

            <div className="options">
                {categories.map((item) => (
                    <button key={item} style={{ backgroundColor: optionSelected === item ? '#e6c200' : '' }} onClick={() => handleOptionClick(item)}>{item}</button>
                ))}
            </div>
            <Link to='/question'>
                <Continue
                    optionSelected={optionSelected}>
                    </Continue>
            </Link>





        </div>
    )
}

export default Category

