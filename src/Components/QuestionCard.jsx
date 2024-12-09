import { React, useEffect, useState } from 'react'
import Continue from './Continue'


function QuestionCard({ question, onNext }) {
    const [optionSelected, setoptionSelected] = useState(null)

    useEffect(() => {
      setoptionSelected(null)
    }, [question])
    

    const handleOptionClick = (option) => {
        setoptionSelected(option)

    }
    const handleContinueClick = ()=>{
        const isCorrect = optionSelected === question.correct_answer
        onNext(isCorrect)
    }
    return (
        <div className="question-card">
            <h2>{question.question}</h2>
            <div className="options">
                {question.incorrect_answers.concat(question.correct_answer).map((option, index) => (
                    <button style={{ backgroundColor: optionSelected === option ? '#e6c200' : '' }} onClick={() => handleOptionClick(option)} key={index}>{option}</button>
                ))}
            </div>
            <Continue optionSelected={optionSelected} onClick={handleContinueClick} />
           
        </div>
    )
}

export default QuestionCard
