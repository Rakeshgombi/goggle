import React from 'react';
import { NavLink } from 'react-router-dom';


export const Links = () => {
  return (
    <div className='flex justify-around xl:w-1/3 lg:w-1/2 md:w-2/3 w-full items-center mt-4'>
      <NavLink to="/goggle/search"  className="md:p-2 md:mr-3 dark:text-gray-200 text-gray-700" activeClassName='text-blue-700 border-b-2 dark:text-blue-300 border-blue-500'><i className="fas fa-search"></i> All</NavLink>

      <NavLink to="/goggle/images" activeClassName='text-blue-700 border-b-2 dark:text-blue-300 border-blue-500' className="md:p-2 md:mr-3 dark:text-gray-200 text-gray-700"><i className="far fa-image"></i> Images</NavLink>

      <NavLink to="/goggle/news" activeClassName='text-blue-700 border-b-2 dark:text-blue-300 border-blue-500' className="md:p-2 md:mr-3 dark:text-gray-200 text-gray-700"><i className="far fa-id-card"></i> News</NavLink>

      <NavLink to="/goggle/videos" activeClassName='text-blue-700 border-b-2 dark:text-blue-300 border-blue-500' className="md:p-2 md:mr-3 dark:text-gray-200 text-gray-700"><i className="fas fa-play"></i> Videos</NavLink>

    </div>
  );
};
