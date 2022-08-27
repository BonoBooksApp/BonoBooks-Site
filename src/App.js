import React, {useState} from 'react';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import {BrowserRouter as Router} from 'react-router-dom';

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
    </Router>
  );
}

export default App;
