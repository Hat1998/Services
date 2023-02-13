import { useState } from 'react'
import HomePage from './components/HomePage'
import Show from './components/ShowCards';
 import './App.css'
import AddCompany from './components/AddCompany'
import ShowCards from './components/ShowCards';
import CompanyHome from './components/CompanyHome';
import { Routes, Route } from 'react-router-dom';
import CardDetails from './components/CardDetails';
import CompanySingUp from './components/CompanySingUp';
import Update from './components/Update';

function App() {
 
  return (
    <div className="App">
       {/* <CompanySingUp/>  */}
{/* <ShowCards/> */}
    {/* <AddCompany/>  */}
       <Routes>
        <Route path='/add' element={ <AddCompany/>}/>
        <Route path='/companies' element={ <CompanyHome/>}/>
        <Route path='/show' element={<ShowCards/>}/>
        {/* <Route path='/show/:id' element={<ShowCards/>}/> */}
        <Route path='/details' element={<CardDetails/>}/>
        <Route path='/details/:id' element={<CardDetails/>}/>
        <Route path='/SingUp' element={<CompanySingUp/>}/>
        <Route path='/Update' element={<Update/>}/>


      </Routes>  
      

       
    </div>   
 )
 }




export default App;

