import React, {useContext} from 'react'
import {UserContext} from '../context/usercontext'
import './userForm.css'
import { Button } from '@material-ui/core';

export default function DisplayForm(props) {
    const {user} = useContext(UserContext)[0]
    const {_,setPage} = useContext(UserContext)[1]

    return (
        <div className='container'>
            <h3>User Name</h3>
            <p> {user.name}</p>
            <h3>Email</h3>
            <p className='items'>{user.email}</p>
            <Button variant='contained' color='primary' onClick = {()=>setPage("user")}>Back</Button>
        </div>
    )
}
