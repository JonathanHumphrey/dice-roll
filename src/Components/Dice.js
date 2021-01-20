import React, {useState, useEffect} from 'react'

export default function Dice({dieRoll, setDiceRoll, dieHistory, setHistory, dieCounter, setDieCounter, setShowGraph, showGraph}) {

    const [toggleAutoRoll, setToggle] = useState(false)

    const roll = () => {
        let roll = Math.floor(Math.random() * 6) + 1
        setDiceRoll(roll)
        setHistory(dieHistory)
        setDieCounter(dieCounter + 1)
    }

    const autoRoll = () => {
        if (!toggleAutoRoll) {
            setToggle(true)
        }
        else if (toggleAutoRoll) {
            let roll = Math.floor(Math.random() * 6) + 1
            setDiceRoll(roll)
            setHistory(dieHistory)
            setDieCounter(dieCounter + 1)
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            
            autoRoll()
            
        }, 1000)
        return () => clearInterval(interval)
    },[])
    
    useEffect(() => {
        if (dieRoll !== undefined) {
            if (!dieHistory[dieRoll]) {
                dieHistory[dieRoll] = 1;
            } else {
                dieHistory[dieRoll] += 1;
            }
        }
        console.log(dieHistory)
    }, [dieRoll])
    
    return (
        <div>
            <button onClick={roll}>Roll!</button>
            <button onClick={autoRoll}>Auto Roll!</button>
            <p>Your Roll: {dieRoll}</p>
            <p>Times rolled: {dieCounter}</p>
            <button onClick={() => setShowGraph(!showGraph)}>Show Results</button>
        </div>
    )
}
