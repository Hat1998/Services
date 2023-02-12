import { useState } from 'react'
import HomePage from './components/HomePage'
import Show from './components/ShowCards';

import './App.css'
import AddCompany from './components/AddCompany'
import ShowCards from './components/ShowCards';

function App() {
 
  return (
    <div className="App">


      {/* <HomePage/> */}

      <AddCompany/>

      <ShowCards/>

      </div>



)

 }




export default App;

