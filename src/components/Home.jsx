import React, { useState } from 'react'
import Header from './Header';
import MovieList from './MovieList';
import MovieWatch from './MovieWatch';

function Home(){
  const[movieList, setMovieList] = useState([]);
  const[movieId, setMovieId] = useState('');
  const[isHideWatchMovie, setIsHideWatchMovie] = useState(true);
  
  return(
    <>
      <Header setMovieList={setMovieList} />
      <div className='flex flex-wrap justify-center gap-3 mt-6'>
        <MovieList movieList={movieList} setMovieId={setMovieId} setIsHideWatchMovie={setIsHideWatchMovie} />
        <MovieWatch movieId={movieId} isHideWatchMovie={isHideWatchMovie} />
      </div>

    </>
  )
}
export default Home;