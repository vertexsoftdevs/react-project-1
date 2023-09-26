import logo from './logo.svg';
import './App.css';
import MenuBar from './components/MenuBar';
import React, { useState, useRef, useEffect } from 'react';
import { HouseDoorFill, List, ArrowBarDown } from "react-bootstrap-icons"; // Import a specific icon
import Img1 from './imgs/2.png';
import Img2 from './imgs/4.gif';
import UserImg from './imgs/user1.png';
import PackageImg from './imgs/packageImg1.png';

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
      <div className='relative w-screen h-screen bg-black overflow-x-hidden'>
        {/* First Layer */}
        <div className="grid grid-cols-12 bg-white text-end">
          <button onClick={toggleMenu}>
            <List className='' style={{ fontSize: '60px' }} />
          </button>
          <div className=" col-span-5 sm:col-span-7 md:col-span-7 lg:col-span-9"></div>
          <label className='text-6xl font-bold leading-normal hover:translate-x-[5px] hover:tracking-wider hover:text-lime-400'>
            VERTEX
          </label>
        </div>

        {/* Second Layer */}
        <div className='h-96 flex items-center justify-center'>
          <label className='text-white text-6xl font-bold hover:text-lime-400'>"Coding the Future, One Line at a Time."</label>
        </div>

        <div className='flex items-center justify-center text-white'>
          <p className='mr-2'>KNOW NOTHING OF</p><br />
        </div>
        <div className='flex items-center justify-center text-white '>
          <ArrowBarDown className='text-white' style={{ fontSize: '40px' }} />
        </div>

        {/* Third Layer */}
        <div className={`absolute top-0 left-0 h-screen w-screen ${menuVisible ? '' : 'hidden'} bg-black`}>
          <button onClick={toggleMenu}>
            <List className='' style={{ fontSize: '60px' }} />
          </button>
          <MenuBar />
        </div>

      </div>
      <div className='relative w-screen h-screen bg-black overflow-x-hidden'>
        <div className='grid grid-cols-12 items-center'>
          <div className='col-span-6 '>
            <div className='flex items-start justify-center text-white text-6xl font-bold'>
              <ul className=' text-start' style={{ listStyleType: 'disc' }}>
                <li className=' hover:text-lime-400'>Mobile Application</li>
                <li className=' hover:text-lime-400'>Desktop Application</li>
                <li className=' hover:text-lime-400'>Web Application </li>
                <li className=' hover:text-lime-400'>Digital Marketing</li>
                <li className=' hover:text-lime-400'>Graphic Design</li>
              </ul>
            </div>
          </div>
          <div className='col-span-6 '>
            <div className='flex items-center justify-center'>
              <img src={Img1} />
            </div>
          </div>

        </div>
        <div className='grid grid-cols-12 items-center ms-10'>
          <div className='col-span-4 '>
            <div className='hover:font-bold text-3xl hover:tracking-widest hover:text-black rounded-lg w-90 hover:bg-lime-400 flex items-center justify-center text-white border border-white '>
              <p className='mr-2 my-6  '>OUR BELIEFS</p>
            </div>
          </div>

        </div>


      </div>

      <div className='relative w-screen h-screen bg-black overflow-x-hidden'>
        <div className='grid grid-cols-12 items-center'>

          <div className='col-span-12 my-2'>
            <div className=' w-100 text-center mb-3'>
              <label className=' text-white  underline text-6xl '>OUR TEAM</label>
            </div>
            <div className='grid grid-cols-12 gap-4'>
              <div className='col-span-6 md:col-span-3'>
                <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out border border-white">
                  {/* Image */}
                  <img
                    className="mt-4 object-cover w-full h-48"
                    src={UserImg}
                    alt="Card Image"
                  />

                  {/* Card Content */}
                  <div className="px-6 py-4">
                    {/* Title */}
                    <div className="font-bold text-xl mb-2">Pasindu Mahima</div>

                    {/* Nic (Nickname) */}
                    <p className="text-gray-700 text-base mb-2">200231403238</p>

                    {/* Email */}
                    <p className="text-gray-700 text-base">hdragon985@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className='col-span-6 md:col-span-3'>
                <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out border border-white">
                  {/* Image */}
                  <img
                    className="mt-4 object-cover w-full h-48"
                    src={UserImg}
                    alt="Card Image"
                  />

                  {/* Card Content */}
                  <div className="px-6 py-4">
                    {/* Title */}
                    <div className="font-bold text-xl mb-2">Pasindu Mahima</div>

                    {/* Nic (Nickname) */}
                    <p className="text-gray-700 text-base mb-2">200231403238</p>

                    {/* Email */}
                    <p className="text-gray-700 text-base">hdragon985@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className='col-span-6 md:col-span-3'>
                <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out border border-white">
                  {/* Image */}
                  <img
                    className="mt-4 object-cover w-full h-48"
                    src={UserImg}
                    alt="Card Image"
                  />

                  {/* Card Content */}
                  <div className="px-6 py-4">
                    {/* Title */}
                    <div className="font-bold text-xl mb-2">Pasindu Mahima</div>

                    {/* Nic (Nickname) */}
                    <p className="text-gray-700 text-base mb-2">200231403238</p>

                    {/* Email */}
                    <p className="text-gray-700 text-base">hdragon985@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className='col-span-6 md:col-span-3'>
                <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out border border-white">
                  {/* Image */}
                  <img
                    className="mt-4 object-cover w-full h-48"
                    src={UserImg}
                    alt="Card Image"
                  />

                  {/* Card Content */}
                  <div className="px-6 py-4">
                    {/* Title */}
                    <div className="font-bold text-xl mb-2">Pasindu Mahima</div>

                    {/* Nic (Nickname) */}
                    <p className="text-gray-700 text-base mb-2">200231403238</p>

                    {/* Email */}
                    <p className="text-gray-700 text-base">hdragon985@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className='col-span-6 md:col-span-3'>
                <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out border border-white">
                  {/* Image */}
                  <img
                    className="mt-4 object-cover w-full h-48"
                    src={UserImg}
                    alt="Card Image"
                  />

                  {/* Card Content */}
                  <div className="px-6 py-4">
                    {/* Title */}
                    <div className="font-bold text-xl mb-2">Pasindu Mahima</div>

                    {/* Nic (Nickname) */}
                    <p className="text-gray-700 text-base mb-2">200231403238</p>

                    {/* Email */}
                    <p className="text-gray-700 text-base">hdragon985@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className='col-span-6 md:col-span-3'>
                <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out border border-white">
                  {/* Image */}
                  <img
                    className="mt-4 object-cover w-full h-48"
                    src={UserImg}
                    alt="Card Image"
                  />

                  {/* Card Content */}
                  <div className="px-6 py-4">
                    {/* Title */}
                    <div className="font-bold text-xl mb-2">Pasindu Mahima</div>

                    {/* Nic (Nickname) */}
                    <p className="text-gray-700 text-base mb-2">200231403238</p>

                    {/* Email */}
                    <p className="text-gray-700 text-base">hdragon985@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className='col-span-6 md:col-span-3'>
                <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out border border-white">
                  {/* Image */}
                  <img
                    className="mt-4 object-cover w-full h-48"
                    src={UserImg}
                    alt="Card Image"
                  />

                  {/* Card Content */}
                  <div className="px-6 py-4">
                    {/* Title */}
                    <div className="font-bold text-xl mb-2">Pasindu Mahima</div>

                    {/* Nic (Nickname) */}
                    <p className="text-gray-700 text-base mb-2">200231403238</p>

                    {/* Email */}
                    <p className="text-gray-700 text-base">hdragon985@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className='col-span-6 md:col-span-3'>
                <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out border border-white">
                  {/* Image */}
                  <img
                    className="mt-4 object-cover w-full h-48"
                    src={UserImg}
                    alt="Card Image"
                  />

                  {/* Card Content */}
                  <div className="px-6 py-4">
                    {/* Title */}
                    <div className="font-bold text-xl mb-2">Pasindu Mahima</div>

                    {/* Nic (Nickname) */}
                    <p className="text-gray-700 text-base mb-2">200231403238</p>

                    {/* Email */}
                    <p className="text-gray-700 text-base">hdragon985@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className='relative w-screen h-screen bg-black overflow-x-hidden'>
        <div className='grid grid-cols-12 items-center'>

          <div className='col-span-12 my-2'>
            <div className=' w-100 text-center mb-3'>
              <label className=' text-white  underline text-6xl '>Pricing Rates</label>
            </div>
            <div className='grid grid-cols-12 gap-4'>
              <div className='col-span-6 md:col-span-3'>
                <div className="min-h-full max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out border border-white relative">
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Basic Plans</div>
                    <img
                      className="mt-4 object-cover w-full h-48"
                      src={PackageImg}
                      alt="Card Image"
                    />
                  </div>

                  {/* Black box hidden by default */}
                  <div className=" font-bold text-lime-400 absolute inset-0 bg-black opacity-0 hover:opacity-75 transition duration-300 ease-in-out flex flex-col items-center justify-center text-white">
                    <p className=" text-base mb-2"><b>Rs.</b> 30,000/=</p>
                    <label>React</label>
                    <label>Responsive Layout</label>
                    <label>Cross-browser Support</label>
                    <label>1-2 Pages</label>
                    <label>Database-Connection</label>
                    <label>E-Commerce</label>
                    <label>Payment Gateways</label>
                  </div>

                </div>
              </div>

              <div className='col-span-6 md:col-span-3'>
                <div className="min-h-full max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out border border-white relative">
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Standard Plans</div>
                    <img
                      className="mt-4 object-cover w-full h-48"
                      src={PackageImg}
                      alt="Card Image"
                    />
                  </div>

                  {/* Black box hidden by default */}
                  <div className=" font-bold text-lime-400 absolute inset-0 bg-black opacity-0 hover:opacity-75 transition duration-300 ease-in-out flex flex-col items-center justify-center text-white">
                    <p className=" text-base mb-2"><b>Rs.</b> 30,000/=</p>
                    <label>React </label>
                    <label>Responsive Layout</label>
                    <label>Cross-browser Support</label>
                    <label>1-2 Pages</label>
                    <label>Database-Connection</label>
                    <label>E-Commerce</label>
                    <label>Payment Gateways</label>
                  </div>

                </div>
              </div>

              <div className='col-span-6 md:col-span-3'>
                <div className="min-h-full max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out border border-white relative">
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Advanced  Plans</div>
                    <img
                      className="mt-4 object-cover w-full h-48"
                      src={PackageImg}
                      alt="Card Image"
                    />
                  </div>

                  {/* Black box hidden by default */}
                  <div className=" font-bold text-lime-400 absolute inset-0 bg-black opacity-0 hover:opacity-75 transition duration-300 ease-in-out flex flex-col items-center justify-center text-white">
                    <p className=" text-base mb-2"><b>Rs.</b> 30,000/=</p>
                    <label>React </label>
                    <label>Responsive Layout</label>
                    <label>Cross-browser Support</label>
                    <label>1-2 Pages</label>
                    <label>Database-Connection</label>
                    <label>E-Commerce</label>
                    <label>Payment Gateways</label>
                  </div>

                </div>
              </div>


              <div className='col-span-6 md:col-span-3'>
                <div className="min-h-full max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out border border-white relative">
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Other Plans</div>
                    <img
                      className="mt-4 object-cover w-full h-48"
                      src={PackageImg}
                      alt="Card Image"
                    />
                  </div>

                  {/* Black box hidden by default */}
                  <div className=" font-bold text-lime-400 absolute inset-0 bg-black opacity-0 hover:opacity-75 transition duration-300 ease-in-out flex flex-col items-center justify-center text-white">
                    <p className=" text-base mb-2"><b>Rs.</b> 30,000/=</p>
                    <label>React (Without Frameworks)</label>
                    <label>Responsive Layout</label>
                    <label>Cross-browser Support</label>
                    <label>1-2 Pages</label>
                    <label>Database-Connection</label>
                    <label>E-Commerce</label>
                    <label>Payment Gateways</label>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
      <div className='relative w-screen h-screen bg-black overflow-x-hidden'>
        <div className='grid grid-cols-12 items-center'>

          <div className='col-span-12 my-2'>
            <div className=' w-100 text-center mb-3'>
              <label className=' text-white  underline text-6xl '>Contact Us</label>
            </div>
            <div className='text-white grid grid-cols-12 gap-4 overflow-hidden p-3 px-3'>
              <div class=" border border-lime-400 flex flex-col items-center justify-center h-screen w-screen">
                <div class="text-3xl info mb-4">
                  <div class="address">
                    <i class="icofont-google-map"></i>
                    <h4>Location:</h4>
                    <p>Pilimathalawa, Sri Lanka</p>
                  </div>

                  <div class="email">
                    <i class="icofont-envelope"></i>
                    <h4>Email:</h4>
                    <p>vertexsoftwaresolutions583@gmail.com</p>
                  </div>

                  <div class="phone">
                    <i class="icofont-phone"></i>
                    <h4>Call:</h4>
                    <p>+94 72 5519387</p>
                  </div>
                </div>
                <iframe
                  src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=pilimathalawa town&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"about
                  frameborder="0"
                  class="w-screen h-screen"
                  allowfullscreen
                ></iframe>
              </div>


            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default App;
