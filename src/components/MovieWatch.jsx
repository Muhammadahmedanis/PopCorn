import React from 'react';
import { FaStar } from "react-icons/fa6";
import { GiStarFormation } from "react-icons/gi";
import { PiHashFill } from "react-icons/pi";
import { GiSandsOfTime } from "react-icons/gi";
import { RxCrossCircled } from "react-icons/rx";
{/* <RxCrossCircled classNmae='bg-red' /> */}

function MovieWatch(){
    return(
        <div className='h-96 w-96 bg-[rgba(69,68,68,0.93)] rounded'>
            <div className='shadow-lg px-4 py-2'>
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
        </div>
    )
}
export default MovieWatch;