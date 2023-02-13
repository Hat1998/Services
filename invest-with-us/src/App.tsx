import { useState } from 'react'
import HomePage from './components/HomePage'
import Show from './components/ShowCards';
 import './App.css'
import AddCompany from './components/AddCompany'
import ShowCards from './components/ShowCards';
import CompanyHome from './components/CompanyHome';
import { Routes, Route } from 'react-router-dom';
import CardDetails from './components/CardDetails';

function App() {
 
  return (
    <div className="App">
      {/* <HomePage/> */}

    {/* <AddCompany/>  */}
      <Routes>
        <Route path='/add' element={ <AddCompany/>}/>
        <Route path='/companies' element={ <CompanyHome/>}/>
        <Route path='/show' element={<ShowCards/>}/>
      </Routes> 
      
        {/* <Route path='/details' element={<CardDetails/>}/>

      </Routes>
       */}
    </div>   
 )
 }




export default App;

