import React from 'react'
import { useSelector } from 'react-redux'

export default function Home() {
    //@ts-ignore
    const username = useSelector(state=>state.userReducer)
    return (
        <>
            {username ?
                 <h2 className="center">Welcome {username}</h2>
               :
               <h2>LOGIN FIRST!</h2>}
        </>
    )
}
