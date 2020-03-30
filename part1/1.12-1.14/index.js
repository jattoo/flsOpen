import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const App = (props) => {
  const [selected, setSelected] = useState('')
  let [zero, setZero] = useState(0)
  let [one, setOne] = useState(0)
  let [two, setTwo] = useState(0)
  let [three, setThree] = useState(0)
  let [four, setFour] = useState(0)
  let [five, setFive] = useState(0)
  const [collection, setCollection] = useState([])
  const [coleksview,setColeksView] = useState(0)
  const [view, setView] = useState(0)

//first get the one with the highest value
//place it in a variable in the state
// find out the corresponding value in anecdotes and
// let all events have access to triggering it
  const highestVote = () => {
      let highest = 0
      if((zero > highest) && (zero > one) && (zero > two) && (zero > three) && (zero > four) && (zero > five)){
        highest = zero
        setCollection(anecdotes[0])
        setColeksView(zero)
      } else if((one > zero) && (one > two) && (one > three) && (one > four) && (one > five)){
        highest = one
        setCollection(anecdotes[1])
        setColeksView(one)
      } else if((two > one) && (two > three) && (two > four) && (two > five) && (two > zero)){
        highest = two
        setCollection(anecdotes[2])
        setColeksView(two)
      } else if((three > two) && (three > zero) && (three > one) && (three > two) && (three > four) && (three > five)){
        highest = three
        setCollection(anecdotes[3])
        setColeksView(three)
      } else if((four > zero) && (four > one) && (four > two) && (four > three) && (four > five) ){
        highest = four
        setCollection(anecdotes[4])
        setColeksView(four)
      } else if ((five > zero) && (five > one) && (five > two) && (five > three) && (five > four)){
        highest = five
        setCollection(anecdotes[5])
        setColeksView(five)
      }
  }

  const handleView = () => {
    let select
    for(let i = 0; i < anecdotes.length; i++){
       select = anecdotes[Math.floor(Math.random()*anecdotes.length)]
       setSelected(select)
       if(anecdotes.indexOf(select) === 0){
        setView(zero)
       } else if(anecdotes.indexOf(select) === 1){
         setView(one)
       } else if (anecdotes.indexOf(select) === 2){
         setView(two)
       }else if (anecdotes.indexOf(select) === 3){
        setView(three)
      }else if (anecdotes.indexOf(select) === 4){
        setView(four)
      }else if (anecdotes.indexOf(select) === 5){
        setView(five)
      }
    }
    highestVote()
  }
  
  const handleVote = () => {
    if(anecdotes.indexOf(selected) === 0){
      setZero(zero += 1)
      setView(zero)
      //console.log('zero: ',zero)
      
     }else if(anecdotes.indexOf(selected) === 1){
      setOne(one += 1)
      setView(one)
      //console.log('one: ',one)
      
     }else if(anecdotes.indexOf(selected) === 2){
      setTwo(two += 1)
      setView(two)
      //console.log('two: ',two)
      

     }else if(anecdotes.indexOf(selected) === 3){
      setThree(three += 1)
      setView(three)
      //console.log('three: ',three)
      
     }else if(anecdotes.indexOf(selected) === 4){
      setFour(four+= 1)
      setView(four)
      //console.log('four: ',four)
      
     }else if(anecdotes.indexOf(selected) === 5){
      setFive(five += 1)
      setView(five)
      //console.log('five: ',five)
      
     }
     highestVote()
  }
 

  return (
    <div>
      <h1><b>Anecdote of the day</b></h1>
      <p><b>{selected}</b></p>
      <p><b>{'Has '} {view}{' votes'}</b></p>
      <button onClick={handleVote}>{'vote'}</button>
      <button onClick={handleView}>{'Next Anecdote'}</button>
      <h2>Anecdote with most votes</h2>
      <p><b>{collection}</b></p>
      <p><b>{'Has '} {coleksview}{' votes'}</b></p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)