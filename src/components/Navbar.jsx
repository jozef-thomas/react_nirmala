import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <Typography>My App</Typography> &nbsp;

                <Button variant='contained' color='success'>
                    <Link to={'/'} style={{textDecoration:"none",color:"white"}}>View Data</Link>
                    </Button> &nbsp; &nbsp;

                <Button variant='contained' color='error'>
                    <Link to={'/add'}  style={{textDecoration:"none",color:"white"}}>Add Data</Link>
                    </Button>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar