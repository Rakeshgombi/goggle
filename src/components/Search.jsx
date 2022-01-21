import React, { useState } from 'react';
import { useResultContext } from '../contexts/ResultContextProvider';
import { Links } from './Links'

export const Search = () => {
  const [text, setText] = useState("");
  const { setSearchTerm } = useResultContext();


  const emptyInput = () => {
    setSearchTerm(text)
    console.log();
  }
  return (
    <div className='mt-2 w-full'>
      <label className="xl:pl-20 relative block xl:w-2/4 lg:w-2/3 md:w-3/4 w-full">
        <input className="dark:bg-zinc-800 border-none w-full border flex items-center justify-center text-sm md:text-base py-2 md:py-3 pl-3 md:pr-24 pr-20  rounded-full outline-none shadow-md hover:shadow-lg" type="text" name="search" placeholder='Search goggle or type url' onChange={(e) => setText(e.target.value)} />
        {text && (
          <span className="border-l-4 border-indigo-500 absolute inset-y-0 right-2 flex items-center justify-center md:p-2 p-1">
            <button type="button" className="h-5 w-5 p-2 flex md:font-semibold items-center text-xl mr-2  justify-center" viewBox="0 0 20 20" onClick={emptyInput} >X</button>
            <button type="button" className="h-5 p-2 w-5 flex items-center justify-center" viewBox="0 0 20 20" onClick={emptyInput} ><i className="fas fa-search"></i></button>
          </span>
        )
        }
      </label>

      <div className="xl:pl-20 w-full navigation">
        <Links />
      </div>
    </div>
  )
}
