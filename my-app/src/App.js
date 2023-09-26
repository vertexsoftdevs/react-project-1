import logo from './logo.svg';
import './App.css';
import MenuBar from './components/MenuBar';
import React, { useState } from 'react';
import { HouseDoorFill, List } from "react-bootstrap-icons"; // Import a specific icon

function App() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className="App">
      {/* Render the HouseDoorFill icon */}

      <div className=' h-screen bg-black'>
        <div className="grid grid-cols-12 bg-white  text-end">
          <button onClick={toggleMenu}>
            <List className=' ' style={{ fontSize: '60px' }} />
          </button>
          <div className="col-span-9"></div>
          <label className='text-6xl font-bold leading-normal   hover:translate-x-[5px]  hover:tracking-wider hover:text-lime-400 ' >VERTEX</label>
        </div>
        <div className={`h-screen ${menuVisible ? '' : 'hidden'}`}>
          <MenuBar />
        </div>
      </div>

    </div>
  );
}

export default App;
