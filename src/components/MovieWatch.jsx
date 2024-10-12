import React, { useEffect, useState } from 'react';
import { FaStar } from "react-icons/fa6";
import { GiStarFormation } from "react-icons/gi";
import { PiHashFill } from "react-icons/pi";
import { GiSandsOfTime } from "react-icons/gi";
import { RxCrossCircled } from "react-icons/rx";
import DetailMovie from './DetailMovie';

function MovieWatch({movieId, isHideWatchMovie}){
    const[watchMovie, setWatchMovie] = useState([]);
    const[isVisible, setIsVisible] = useState(true);
    const handleHide = () => {
        setIsVisible(false)
    }
    useEffect(() => {
        async function fetchSelectMovie(){
            try {
                const res = await fetch('http://www.omdbapi.com/?i=tt5295894&apikey=2a6626ef');
                if(!res.ok)
                    throw new Error('Something wrong');
                    const data = await res.json();
                    setWatchMovie(data);
                    // console.log(data);
            } catch (error) {
                console.log("error in select movie");
            }
        }
        fetchSelectMovie()
    }, [])
    return(
        <div className='h-auto mb-4 w-96 bg-[rgba(69,68,68,0.93)] rounded'>
            { !isHideWatchMovie ? 
            <div>
                <div className='shadow-sm shadow-slate-100 px-4 py-2'>
                    <p className='text-white font-semibold py-1'>MOVIES YOU WATCHED</p>
                    <div className='flex gap-4'>
                    <div className='flex items-center gap-1'>
                            <span><PiHashFill className='text-blue-300' /></span>
                            <span className='text-white'>0 Movies</span>
                        </div>
                        <div className='flex items-center gap-1'>
                            <span><FaStar className='text-yellow-300' /></span>
                            <span className='text-white'>0.0</span>
                        </div>
                        <div className='flex items-center gap-1'>
                            <span><GiStarFormation className='text-yellow-300' /></span>
                            <span className='text-white'>0.0</span>
                        </div>
                        <div className='flex items-center gap-1'>
                            <span><GiSandsOfTime className='text-yellow-200' /></span>
                            <span className='text-white'>0 min</span>
                        </div>
                    </div>
                </div>
                { isVisible && <SelectMovieWatchList watchMovie={watchMovie} handleHide={handleHide} />}
            </div> :
                (<DetailMovie />)
            }
        </div>
    )
}
export default MovieWatch;

const SelectMovieWatchList = ({handleHide}) => {
    return(
        <div className='flex justify-between items-center gap-4 shadow-lg py-3 px-5 border-b-2 border-b-[#ffffff6b] rounded cursor-pointer hover:bg-[rgba(117,116,116,0.93)]'>
                <div className='h-auto w-[65px]'>
                    <img src="https://st2.depositphotos.com/4431055/11471/i/380/depositphotos_114715830-stock-photo-books-on-wooden-table.jpg" alt="not" />
                </div>
                <div className='text-white'>
                    <p className='font-bold'>Inception</p>
                    <div className='flex gap-3'>
                        <div className='flex items-center gap-2'>
                            <span className='text-yellow-300'><FaStar /></span>
                            <span>8.8</span>
                        </div>
                        <div className='flex items-center gap-1'>
                            <span><GiStarFormation className='text-yellow-300' /></span>
                            <span className='text-white'>0.0</span>
                        </div>
                        <div className='flex items-center gap-1'>
                            <span><GiSandsOfTime className='text-yellow-200' /></span>
                            <span className='text-white'>120 min</span>
                        </div>
                    </div>
                </div>
                <div>
                    <RxCrossCircled onClick={handleHide} className="text-red-600 text-[23px] hover:text-black hover:scale-110 duration-300 ease-in-out" />
                </div>
            </div>
    )   
}