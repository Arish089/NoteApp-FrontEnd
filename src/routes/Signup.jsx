import React, { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [username, setUsername] = useState("")

  const navigate = useNavigate()

const handleSubmit = async(e)=>{
 // console.log(email, username, password);
e.preventDefault();
try {
  const resp = await fetch(`https://noteapp-production-0d40.up.railway.app/user/register`,{
    method: "POST",
    headers:{
      "Content-Type": "application/json"
    },
body:JSON.stringify({
  email,
  password,
  username
})
  })
  const data = await resp.json()
  console.log(data);
  alert('User successfully registered')
  navigate('/login')
} catch (error) {
  console.log("Login failed",error);
}
}

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Email</label>
        <input type="email" name="" value={email} onChange={(e)=>{
          setEmail(e.target.value)
        }} /><br/>
        <label htmlFor="">Password</label>
        <input type="password" name="" value={password} onChange={(e)=>{
          setPassword(e.target.value)
        }} /><br/>
        <label htmlFor="">Username</label>
        <input type="text" name="" value={username} onChange={(e)=>{
          setUsername(e.target.value)
        }} /><br/>

        <input type="submit" value='Register' id="" />
      </form>
    </div>
  )
}

export default Signup