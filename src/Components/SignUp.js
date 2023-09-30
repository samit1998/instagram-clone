import React, { useState } from 'react';
import axios from 'axios';

const SignUp = () => {
const [user, setUser] = useState({name:"",emil:"",password:"",cnfPassword:""});
const [error, setError] = useState("")
const [succsess, setSuccsess] = useState("")
const {name,email,password,cnfPassword} = user;

   async  function validation(e) {
        e.preventDefault();

        if (!name || !email || !password || !cnfPassword) {
            setError("Please fill all the fields");
            setSuccsess("")
            return
             
        } 
        if (password !== cnfPassword){
            setError("Please fill password");
            setSuccsess("")
            return
        }
        
        try {
            const response =  await axios.post("https://instagram-express-app.vercel.app/api/auth/signup",
            {name:name,email:email,password:password})

            console.log(response.data);
        } catch (error) {
            console.log(error.response.data);
        }
        
    
}

    return(
        <div className="container">
            {
                succsess && (<h1>{succsess}</h1>) 
            }
            {
                error && (<p style={{color:'red'}}>Error :{error}</p>)
                }
            <form onSubmit={validation}>
                <input type="text" placeholder='Name' 
                onChange={(e)=>setUser({...user,name:e.target.value})}/>
                <input type="email"  placeholder='email'
                 onChange={(e)=>setUser({...user,email:e.target.value})}
                />
                <input type="password"  placeholder='password'
                 onChange={(e)=>setUser({...user,password:e.target.value})}
                />
                <input type="password"  placeholder='cnf password'
                onChange={(e)=>setUser({...user,cnfPassword:e.target.value})}
                />
                <button type='submit'>SignUp</button>
            </form>
                
        </div>

    )
}

export default SignUp