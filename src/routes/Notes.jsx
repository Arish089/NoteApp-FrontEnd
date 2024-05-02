import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Notes = () => {
const [notes, setNotes] = useState([])
const navigate = useNavigate()
  const getNotes = async (token)=>{
    try {
      const resp =await fetch('noteapp-production-0d40.up.railway.app/notes',{
        method:"GET",
        headers:{
          "Authorization": `Bearer ${token}`
        }
      })
      if(resp.status === 500 ){
        return window.location.href = '/login'
      }
      const data = await resp.json()
      console.log(data);
      setNotes(data)
   } catch (error) {
     console.log(error);
   }
  }
  useEffect(()=>{
    const token = localStorage.getItem('token')
    if(!token){
      navigate('/login')
    }
    getNotes(token)
  },[])

const deleteNote = async(id)=>{
  const token = localStorage.getItem('token')
  try {
    const resp = await fetch(`noteapp-production-0d40.up.railway.app/notes/delete/${id}`,{
      method: "DELETE",
      headers:{
        "Authorization": `Bearer ${token}`
      }
    })
    const data = await resp.json()
    getNotes(token)
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}


  const updateNote = async(id)=>{
    const token = localStorage.getItem('token')
    try {
      const resp = await fetch(`noteapp-production-0d40.up.railway.app/notes/update/${id}`,{
        method: "PATCH",
        headers:{
          "Authorization": `Bearer ${token}`
        }
      })
      const data = await resp.json()
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>{notes.length > 0? notes.map((note,index)=>{
      return(
        <div key={index}>
         <h2> {note.title}</h2>
         <p>{note.description}</p>
         {//<button onClick={()=>updateNote(note._id)}>Edit</button>
         }
         <button onClick={()=>updateNote(note._id)}>update</button>
         <button onClick={()=>deleteNote(note._id)}>delete</button>
        </div>
      )
    }):<h2>No Notes are present</h2>}</div>
  )
}

export default Notes