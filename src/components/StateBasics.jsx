import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
    // var name = "class"
    var [name,setName] = useState("Class")
    var [val,setval] = useState()

    const changeName = ()=>{
        console.log("Clicked")
        setName(val)
    }

    const inputHandler=(e)=>{
        console.log(e.target.value)
        setval(e.target.value)
    }

  return (
    <div style={{paddingTop:"80px"}}>
    <Typography variant='h4'>Welcome : {name}</Typography>
    <TextField variant='outlined' label='Enter text' onChange={inputHandler}/> <br /> <br />
    <Button variant='contained' color='error' 
    onClick={changeName}>Change</Button>
    </div>
  )
}

export default StateBasics