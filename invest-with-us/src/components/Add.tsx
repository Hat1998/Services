import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Show from './Show'

function Add() {
    const [task , setTask] = React.useState("")
    // const [lastName , setLastName] = React.useState("")
    // const [email , setEmail] = React.useState("")
    // const [number, setNumber] = React.useState<any>()
const api = "https://63e223f43e12b1937638a4ed.mockapi.io/todo"

const navigate = useNavigate()
const PostData = ()=>{
   
        axios.post(api,{
            task,
           
        })
        axios.get("https://63e223f43e12b1937638a4ed.mockapi.io/todo")
        navigate("/Show")
    // }else{
    //     alert("Please write correct information")
    // }

}
  return (
    <div className="add">
        <h1> The List</h1>
      
        <input placeholder='Add' onChange={e =>{setTask(e.target.value)}}></input>
          {/* <input placeholder=' اسم العائلة' onChange={e =>{setLastName(e.target.value)}}></input>
          <input placeholder=' البريد الاكتروني' onChange={e =>{setEmail(e.target.value)}}></input>
          <input placeholder='رقم التواصل' onChange={e =>{setNumber(e.target.value)}}></input> */}
        <button onClick={PostData}>add new</button>
        <Show/>
    </div>

  )
}

export default Add;