import { useState } from 'react'

const Button = (props) => {
   return (
     <button onClick = {props.onClick}>{props.text}</button>
   )
  }

  const StatisticsLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.count}</td>
    </tr>
  )
}

 const Statistics = ({ good, neutral, bad, total, average, percent }) => {
  if (total === 0) {
    return <p>No feedback given</p>
  }

  return (
    <table>
      <tbody>
      <StatisticsLine text="good" count={good} />
      <StatisticsLine text="neutral" count={neutral} />
      <StatisticsLine text="bad" count={bad} />
      <StatisticsLine text="all" count={total} />
      <StatisticsLine text="average" count={average} />
      <StatisticsLine text="positive" count={percent} />
      </tbody>
    </table>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const handleGoodClick = () => {
    console.log("clicked good")
    const updatedGood = good+1
    setGood(updatedGood)
    setTotal(updatedGood+neutral+bad)
  }

  const handleNeutralClick = () => {
    console.log("clicked neutral")
    const updatedNeutral = neutral+1
    setNeutral(updatedNeutral)
    setTotal(good+updatedNeutral+bad)
  }

  const handleBadClick = () => {
    console.log("clicked bad")
    const updatedBad = bad+1
    setBad(updatedBad)
    setTotal(good+neutral+updatedBad)
  }

  const average = total ===0 ?0 : (good*1 + bad*-1 + neutral*0)/total

  const percent = total === 0 ? 0 : (good/total)*100

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button text="good" onClick={handleGoodClick}/>
      <Button text="neutral" onClick={handleNeutralClick}/>
      <Button text="bad" onClick={handleBadClick}/>
      <h2>Statistics</h2>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        average={average}
        percent={percent}
      />
    </div>
  )
}

export default App