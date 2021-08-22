import React from 'react'
import { useState ,useEffect} from 'react'

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

    const handleSubmit = (e) => {
        if (e.target.value === 'yes') {
            setQuestion1({
                q1: "How many cardio did you burn today?",
                q2: "",
                q3: "",
                q4: "",
                q5: ""
            }) 
        }

      }



    
    return (
    <section>
        <h2>What do you want to focus on?</h2>
        <form onSubmit={handleSubmit}> 
            <input type="checkbox" id="weight" name="weight" value="true"/>
            <label for="weight">Weight</label>
            <br></br>
            <input type="checkbox" id="height" name="height" value="true"/>
            <label for="height">Height</label>
            <br></br>
            <input type="checkbox" id="water-intake" name="water-intake" value="true"/>
            <label for="water-intake">Water intake</label>
            <br></br>
            <input type="checkbox" id="steps" name="steps" value="true"/>
            <label for="steps">Steps</label>
            <br></br>
            <input type="checkbox" id="screen-time" name="screen-time" value="true"/>
            <label for="screen-time">Screen time</label>
            <br></br>
            <input type="checkbox" id="heart-rate" name="heart-rate" value="true"/>
            <label for="heart-rate">Heart rate</label>
            <br></br>
            <input type="checkbox" id="blood-oxygen" name="blood-oxygen" value="true"/>
            <label for="blood-oxygen">Blood oxygen level</label>
            <br></br>
            <input type="checkbox" id="sleep-amount" name="sleep-amount" value="true"/>
            <label for="sleep-amount">Sleep amount</label>
            <br></br>
            <button type="submit">Submit</button>
        </form>
    </section>)
    
    
}
export default Questionare