import React, { useState } from 'react'
import axios from "axios"

export default function Registration() {
    const api = axios.create({
        baseURL:`http://localhost:5000`
    })
    const [inputData,setInputData] = useState({Email:"",FullName:"",Username:"",Password:""})

    function handleInputChange(e){
       const name = e.target.name;
       const value = e.target.value
       setInputData({
           ...inputData,
           [name]:value
       })
    }

    async function submitFormData(e){
        e.preventDefault()
        await api.post("/signup",inputData)
           .then(resp=>{
               var response = JSON.stringify(resp.data)
               alert(response.slice(1,-1))
           })
           .catch(error=>{
               var err = JSON.stringify(error.response.data).replace(/\\"/g, '')
               alert(err.slice(1,-1))
           })
    }
    return (
        <div className="container">
            <div className="mt-3">
                <h3>Register Here</h3>
            </div>
            <form method="post" onSubmit={(e)=>submitFormData(e)}>
                <div className="form-group col-sm-7">
                    <label htmlFor="email">Email:</label>
                    <input type="text" id="email" name="Email" className="form-control" onChange={handleInputChange} required />
                </div>
                <div className="form-group col-sm-7">
                    <label htmlFor="names">Full Names:</label>
                    <input type="text" id="names" name="FullName" className="form-control" onChange={handleInputChange} required/>
                </div>
                <div className="form-group col-sm-7">
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="Username" onChange={handleInputChange}className="form-control" required/>
                </div>
                <div className="form-group col-sm-7">
                    <label htmlFor="password">Password:</label>
                    <input type="text" id="password" name="Password" className="form-control" onChange={handleInputChange} required/>
                </div>
                <button type="submit" className="btn btn-success mr-auto ml-2 col-sm-7     ">Register</button>
            </form>
        </div>
    )
}
