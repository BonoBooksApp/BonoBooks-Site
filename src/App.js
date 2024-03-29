import React, {useState} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import HomePage from './pages/HomePage';

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    console.log(isOpen);
    setIsOpen(!isOpen)
  }

  return (
    <Router>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle}/>
      <HomePage/>
    </Router>
  );
}

export default App;
