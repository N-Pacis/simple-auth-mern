import React, { useState } from 'react'
import axios from "axios"
import {loginSuccess} from "../actions/userActions"
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

export default function Login() {
    const history = useHistory()
    const dispatch = useDispatch()
    const api = axios.create({
        baseURL:`http://localhost:5000`
    })
    const [inputData,setInputData] = useState({Username:"",Password:""})
    function handleInputChange(e){
        const name = e.target.name;
        const value = e.target.value;
        setInputData({
            ...inputData,
            [name]:value
        })
    }

    async function submitFormData(e){
        e.preventDefault();
        await api.post('/login',inputData)
           .then(resp=>{
               const user = JSON.parse(resp.config.data)
               dispatch(loginSuccess(user.Username))
               history.push("/home")
               const response = JSON.stringify(resp.data)
               alert(response.slice(1,-1))
           }) 
           .catch(error=>{
               const err = JSON.stringify(error.response.data).replace(/\\"/g,'')
               alert(err.slice(1,-1))
           })
    }
    return (
        <div className="container">
            <div className="mt-3 ml-5">
                <h3>Login Here</h3>
            </div>
            <form method="post" onSubmit={(e)=>submitFormData(e)}>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="Username" className="form-control col-sm-7" onChange={handleInputChange} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="text" id="password" name="Password" className="form-control col-sm-7" onChange={handleInputChange} required/>
                </div>
                <button type="submit" className="btn btn-success mr-auto ml-0 col-sm-7">Login</button>
            </form>
        </div>
    )
}
