import React from 'react';
import { FcCalendar } from "react-icons/fc";

function MovieList({movieList, setMovieId, setIsHideWatchMovie}){
    const handleClick = () => {
        setIsHideWatchMovie(false);
    }
    return(
        <div className='h-auto w-96 mb-4 bg-[rgba(69,68,68,0.93)] rounded'>
            {
                movieList && movieList.map((val) => {
                    return <ShowSearchMovie handleClick={handleClick} setMovieId={setMovieId} ind={val.imdbID} key={val.imdbID} title={val.Title} year={val.Year} img={val.Poster} />   
                })
            }
        </div>
    )
}

const ShowSearchMovie = ({title, year, img, setMovieId, ind, handleClick}) => {
    return(
        <div onClick={handleClick} className='flex gap-4 shadow-lg py-3 px-5 border-b-2 border-b-[#ffffff6b] rounded cursor-pointer hover:bg-[rgba(117,116,116,0.93)]'>
            <div className='h-4 w-8'>
            <img src={img ? img : "https://st2.depositphotos.com/4431055/11471/i/380/depositphotos_114715830-stock-photo-books-on-wooden-table.jpg"} alt="not" />
            </div>
            <div className='text-white'>
                <h3 className='font-bold'>{title}</h3>
                <div className='flex items-center gap-2'>
                    <span><FcCalendar /></span>
                    <span>{year}</span>
                </div>
            </div>
        </div>
    )
}

export default MovieList;