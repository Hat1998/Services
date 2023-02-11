import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Show from './Show'

function Update() {
    const [task , setTask] = React.useState<any>()
    const [id, setId] = React.useState<any>()
const api = `https://63e223f43e12b1937638a4ed.mockapi.io/todo/${id}`


React.useEffect(() => {
    setId(localStorage.getItem('id'));

},[]);
const navigate = useNavigate()
const Update =  async ()=>{
    // if(firestName.length >=3 &&lastName.length>=3 ){

        axios.put(api,{
          task,
        }).then((res)=>{
        console.log(res);
        })
       await axios.get("https://63e223f43e12b1937638a4ed.mockapi.io/todo")
        navigate("/show")
    // }else{
    //     alert("Please write correct information")
    // }

}
  return (
    <div className="login">
      <h1>Update the Taks</h1>
         

        <input placeholder='Add list' onChange={e =>{setTask(e.target.value)}}></input>
        {/* <input placeholder=' اسم العائلة' onChange={e =>{setLastName(e.target.value)}}></input> */}
        <button onClick={Update}> Update</button>
     
    </div>

  )
}

export default Update;