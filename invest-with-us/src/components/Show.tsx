import React from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

function Show() {
    const [data , setData] =React.useState<any[]>([])
    React.useEffect(() => {
   axios.get("https://63e225d4109336b6cb00a67d.mockapi.io/companiesDB").then(res=> {
    
   console.log(res.data)
   setData(res.data)
   })
    },[]) 

const UpdateItam=(id:any) => {
  console.log(id);
  axios.put(`https://63e225d4109336b6cb00a67d.mockapi.io/companiesDB/${id}`)
  localStorage.getItem('id')
}
    const show= (id:any)=>{
        console.log(id);
        axios.get(`https://63e225d4109336b6cb00a67d.mockapi.io/companiesDB/${id}`).then(res=>{
            setData(data.filter((del)=>{
            console.log(res);
            return del.id!=id
    })
      )  })
        
    }
    
    return (
        <>
{/*    
        {data.map((item:any)=> */}
        
     
            
          
    <p>
        {"The Task  Is : "+localStorage.getItem('companyName') }
    </p>
 
    <button >Delete</button>
    <Link to="/update"><button onClick={()=>localStorage}>Update</button></Link>



    
   
  
      </>
    )
  }
  
  export default Show;