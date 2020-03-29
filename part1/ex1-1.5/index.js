import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
  return (
    <div>
      <h1>{props.course.name}</h1>
    </div>
  )

}
const Part1 = (props) => {
  return(
  <div><p>{props.p1} {props.ex1}</p></div>
  )
}
const Part2 = (props) => {
  return(
  <div><p>{props.p2} {props.ex2}</p></div>
  )
}
const Part3 = (props) => {
  return(
  <div><p>{props.p3} {props.ex3}</p></div>
  )
}
const Content = (props) => {
  return (
    <div>
      <Part1 p1 = {props.parts.parts[0].name} ex1 = {props.parts.parts[0].exercises}/>
      <Part2 p2 = {props.parts.parts[1].name} ex2 = {props.parts.parts[1].exercises}/>
      <Part3 p3 = {props.parts.parts[2].name} ex3 = {props.parts.parts[0].exercises}/>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {
        props.parts.parts[0].exercises + 
        props.parts.parts[1].exercises + 
        props.parts.parts[2].exercises
        }
      </p>
    </div>
  )

}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts :[ 
      {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
}
console.log(course.name)
  return (
    <div>
      <Header course={course}/>
      <Content parts = {course} />
      <Total parts = {course} /> 
    </div>
  )
  }

ReactDOM.render(<App />, document.getElementById('root'))