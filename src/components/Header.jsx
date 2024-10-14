import React, { useEffect, useState } from 'react';

function Header({setMovieList, setIsLoader}){
    
    const[inp, setInp] = useState('');
    const[result, setResult] = useState(0);
    
    useEffect(() => {
        async function fetchMovie() {
            try {
                setIsLoader(true)
                const res = await fetch(`https://www.omdbapi.com/?apikey=2a6626ef&s=${inp}`)
                if(!res.ok)
                    throw new Error("Something went wrong");
                    const data = await res.json();
                    setMovieList(data.Search);
                    data.Search && setResult(data.Search.length);
                    setIsLoader(false)
                } catch (error) {
                    console.log("error found in API", error);
                }
            }
            fetchMovie();
    }, [inp]);
    return(
        <div>
            <div className='flex flex-wrap bg-purple-500 fixed top-0 w-full z-10 py-3 px-2 justify-around items-center'>
                <div className='flex items-center'>
                    <img className='w-[50px]' src="/popcorn.png" alt="" />
                    <p className='text-white font-bold text-3xl'>usePopcorn</p>
                </div>
                    <input value={inp} onChange={(e) => setInp(e.target.value)} className='px-3 py-[10px] rounded w-[360px] bg-purple-300 text-white shadow-lg font-serif text-  [18px]' type="text" placeholder='Search movies...' />
                    <p className='text-white font-bold text-xl'>Found {result} top results</p>
            </div>
        </div>
    )
}
export default Header;