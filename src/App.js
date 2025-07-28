import logo from './logo.svg';
import './App.css';
import Taskmanager from './components/Taskmanager';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Electronics from './Pages/Electronics';
import Books from './Pages/Books';
import Electronicsdetailpage from './Pages/Electronicsdetailpage';


function App() {
 

  return (
    <>
   {/* <Routes>
    <Route path="/" element={<Home/>}/>
     <Route path="/Electronics" element={<Electronics />}>
        <Route path=":id" element={<Electronicsdetailpage />} />
      </Route>
        <Route path="/Books" element={<Books/>}/>
   </Routes>
     */}
     <Taskmanager/>
  
   

    </>
  );
}

export default App;
