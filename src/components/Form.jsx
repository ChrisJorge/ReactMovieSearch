import React from 'react'
import { useState, useEffect } from 'react'
function Form({movieSearch}) {
  const [formData, setFormData] = useState({ searchterm: "",});

  const handleChange = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value}) // Creating new formData object spread operator used to spread all part of object and reference in new place in memory
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    movieSearch(formData.searchterm);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name='searchterm' onChange={handleChange} value={formData.searchterm} />
        <input type="submit" value = "submit"/>
      </form>  
    </div>
  )
}

export default Form