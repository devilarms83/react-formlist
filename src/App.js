import React, { useState } from "react";
import "./style.css";
import Form from './Form'

export default function App() {
  const [name, setName] = useState("")
  const [allNames, setAllNames] = useState(["Albert", "Justin"])

  const handleNameChange = event => {
    console.log(event.target.value)
    setName(event.target.value)
  }

  const handleAddNames = event => {
    event.preventDefault()
    const updatedNames = [...allNames, name]
    setAllNames(updatedNames)
    setName('')
  }

  const list = allNames.map((name, index) => {return <li key={index}>{name}</li>})

  return (
    <div>
      <Form
        name={name} 
        handleNameChange={handleNameChange}
        handleAddNames={handleAddNames}
      />
      <ul>{list}</ul>
    </div>
  );
}
