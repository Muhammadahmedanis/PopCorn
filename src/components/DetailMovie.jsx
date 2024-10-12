import React from "react";
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";

function DetailMovie(){
    const starBar = ["✰", "✰", "✰", "✰", "✰", "✰", "✰", "✰", "✰", "✰"]
    return(
        <>
        <div className="flex items-center gap-6 bg-[#706d6d4d] rounded-tl-lg">
            <div className="h-auto w-24 ">
                <img className="rounded-tl-lg" src="https://m.media-amazon.com/images/M/MV5BMjE0NGIwM2EtZjQxZi00ZTE5LWExN2MtNDBlMjY1ZmZkYjU3XkEyXkFqcGdeQXVyNjMwNzk3Mjk@._V1_SX300.jpg" alt="" />
            </div>
            <div className="text-white">
                <h1 className="font-bold text-xl">Inception</h1>
                <p className="text-[15px]">16 Jul 2010 - 148 min</p>
                <p className="text-[15px]">Action, Adventure, Sci-Fri</p>
                <div className="flex items-center gap-2">
                    <FaStar className="text-yellow-300" />
                    <p >8.8 IMDB rating</p>
                </div>
            </div>
        </div>
        <div className="flex w-fit mx-auto gap-2 items-center mt-4 bg-[#706d6d] p-3 rounded">
            {
                starBar.map((val,ind) => {
                    return <p className="text-[21px] text-yellow-300" key={ind}>{val}</p>
                })
            }
            <p className="text-yellow-300 font-semibold text-xl">9</p>
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