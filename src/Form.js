import React from 'react'

export default function Form({ name, handleNameChange, handleAddNames }) {
  console.log(name)
  return (
    <form onSubmit={handleAddNames}>
      <input 
        placeholder="add name"
        type="text"
        value={name}
        onChange={handleNameChange}
      />
      <input
        type="submit"
        value="Submit"
      />
    </form>
  )
}

/*
type a word in the input feld
I click the submit button

store name value in state
push names into an array
display names in a list

*/