import React from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
        
    <BrowserRouter>
        <Navbar/>
      <Routes>
        <Route  path="/" element={<News key="general" pagesize={18} country={'in'} category={"general"}/>}/>
          <Route exact path="/Business" element={<News key="business" pagesize={18} country={'in'} category={"business"}/>} />
          <Route exact path="Entertainment" element={<News key="entertainment" pagesize={18} country={'in'} category={"entertainment"}/>} />
          <Route exact path="Health" element={<News key="health" pagesize={18} country={'in'} category={"health"}/>} />
          <Route exact path="Science" element={<News key="science" pagesize={18} country={'in'} category={"science"}/>} />
          <Route exact path="Sports" element={<News key="sports" pagesize={18} country={'in'} category={"sports"}/>} />
          <Route exact path="Technology" element={<News key="technology" pagesize={18} country={'in'} category={"technology"}/>} />
      </Routes>
    </BrowserRouter> 
    </div>
  )
}

export default App
