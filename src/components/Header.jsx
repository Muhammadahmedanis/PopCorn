import React, { useEffect, useState } from 'react';

function Header({setMovieList}){
    const[inp, setInp] = useState('');
    const[result, setResult] = useState(0);
    useEffect(() => {
        async function fetchMovie() {
            try {
                const res = await fetch(`https://www.omdbapi.com/?apikey=2a6626ef&s=Inception`)
                if(!res.ok)
                    throw new Error("Something went wrong");
                    const data = await res.json();
                    setMovieList(data.Search);
                    setResult(data.Search.length);
            } catch (error) {
                console.log("error found in API");
            }
        }
        fetchMovie();
    }, []);
    return(
        // <div>
        //     <div className='flex bg-purple-500 rounded py-3 px-2 justify-around items-center'>
        //         <div className='flex items-center'>
        //             <img className='w-[50px]' src="/popcorn.png" alt="" />
        //             <p className='text-white font-bold text-3xl'>usePopcorn</p>
        //         </div>
        //             <input value={inp} onChange={(e) => setInp(e.target.value)} className='px-3 py-2 rounded w-[360px] bg-purple-300 text-white shadow-lg font-serif text-  [18px]' type="text" placeholder='Search movies...' />
        //             <p className='text-white font-bold text-xl'>Found {result} top results</p>

        //     </div>
        // </div>
        <div>
        <div className="bg-purple-500 rounded py-3 px-2">
            <div className="flex justify-between items-center mb-3">
                <div className="flex items-center">
                    <img className="w-[50px]" src="/popcorn.png" alt="" />
                    <p className="text-white font-bold text-sm sm:text-lg md:text-xl lg:text-3xl ml-2">usePopcorn</p>
                </div>
                <p className="text-white font-bold text-xl">Found {result} top results</p>
            </div>
            <div className="flex justify-center">
                <input
                    value={inp}
                    onChange={(e) => setInp(e.target.value)}
                    className="px-3 py-2 rounded w-[360px] bg-purple-300 text-white shadow-lg font-serif text-[18px]"
                    type="text"
                    placeholder="Search movies..."
                />
            </div>
        </div>
    </div>
    

    )
}
export default Header;