import React from 'react';

function Header(){
    return(
        <div>
            <div className='flex bg-purple-500 rounded py-3 px-2 justify-around items-center'>
                <div className='flex items-center'>
                    <img className='w-[50px]' src="/popcorn.png" alt="" />
                    <p className='text-white font-bold text-3xl'>usePopcorn</p>
                </div>
                <input className='px-3 py-2 rounded w-[360px] bg-purple-300 text-white shadow-lg font-serif text-[18px]' type="text" placeholder='Search movies...' />
                <p className='text-white font-bold text-xl'>Found 0 top results</p>
            </div>
        </div>
    )
}
export default Header;