import React from 'react'
import { Link } from 'react-router-dom';
import { Search } from './Search';

export const Navbar = ({ darkTheme, setDarkTheme }) => {
  return (
    <div className=' p-3 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200'>
      <div className="xl:pl-20 flex justify-between items-center space-x-5 w-screen">
        <Link to="/">
          <p className='text-2xl grad-text font-bold py-1 px-2 rounded' style={{
            "background": "-webkit-linear-gradient(45deg, #FC466B, #3F5EFB)",
            "WebkitBackgroundClip": "text",
            "WebkitTextFillColor": "transparent"
          }}>
            Goggle <i className="fas fa-search"></i>
          </p>
        </Link>
        <button className="cursor-pointer dark:bg-gray-800 dark:text-gray-50 bg-white dark:border-gray-700 rounded-full px-2 py-1 hover:shadow-lg" type='button' onClick={() => setDarkTheme(!darkTheme)}>
          {darkTheme ? 'Dark 🌚' : 'Light ☀'}
        </button>
      </div>
      <Search />
    </div >
  )
}
