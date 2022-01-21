import React, { useEffect } from 'react'
import ReactPlayer from 'react-player'
import { useLocation } from 'react-router-dom'
import { useResultContext } from '../contexts/ResultContextProvider'
import { Loading } from './Loading'

export const Results = () => {
  const { results, loading, getResults, searchTerm } = useResultContext();
  const location = useLocation();   // get the current location like images, videos, etc.

  useEffect(() => {
    if (searchTerm !== '') {
      if (location.pathname === '/goggle/videos') {
        getResults(`/search/q=${searchTerm} videos`);
      } else {
        getResults(`${location.pathname.slice(7,)}/q=${searchTerm}&num=40`);
      }
    }
  }, [searchTerm, location.pathname]);

  if (loading) return <Loading /> // if isLoading is true, show the isLoading component
  console.log(location.pathname);

  switch (location.pathname) {
    case '/goggle/search':
      { console.log(location.pathname.slice(7,)) }
      return (
        <div className="md:px-24 lg:pr-72 md:pr-48 flex flex-wrap justify-between items-start">
          {results?.map(({ link, title, description }, index) => (
            <div key={index} className='w-full mb-8'>
              <a href={link} target="_blank" rel="noreferrer">
                <p className="text-sm">{link.length > 30 ? link.substring(0, 30) : link}</p>
                <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
                  {title}
                </p>
              </a>
              <p className="text-sm ">
                {description ? description : ""}
              </p>
            </div>
          ))}
        </div>
      );
    case '/goggle/images':
      return (
        <div className="flex flex-wrap justify-center items-start">
          {results?.map(({ image, link: { href, title } }, index) => (
            <a href={href} key={index} target="_blank" rel='noreferrer' className="sm:p-3 bg-pink-= max-h-64 p-5">
              <img src={image?.src} alt={title} loading="lazy" className='max-h-36' />
              <p className='w-36 break-words text-sm mt-2'>
                {title}
              </p>
            </a>
          ))}
        </div>
      )
    case '/goggle/news':
      return (
        <div className="sm:px-56 flex flex-wrap justify-between items-start">
          {results?.map(({ links, id, source, title }) => (
            <div key={id} className='md:w-2/5 w-full mb-3'>
              <a href={links?.[0].href} target="_blank" rel="noreferrer" className='hover:underline'>
                <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
                  {title}
                </p>
              </a>
              <div className="flex gap-4">
                <a href={source?.href} target="_blank" rel="noreferrer">
                  {source?.href}
                </a>
              </div>
            </div>
          ))}
        </div>
      );
    case '/goggle/videos':
      return (
        <div className="flex flex-wrap justify-center">
          {results.map((video, index) => (
            <div className="p-2" key={index}>
              <ReactPlayer url={video.additional_links?.[0]?.href} controls width="355px" height="200" />
            </div>
          ))}
        </div>
      )

    default:
      return 'ERROR!';
  }
}
