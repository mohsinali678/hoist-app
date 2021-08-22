import React from 'react'
import { useState ,useEffect} from 'react'
import {useHistory} from "react-router-dom";
function Questionare () {
    const [questions, setQuestions] = useState({
        weight: false,
        height: false,
        waterIntake: false,
        steps: false,
        screenTime: false,
        heartRate: false,
        bloodOxygen: false,
        sleepAmount: false
    });
    let history = useHistory();
    const handleSubmit = (e) => {
        const selectedQuestions = []
        for (let question in questions) {
            if (questions[question]) {
                selectedQuestions.push(question)
            }
        }
        history.push("/new-user-form", {questions: selectedQuestions})
      }

    const handleCheckbox = (e) => {
        setQuestions((prevState) => {
            console.log(prevState)
            console.log(questions)
            console.log({[e.target.name]: !e.target.value})
            return {
                ...prevState, 
                [e.target.name]: !e.target.value

            }
        })
    }

    
    return (
    <section>
        <h2>What do you want to focus on?</h2>
        <form onSubmit={handleSubmit}> 
            <input type="checkbox" id="weight" name="weight" onClick={handleCheckbox} value={questions.weight}/>
            <label for="weight">Weight</label>
            <br></br>
            <input type="checkbox" id="height" name="height" onClick={handleCheckbox} value={questions.height}/>
            <label for="height">Height</label>
            <br></br>
            <input type="checkbox" id="water-intake" name="waterIntake" onClick={handleCheckbox} value={questions.waterIntake}/>
            <label for="water-intake">Water intake</label>
            <br></br>
            <input type="checkbox" id="steps" name="steps" onClick={handleCheckbox} value={questions.steps}/>
            <label for="steps">Steps</label>
            <br></br>
            <input type="checkbox" id="screen-time" name="screenTime" onClick={handleCheckbox} value={questions.screenTime}/>
            <label for="screen-time">Screen time</label>
            <br></br>
            <input type="checkbox" id="heart-rate" name="heartRate" onClick={handleCheckbox} value={questions.heartRate}/>
            <label for="heart-rate">Heart rate</label>
            <br></br>
            <input type="checkbox" id="blood-oxygen" name="bloodOxygen" onClick={handleCheckbox} value={questions.bloodOxygen}/>
            <label for="blood-oxygen">Blood oxygen level</label>
            <br></br>
            <input type="checkbox" id="sleep-amount" name="sleepAmount" onClick={handleCheckbox} value={questions.sleepAmount}/>
            <label for="sleep-amount">Sleep amount</label>
            <br></br>
            <button type="submit">Submit</button>
        </form>
    </section>)
    
    
}
export default Questionare