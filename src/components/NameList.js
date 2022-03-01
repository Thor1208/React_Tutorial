import React from 'react'
import Person from './Person'

function NameList() {
    const names = ['Vijay', 'Aaron', 'Pratik', 'Vijay']
    const persons = [
        {
            id: 1,
            name: 'Vijay',
            age: 27,
            skill: 'Marketing'
        },
        {
            id: 2,
            name: 'Aaron',
            age: 25,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Pratik',
            age: 26,
            skill: 'Python'
        }
    ]
    //const personList = persons.map(person => <Person key={person.id} person = {person}></Person>)
    const nameList = names.map((name, index) => <h2 key={index}>{index} {name}</h2>)
  return (
    <div>{nameList}</div>
    //<div>{personList}</div>
  )
}

export default NameList
