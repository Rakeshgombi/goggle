import React from 'react'

export const Footer = () => {
  return (
    <div className='p-10 mt-10 border-t dark:border-gray-700  border-gray-200  bg-b dark:bg-[#202124] bg-gray-200 text-gray-400 font-semibold'>
      <div className="flex">
        <h1>India</h1>
        <h3 className='ml-6 text-gray-900 dark:text-white'>Bengaluru, Karnataka - </h3><a href="/" className='text-blue-500 cursor-pointer'>From your IP address - Update location</a>
      </div>
      <ul className='flex space-x-3 '>
        <li><a href="/">Help</a></li>
        <li><a href="/">Send Feedback</a></li>
        <li><a href="/">Privacy</a></li>
        <li><a href="/">Terms</a></li>
      </ul>
    </div>
  )
}
