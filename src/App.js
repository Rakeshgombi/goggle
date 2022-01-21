import React, { useState } from 'react';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { Routes } from './components/Routes';


const App = () => {
  const [darkTheme, setDarkTheme] = useState(true);
  return (
    <div className={darkTheme ? 'dark' : ''}>
      <div className="bg-none dark:bg-[#202124] dark:text-white  min-h-screen">
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <Routes />
        <Footer />
      </div>
    </div>
  )
}

export default App
