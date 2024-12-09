import React from 'react'
import {useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import QuestionCard from './QuestionCard'

function Question({optionSelected, setscore , score}) {

    const navigate = useNavigate()

    const [questions, setquestions] = useState([])
    const [currentQuestion, setcurrentQuestion] = useState(0)

    useEffect(() => {
        fetchQuestions()
    }, [])


    const fetchQuestions = async () => {

        const categoryMap = {
            "General Knowledge":9,
            "Film": 11,
            "Music":12,
            "Television":14,
            "Video Games":15,
        }

        const categoryId = categoryMap[optionSelected]
        console.log(categoryId)
        try {
            const response = await fetch(`https://opentdb.com/api.php?amount=5&category=${categoryId}&difficulty=easy&type=multiple`)
            const data = await response.json()
            setquestions(data.results || [])
        }
        catch (error) {
            console.log(error)
        }
        
        
    }

    const handleNextQuestion = (isCorrect) => {
        
        if(isCorrect){
            setscore((prevScore)=>prevScore+1)
        }

        if(currentQuestion < questions.length-1){
            setcurrentQuestion((prevIndex) => prevIndex + 1);
        }
        else{
            navigate('/result', {state: {score}})
        }
        
    };

    if (questions.length == 0) {
        return <div>Empty array</div>
    }

    return (
        <div>
        
           
            {console.log(questions)}
            {console.log(score)}
                

            {questions.length > 0 && currentQuestion < questions.length ? (
                <QuestionCard
                    question={questions[currentQuestion]}
                    onNext={handleNextQuestion}
                />
            ) : (
                <div>No more questions available.</div>
            )}
        </div>
    )
}

export default Question
