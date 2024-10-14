import React, { useState } from "react";
import { FaStar } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { LuArrowLeftCircle } from "react-icons/lu";

function DetailMovie({setIsHideWatchMovie, setUserRating, showSelectWatchMovie, setWatchMovie}){
    const starBar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
    const[hoverindex, setHoverIndex] = useState(null);
    const[selectRateing, setSelectRating] = useState(0)
    const[showBtn, setShowBtn] = useState(false);
    const {Title, Poster, Released, Runtime, Genre, imdbRating} = showSelectWatchMovie
    return(
        <>
        <div className="bg-[#706d6d4d]">
         <button onClick={() => setIsHideWatchMovie(true)} className="float-end m-2">
                <LuArrowLeftCircle className='text-white font-extrabold text-[25px]' />
            </button>
        <div className="flex items-center p-1 gap-6 ">
            
            <div className="h-auto w-28">
                <img src={Poster ? Poster : "https://m.media-amazon.com/images/M/MV5BMjE0NGIwM2EtZjQxZi00ZTE5LWExN2MtNDBlMjY1ZmZkYjU3XkEyXkFqcGdeQXVyNjMwNzk3Mjk@._V1_SX300.jpg"} alt="" />
            </div>
            <div className="text-white">
                <h3 className="font-bold text-xl">{Title ? Title : "Inception"}</h3>
                <p className="text-[17px] font-medium py-1">{Released ? Released : '07 Jan 2020'} - {Runtime ? Runtime : '15 min'}</p>
                <p className="text-[17px] font-medium ">{Genre ? Genre : 'Action, Adventure, Sci-Fri'}</p>
                <div className="flex items-center gap-2">
                    <FaStar className="text-yellow-300" />
                    <p className="text-[17px] font-medium py-1">{imdbRating ? imdbRating : 8.9} IMDB rating</p>
                </div>
            </div>
        </div>
       
        </div>
        <div className="w-fit mx-auto mt-4 bg-[#706d6d] p-3 rounded">
            <div className="flex gap-2 items-center ">
                {
                    starBar.map((ind) => {
                        return <p className="text-[21px] cursor-pointer text-[#ccc8c8]" 
                        key={ind}
                        onMouseEnter={() => setHoverIndex(ind)}
                        onMouseLeave={() => setHoverIndex(null)}
                        onClick={() => {
                            setSelectRating(ind)
                            setShowBtn(true)
                            setUserRating(ind);
                        }}
                            >  <FaStar className={`${hoverindex >= ind || selectRateing >= ind ? 'text-yellow-300' :'' } `} /></p>
                        })
                    }
                <p className="text-yellow-300 font-semibold text-xl">{hoverindex ? hoverindex : selectRateing}</p>
            </div>   
            { showBtn &&
                <div className="text-center mt-2">
                    <button onClick={() => {
                        setIsHideWatchMovie(true)
                        setWatchMovie(prevData => [...prevData, showSelectWatchMovie]);
                        console.log(showSelectWatchMovie);
                    }} type="button" className="font-semibold text-white text-[19px] shadow-lg bg-purple-500 hover:bg-purple-600 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 rounded-lg text-sm px-12 py-2 text-center inline-flex items-center ">
                    <FaPlus className="mx-2" /> Add to List</button>
                </div>
            }
        </div>
        <div className="text-white px-5 py-2 text-[15px]">
            <p>This Inception prequel unfolds courtesy of a beautiful Motion Comic, and explains how Cobb, Arthur and Nash were enlisted by Cobol Engineering. Diehard fans of the film will be especially interested in this one.</p>
            <p className="py-2">Starring Leonardo DiCaprio, Joseph Gordon-Levitt, Lukas Haas</p>
            <p>Directed by <span className="font-medium">Christopher Nolan (based on characters by)</span></p>
        </div>
        </>
    )
}
export default DetailMovie;