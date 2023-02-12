import { useState } from 'react'
import HomePage from './components/HomePage'
import Show from './components/Show';

import './App.css'
 import { Box } from '@chakra-ui/react';
import { Routes,Route } from 'react-router-dom';
import AddCompany from './components/AddCompany';
import CompanyHome from './components/CompanyHome'
function App() {
 
  return (
    <div className="App">
       <CompanyHome/>
       <Routes>
        <Route path='/add' element={< AddCompany/>}/>
       </Routes>

      </div>



)

 }




export default App;

