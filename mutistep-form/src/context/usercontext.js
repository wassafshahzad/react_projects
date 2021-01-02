import React, { createContext,useState } from 'react'

export const UserContext = createContext();

const UserProvider = ({children})=>{
 
    const [user,setUser] = useState({name:'',email:''})
    const [page,setPage] = useState("user")
    return (
        <UserContext.Provider value={[{user,setUser},{page,setPage}]}>
            {children}
        </UserContext.Provider>
    )

}

export default UserProvider