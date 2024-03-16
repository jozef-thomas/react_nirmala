import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Statebasicseg = () => {
    var [name,setName] = useState() 

     const changeHname =()=>{
        setName("Home")

     }
     const changeCname =()=>{
        setName("Contact") 
     }
     const changeGname =()=>{
        setName("Gallery")  
     }
     useEffect(()=>{
        changeGname()
     },[])
  return (
    
    <div style={{paddingTop:"80px"}}>
        <Typography variant='h3'>Welcome to {name} Page</Typography>
       <Button variant='contained' color='error' onClick={changeHname}>Home</Button> &nbsp;
       <Button variant='contained' color='success' onClick={changeCname}>Contact</Button> &nbsp;
       <Button variant='contained' color='warning' onClick={changeGname}>Gallery</Button> &nbsp;
    </div>
  )
}

export default Statebasicseg