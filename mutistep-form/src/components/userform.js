import React, {useContext} from 'react'
import './userForm.css'
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import {UserContext} from '../context/usercontext'

function UserForm(props) {
    
    const {user,setUser} = useContext(UserContext)[0]
    const {_,setPage} = useContext(UserContext)[1]
    
    function handleChange(event) {
        setUser({name:event.target.value,email:user.email})
    }

    function handleEmailChange(event) {
        setUser((prevUser) => {
            return {...prevUser,email:event.target.value}
        })
    }

    return( 
        <>
            <div className = "container" >
                <div className = "items">
                    <p>Enter User Name</p>
                    <TextField id="standard-basic" value={user.name} onChange={handleChange} />
                </div>
                <div className = "items">
                    <p>Enter Email</p>
                    <TextField id="standard-basic" value={user.email} onChange={handleEmailChange} />
                </div>
                <Button variant='contained' color='primary' onClick = {()=>setPage("display")}>Continue</Button>
            </div>
        </>
)}

export default UserForm