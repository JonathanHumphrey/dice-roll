import React, {useState} from 'react'
import './App.css';

//Components
import Dice from './Components/Dice'
import Results from './Components/Results'

function App() {
  const [dieRoll, setDiceRoll] = useState()
  const [dieCounter, setDieCounter] = useState(0)
  const [showGraph, setShowGraph] = useState(false)
  const [dieHistory, setHistory] = useState({
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
  })
  
  return (
    <div className="App">
      <div className='wrapper'>
        <h2>Roll the Die</h2>
        <div>
          <Dice
            dieRoll={dieRoll}
            setDiceRoll={setDiceRoll}
            dieHistory={dieHistory}
            setHistory={setHistory}
            dieCounter={dieCounter}
            setDieCounter={setDieCounter}
            showGraph={showGraph}
            setShowGraph={setShowGraph}
          />
        </div>
        <Results
          dieHistory={dieHistory}
          showGraph={showGraph}
        />
      </div>
    </div>
  );
}

export default App;
/* 1: {
  count: 0
},
2: {
  count: 0
},
3: {
  count: 0
},
4: {
  count: 0
},
5: {
  count: 0
},
6: {
  count: 0
}, */