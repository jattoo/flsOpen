import React, {useState, useEffect} from 'react';
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import axios from 'axios'

const App = () => {
  const [ persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('') //name field's state
  const [newNumber, setNewNumber] = useState('') //number field's state
  const [search, setSearch] = useState([]) //search field's state
  const [showAll, setShowAll] = useState(true) //state handles what to show


//use effect handling our promises
useEffect(() => {
  console.log('effect flow: 1')
  axios
    .get('http://localhost:3001/persons')
    .then(response => {
      console.log('effect flow: 2')
      setPersons(response.data)
    })
}, [])

  //adding new contacts
  const addToPhoneBook= (e) => {
    //prevent reloading
    e.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber
    }

    //avoid duplication else add to be rendered
    if(!persons.find(found => found.name === newPerson.name)){
      setPersons(persons.concat(newPerson))
      setNewNumber(newNumber.concat(newNumber))
    } else {
      alert(`${newPerson.name} is already added to phonebook`)
    }
    
    //clear the field
    setNewName('')
    setNewNumber('')
  }

  //Monitor the new entries' name
  const handleNameChange = (e) => {
    //console.log(e.target.value)
    setNewName(e.target.value)
  }

  //Monitor the new entries' number
  //add new numbers with help of the state
  const handleNumberChange = (e) => {
    setNewNumber(e.target.value)
    //console.log(e.target.value)
  }

  
 //Monitor filtering input field then set it
 // as value to the state n manually change
 //boolean showAll to false
  const handleSearchChange =(e) => {
    setSearch(e.target.value)
    setShowAll(false) 
  }

  const personsToShow = showAll ? 
  persons:
  persons.filter(person =>person.name.toLowerCase().includes(search))
  
  
console.log(showAll)
  

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        Filter Shown with
        <Filter 
          handleSearchChange={handleSearchChange}
          search={search}
        />
        
      </div>
      <PersonForm 
        addToPhoneBook={addToPhoneBook}
        handleNameChange={handleNameChange}
        newName={newName}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <ul>
          {personsToShow.map((person, i) => 
          <Persons key={i} person={person}/>)}
      </ul>
    </div>
  )
}

export default App;
