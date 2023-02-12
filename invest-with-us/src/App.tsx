import { useState } from 'react'
import HomePage from './components/HomePage'
import Show from './components/Show';

import './App.css'
 import CompanyHome from './components/CompanyHome';
import { Box } from '@chakra-ui/react';
import { Routes,Route } from 'react-router-dom';
import AddCompany from './components/AddCompany';

function App() {
 
  return (
    <Box className="App" >

     
      <CompanyHome/>
      <Routes>
        <Route path='/AddCompany' element={<AddCompany/>}/>
      </Routes>
       

      </Box>



)

 }

 export default App;