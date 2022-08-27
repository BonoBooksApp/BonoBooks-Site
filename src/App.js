import React, {useState} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import { FaApple, FaAndroid } from 'react-icons/fa';

import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Button from './components/Button';

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
      <Button link={"/"}><FaApple/>Download For iOS</Button>
      <Button link={"/"}><FaAndroid/>Download For iOS</Button>
    </Router>
  );
}

export default App;
