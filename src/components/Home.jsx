import React, { useState } from 'react'
import Header from './Header';
import MovieList from './MovieList';
import MovieWatch from './MovieWatch';
function Home(){
  const[movieList, setMovieList] = useState([]);
  const[movieId, setMovieId] = useState('');
  const[isHideWatchMovie, setIsHideWatchMovie] = useState(true);
  const[showSelectWatchMovie, setShowSelectWatchMovie] = useState(null)
  const[isLoader, setIsLoader] = useState(false);
  
  const [watchMovie, setWatchMovie] = useState([
    {title: "Inception", Poster:"https://st2.depositphotos.com/4431055/11471/i/380/depositphotos_114715830-stock-photo-books-on-wooden-table.jpg", userRating: 0, imdbRating: "0.0", runTime: '50 min'}
  ]);
  
  return(
    <>
      <Header setMovieList={setMovieList} setIsLoader={setIsLoader} />
      <div className='flex flex-wrap min-h-screen mx-2 justify-center gap-3 small mt-28'>
        <MovieList isLoader={isLoader} movieList={movieList} setMovieId={setMovieId} setIsHideWatchMovie={setIsHideWatchMovie} />
        <MovieWatch watchMovie={watchMovie} setWatchMovie={setWatchMovie} showSelectWatchMovie={showSelectWatchMovie} setShowSelectWatchMovie={setShowSelectWatchMovie} movieId={movieId} isHideWatchMovie={isHideWatchMovie} setIsHideWatchMovie={setIsHideWatchMovie} />
      </div>
    </>
  )
}
export default Home;