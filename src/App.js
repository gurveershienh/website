import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages'
import Contact from './pages/contactpage'



function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
    </Router> 
  );
} 

export default App;
