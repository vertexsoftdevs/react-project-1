// src/components/MenuBar.js

import React from 'react';

function MenuBar() {
  return (
    <nav className='  text-white  h-screen tracking-tight font-bold text-6xl text-left  w-96'>
      <ul>
        <li className=' leading-normal   hover:translate-x-[5px]  hover:tracking-wider hover:text-lime-400 ' ><a href="/">Home</a></li>
        <li className=' leading-normal  hover:translate-x-[5px]  hover:tracking-wider  hover:text-lime-400  '><a href="/about">Portfolio</a></li>
        <li className=' leading-normal   hover:translate-x-[5px]  hover:tracking-wider  hover:text-lime-400  '><a href="/contact">About</a></li>
        <li className=' leading-normal   hover:translate-x-[5px]  hover:tracking-wider  hover:text-lime-400  '><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default MenuBar;
