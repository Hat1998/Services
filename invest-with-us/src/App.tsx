import { useState } from 'react'
import HomePage from './components/HomePage'
import Show from './components/ShowCards';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import AddCompany from './components/AddCompany'
import ShowCards from './components/ShowCards';

function App() {
 
  return (
    <div className="App">
<Routes>
        <Route path="/" element={<HomePage />}></Route>
          <Route path="/ShowCards" element={<ShowCards/>} />
      
      </Routes>

      {/* <HomePage/> */}

      {/* <AddCompany/> */}

      {/* <ShowCards/> */}

      </div>



)

 }




export default App;

