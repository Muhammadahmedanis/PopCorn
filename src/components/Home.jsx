import React from 'react'
import Header from './Header';
import MovieList from './MovieList';
import MovieWatch from './MovieWatch';

function Home(){
  return(
    <>
      <Header />
      <div className='flex justify-center gap-3 mt-6'>
        <MovieList />
        <MovieWatch />
      </div>

    </>
  )
}
export default Home;