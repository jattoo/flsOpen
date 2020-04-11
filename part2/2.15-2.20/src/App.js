import React, {useState, useEffect} from 'react';
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import PhoneBookService from './services/phonebook'
import Notification from './components/Notification'


const App = () => {
  const [ persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('') //name field's state
  const [newNumber, setNewNumber] = useState('') //number field's state
  const [search, setSearch] = useState([]) //search field's state
  const [showAll, setShowAll] = useState(true) //state handles what to show
  const [noticeBoard, setNoticeBoard] = useState(null) //for notifications

//use effect handling our promises
useEffect(() => {
  console.log('effect flow: 1')
  
  PhoneBookService
    .getPhonebook()
    .then(allContacts => {
      setPersons(allContacts)
      setNoticeBoard('ALL NOTES FETCHED')
      setTimeout(() => {
        setNoticeBoard(null)
      }, 5000);
    })
    .catch(error =>{
      setNoticeBoard(`UNABLE TO FETCH DATA: PROBABLY METHOD NOT WORKING`)
        setTimeout(() => {
        setNoticeBoard(null)
      }, 5000);
    })
}, [])

  //TODO: ADD OR UPDATE A PERSON
  const addToPhoneBook= (e) => {
    //prevent reloading
    e.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber
    }
    const personExists = persons.find(f => f.name === newPerson.name)
    
    if(newPerson.name !== ''){ //AVOID EMPTY NAMES BEING ENTERED
    //TODO: UPDATE A PERSON
    if(personExists){
      if(personExists.number !== newPerson.number){
        if(window.confirm(`${personExists.name} is already added to phonebook, replace the old number with new one?`)){
          const changedPerson = {...personExists, number: newPerson.number}
          console.log('changedPerson:', changedPerson)
          PhoneBookService
            .updateAuser(personExists.id, changedPerson)
            .then(editedNote =>{
              setPersons(persons.map(p => p.id !== personExists.id ? p : editedNote))
              setNoticeBoard(`UPDATED ${personExists.name}`)
              setTimeout(() => {
                setNoticeBoard(null)
              }, 5000);
            })
            .catch(error => {
              setNoticeBoard(`UNABLE TO UPDATE  ${personExists.name}: PROBABLY METHOD NOT WORKING`)
                setTimeout(() => {
                setNoticeBoard(null)
              }, 5000);
            })
        }
      } 
    } else { //TODO: ADD A PERSON IF EXIST NOT
      PhoneBookService
      .collectContacts(newPerson)
      .then(saveContact =>{
        setPersons(persons.concat(saveContact))
        setNoticeBoard(`ADDED ${newPerson.name}`)
        setTimeout(() => {
          setNoticeBoard(null)
        }, 5000);
      })
      .catch(error => {
        setNoticeBoard(`UNABLE TO ADD  ${newPerson.name}`)
          setTimeout(() => {
            setNoticeBoard(null)
          }, 5000);
        })
      
    }
  } else { //IF DETAILS ARE EMPTY SHOW MESSAGE
    setNoticeBoard(`UNABLE TO ADD PERSON WITH NO DETAILS`)
          setTimeout(() => {
            setNoticeBoard(null)
          }, 5000);
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

  //Monitor the new entries' numbers
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
  
  
  //TODO: DELETE A PERSON
  const deletAperson = (id) => {
   return (() =>{
    const personToDelete = persons.find(f => f.id === id)
    console.log('todelete: ',personToDelete)

    //TODO: CONFIRM B4 DELETING A PERSON 
    if(window.confirm(`Delete ${personToDelete.name} ?`)) {
      
      PhoneBookService
        .eraser(id, personToDelete)
        .then(alreadyDeletedPerson =>{
          setPersons(persons.filter(f =>f.id !== id))
        })
        .catch(error =>{
          setNoticeBoard(`Information of  ${personToDelete.name} has already been removed from server`)
          setTimeout(() => {
            setNoticeBoard(null)
          }, 5000);
          })
    }
   })
  }

  



  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={noticeBoard}/>
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
          {personsToShow.map(person => 
          <Persons key={person.id} person={person} takeDown={deletAperson(person.id)}/>)}
      </ul>
    </div>
  )
}

export default App;
