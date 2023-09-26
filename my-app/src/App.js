import logo from './logo.svg';
import './App.css';
import MenuBar from './components/MenuBar';
import React, { useState, useRef, useEffect } from 'react';
import { HouseDoorFill, List } from "react-bootstrap-icons"; // Import a specific icon



function App() {
  // const sliderTextRef = useRef(null);
  // const sliderContainerRef = useRef(null);

  // const [position, setPosition] = useState(0);
  // const [containerWidth, setContainerWidth] = useState(0);
  // const [textWidth, setTextWidth] = useState(0);

  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  // function VertexSlider() {


  //   useEffect(() => {
  //     const sliderText = sliderTextRef.current;
  //     const sliderContainer = sliderContainerRef.current;

  //     if (sliderText && sliderContainer) {
  //       // Get the width of the slider container
  //       const containerWidth = sliderContainer.clientWidth;
  //       setContainerWidth(containerWidth);

  //       // Get the width of the text element
  //       const textWidth = sliderText.clientWidth;
  //       setTextWidth(textWidth);

  //       // Animation loop
  //       function animate() {
  //         setPosition((prevPosition) => {
  //           let newPosition = prevPosition - 1; // Adjust this value to control the animation speed

  //           if (newPosition < -textWidth) {
  //             newPosition = containerWidth;
  //           }

  //           sliderText.style.transform = `translateX(${newPosition}px)`;
  //           return newPosition;
  //         });

  //         // Request the next animation frame
  //         requestAnimationFrame(animate);
  //       }

  //       // Start the animation loop
  //       animate();
  //     }
  //   }, []);
  // }

  // VertexSlider();

  return (
    <div className="App">
      {/* Render the HouseDoorFill icon */}
      <div className='relative w-screen h-screen bg-black'>
        {/* First Layer */}
        <div className="grid grid-cols-12 bg-white text-end">
          <button onClick={toggleMenu}>
            <List className='' style={{ fontSize: '60px' }} />
          </button>
          <div className="col-span-9"></div>
          <label className='text-6xl font-bold leading-normal hover:translate-x-[5px] hover:tracking-wider hover:text-lime-400'>
            VERTEX
          </label>
        </div>

        {/* Second Layer */}
        <div className='h-96 flex items-center justify-center'>
          <label className='text-white text-6xl font-bold hover:text-lime-400'>"Coding the Future, One Line at a Time."</label>
        </div>

        {/* Third Layer */}
        <div className={`absolute top-0 left-0 h-screen w-screen ${menuVisible ? '' : 'hidden'} bg-black`}>
          <button onClick={toggleMenu}>
            <List className='' style={{ fontSize: '60px' }} />
          </button>
          <MenuBar />
        </div>
      </div>


    </div>
  );
}

export default App;
