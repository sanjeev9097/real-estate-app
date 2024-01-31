import React from 'react'
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-slate-200 shadow-sm">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to={'/'}>
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-red-500 text-2xl ">REAL</span>
            <span className='text-slate-700 items-baseline'>ESTATE</span>
          </h1>
        </Link>
        <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
          <input className="bg-transparent focus:outline-none w-24 sm:w-64" type='text' placeholder='Search...'/>
          <FaSearch className='text-slate-800'/>
        </form>
        <ul className='flex gap-4'>
          <Link to={'/'}>
            <li className='hidden sm:inline text-slate-800 hover:text-red-800 font-bold'>HOME</li>
          </Link>

          <Link to={'/about'}>
            <li className='hidden sm:inline text-slate-800 hover:text-red-800 font-bold '>ABOUT</li>
          </Link>
          
          <Link to={'/sign-in'}>
            <li className='text-slate-800 hover:text-red-800 font-bold'>SIGNIN</li>
          </Link>
        </ul>
      </div>
    </header>
  )
}

export default Header