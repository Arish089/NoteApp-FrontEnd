import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

const handleSubmit = async(e)=>{
e.preventDefault();
try {
  const resp = await fetch(`noteapp-production-0d40.up.railway.app/user/login`,{
    method: "POST",
    headers:{
      "Content-Type":"application/json"
    },
body:JSON.stringify({
  email,
  password
})
  })
  const data = await resp.json()
  console.log(data);
  localStorage.setItem('token', data.token)
alert("logged in successfully")
  navigate('/notes')
} catch (error) {
  console.log(error);
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
        <input type="submit" value='Login' id="" />
      </form>
    </div>
  )
}

export default Login