import React from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import { Spinner } from "@chakra-ui/react";

function ShowCards() {
     
  const [data , setData] =React.useState<any[]>([])
  React.useEffect(() => {
 axios.get("https://63e223f43e12b1937638a4ed.mockapi.io/todo").then(res=> {
  
 console.log(res.data)
 setData(res.data)
 })
  },[]) 

const UpdateItam=(id:any) => {
console.log(id);
axios.put(`https://63e223f43e12b1937638a4ed.mockapi.io/todo/${id}`)
localStorage.getItem('id')
}
  const DeleteItam= (id:any)=>{
      console.log(id);
      axios.delete(`https://63e223f43e12b1937638a4ed.mockapi.io/todo/${id}`).then(res=>{
          setData(data.filter((del)=>{
          console.log(res);
          return del.id!=id
  })
    )  })
      
  }
  return (
        <div className="Show_cards">
   
      {data.map((item:any)=>
        <div className="list">
          
         <ul>
  <p key={item.id}>
      {"The Task  Is : "+item.task }
  </p>

  <button onClick={()=> {DeleteItam(item.id)}}>Delete</button>
  <Link to="/update"><button onClick={()=>localStorage.setItem("id",item.id)}>Update</button></Link>
  </ul>


  
        </div>
      )}
      
    </div>
  )
}
  export default ShowCards;



 


  
