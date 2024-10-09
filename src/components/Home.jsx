import React from 'react'
import Header from './Header';
import MovieList from './MovieList';
import MovieWatch from './MovieWatch';

function Home(){
  return(
    <>
      <Header />
      <MovieList />
      <MovieWatch />
      
    </>
  )
}
export default Home;