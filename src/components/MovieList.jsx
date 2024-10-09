import React from 'react';
import { FcCalendar } from "react-icons/fc";

function MovieList(){
    return(
        <div className='h-96 w-96 bg-[rgba(69,68,68,0.93)] rounded'>
            <div className='flex gap-4 shadow-lg py-3 px-5 border-b-2 border-b-[#ffffff6b] rounded cursor-pointer hover:bg-[rgba(117,116,116,0.93)]'>
                <div className='h-4 w-8'>
                    <img src="https://img.freepik.com/free-photo/education-concept-with-book_23-2149001214.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1727913600&semt=ais_hybrid" alt="" />
                </div>
                <div className='text-white'>
                    <p className='font-bold'>Inception</p>
                    <div className='flex items-center gap-2'>
                        <span><FcCalendar /></span>
                        <span>2010</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MovieList;