import React, { useState } from 'react'
import Header from './Header';
import MovieList from './MovieList';
import MovieWatch from './MovieWatch';

function Home(){
  const[movieList, setMovieList] = useState([]);
  const[movieId, setMovieId] = useState('');
  const[isHideWatchMovie, setIsHideWatchMovie] = useState(true);
  const[showSelectWatchMovie, setShowSelectWatchMovie] = useState(null)
  
  return(
    <>
      <Header setMovieList={setMovieList} />
      <div className='flex flex-wrap justify-center gap-3 mt-6'>
        <MovieList movieList={movieList} setMovieId={setMovieId} setIsHideWatchMovie={setIsHideWatchMovie} />
        <MovieWatch showSelectWatchMovie={showSelectWatchMovie} setShowSelectWatchMovie={setShowSelectWatchMovie} movieId={movieId} isHideWatchMovie={isHideWatchMovie} setIsHideWatchMovie={setIsHideWatchMovie} />
      </div>
    </>
  )
}
export default Home;