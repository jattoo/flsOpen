import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)
const Statistic = (props) =>{
  return(
    <div>
      <table>
        <tbody>
          <tr>
            <td><b>{props.text}</b></td>
            <td><b>{props.value}</b></td>
          </tr>
        </tbody>
      </table>
  </div>
  )
}
const Statistics = (props) => {
  if(props.all === 0){
    return(
      <div><h2>No feedback given</h2></div>
    )
  }
  return(
    <div>
      <h2><b>Statistics</b></h2>
      <Statistic text={'Good: '} value={props.good}/>
      <Statistic text={'Neutral: '} value={props.neutral}/>
      <Statistic text={'Bad: '} value={props.bad}/>
      <Statistic text={'All: '} value={props.show}/>
      <Statistic text={'Average: '} value={props.average}/>
      <Statistic text={'Positive: '} value={props.positives+'%'}/>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState(0)

  //handle the good feeds
  const handleGoodClicks = () => {
    setAll(allClicks+1)
    setGood(good + 1)
  }

  //handle the bad feeds
  const handleBadClick = () => {
    setAll(allClicks + 1)
    setBad(bad + 1)
  }

  //handle the neutral feeds
  const handleNeutralClicks = () => {
    setAll(allClicks + 1)
    setNeutral(neutral + 1)
  }

  //total feeds
  const showAll = (n) => {
    return n 
  }

  //calculate the average
  const average = (n) => {
    return n / 3
  }

  //calculate positve feeds
  const positives = (a,b) => {
    let c = (a/b) * 100
    if(!isNaN(c)){
      return c
    }
  }
  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={handleGoodClicks} text={'Good'}/>
      <Button handleClick={handleNeutralClicks} text={'Neutral'}/>
      <Button handleClick={handleBadClick} text={'Bad'}/>
      <Statistics 
        all = {allClicks}
        good={good}
        neutral={neutral}
        bad={bad}
        show={showAll(allClicks)}
        average={average(allClicks)}
        positives={positives(good,allClicks)}
      />
      
    </div>
  )
  }

ReactDOM.render(<App />, document.getElementById('root'))