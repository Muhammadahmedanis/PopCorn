import React, { useEffect, useState } from 'react';
import { FaStar } from "react-icons/fa6";
import { GiStarFormation } from "react-icons/gi";
import { PiHashFill } from "react-icons/pi";
import { GiSandsOfTime } from "react-icons/gi";
import { RxCrossCircled } from "react-icons/rx";
import DetailMovie from './DetailMovie';

function MovieWatch({movieId, isHideWatchMovie, setIsHideWatchMovie, showSelectWatchMovie, setShowSelectWatchMovie, setWatchMovie, watchMovie}) {
    const [isVisible, setIsVisible] = useState(true);
    const[userRating, setUserRating] = useState(0);

    useEffect(() => {
        async function fetchSelectMovie() {
          try {
              const res = await fetch(`http://www.omdbapi.com/?i=${movieId}&apikey=2a6626ef`)
              if(res.ok){
                  const data = await res.json()
                  if(data.Response != false)
                  setShowSelectWatchMovie(data);
                }
          } catch (error) {
            console.log(error);
          }  
        }
        fetchSelectMovie()
    }, [movieId])

    return (
        <div className='h-auto mb-4 w-96 bg-[rgba(69,68,68,0.93)] rounded'>
            {isHideWatchMovie ? (
                <div>
                    <div className='shadow-sm shadow-slate-100 px-4 py-2'>
                            <h4 className='text-white font-semibold py-1'>MOVIES YOU WATCHED</h4>
                        <div className='flex gap-4'>
                            <MovieStats watchMovie={watchMovie} />
                        </div>
                    </div>
                    {isVisible && watchMovie && (
                        watchMovie.map((val, id) => {
                            return <SelectMovieWatchList watchMovie={watchMovie} setWatchMovie={setWatchMovie} key={id} id={id} title={val.Title} img={val.Poster} imdbRating={val.imdbRating} runTime={val.Runtime} userRating={userRating} />
                        })
                    )}
                </div>
            ) : (
                <DetailMovie setWatchMovie={setWatchMovie} showSelectWatchMovie={showSelectWatchMovie} setIsHideWatchMovie={setIsHideWatchMovie} setUserRating={setUserRating} />
            )}
        </div>
    );
}

export default MovieWatch;

const MovieStats = ({watchMovie}) => {
    return (
        <>
            <div className='flex items-center gap-1'>
                <PiHashFill className='text-blue-300' />
                <span className='text-white'>{watchMovie.length} Movies</span>
            </div>
            <div className='flex items-center gap-1'>
                <FaStar className='text-yellow-300' />
                <span className='text-white'>0.0</span>
            </div>
            <div className='flex items-center gap-1'>
                <GiStarFormation className='text-yellow-300' />
                <span className='text-white'>0</span>
            </div>
            <div className='flex items-center gap-1'>
                <GiSandsOfTime className='text-yellow-200' />
                <span className='text-white'>120 min</span>
            </div>
        </>
    );
};
const SelectMovieWatchList = ({ title, img, runTime, imdbRating, userRating, watchMovie, setWatchMovie, id}) => {
    return (
        <div className='flex justify-between items-center gap-4 shadow-lg p-3 border-b-2 border-b-[#ffffff6b] rounded cursor-pointer hover:bg-[rgba(117,116,116,0.93)]'>
            <div className='h-auto'>
                <img 
                    src={img ? img : "https://st2.depositphotos.com/4431055/11471/i/380/depositphotos_114715830-stock-photo-books-on-wooden-table.jpg"}
                    alt={title}
                    className="h-[69px] w-[73px]"
                />
            </div>
            <div className='text-white'>
                <h1 className='font-bold py-2 text-[20px]'>{title || "Inception"}</h1>
                <div className='flex gap-3'>
                    <div className='flex items-center gap-2'>
                        <FaStar className='text-yellow-300' />
                        <span>{imdbRating || '0.0'}</span>
                    </div>
                    <div className='flex items-center gap-1'>
                        <GiStarFormation className='text-yellow-300' />
                        <span className='text-white'>{userRating ? userRating : 0}</span>
                    </div>
                    <div className='flex items-center gap-1'>
                        <GiSandsOfTime className='text-yellow-200' />
                        <span className='text-white'>{runTime || "120 min"}</span>
                    </div>
                </div>
            </div>
            <div>
                <RxCrossCircled
                // setiS
                    onClick={() => {
                        const updateWatchMovie = watchMovie.filter((_, movieId) => movieId != id );
                        setWatchMovie(updateWatchMovie)
                    }}
                    className="text-red-600 text-[23px] hover:text-black hover:scale-110 duration-300 ease-in-out"
                />
            </div>
        </div>
    );
};

