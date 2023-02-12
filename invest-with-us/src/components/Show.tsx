import React from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import { Box, Spinner } from "@chakra-ui/react";

function ShowCards() {
     
  const [data , setData] =React.useState<any[]>([])
// to show and hide spinner for 3 sec
  const [showElement,setShowElement] = React.useState(true)

  React.useEffect(() => {
 axios.get("https://63e223f43e12b1937638a4ed.mockapi.io/todo").then(res=> {
  
 console.log(res.data)
 setData(res.data)
 })
  },[]) 
// Spinner time
  React.useEffect(()=>{
    setTimeout(function() {
      setShowElement(false)
         }, 2000);
       },
   [])
   //
   
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
{showElement?<div className="spinner"> 
<Spinner
   boxSize='12rem'
  thickness='15px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size='xl'
  ml={'auto'}
  
 
/></div>:<></>}



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



 



