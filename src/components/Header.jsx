import React from 'react'
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-slate-200 shadow-sm">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to={'/'}>
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-red-500">REAL</span>
            <span className='text-slate-700'>ESTATE</span>
          </h1>
        </Link>
        <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
          <input className="bg-transparent focus:outline-none w-24 sm:w-64" type='text' placeholder='Search...'/>
          <FaSearch className='text-slate-800'/>
        </form>
        <ul className='flex gap-4'>
          <Link to={'/'}>
            <li className='hidden sm:inline text-slate-800 hover:underline font-semibold'>Home</li>
          </Link>

          <Link to={'/about'}>
            <li className='hidden sm:inline text-slate-800 hover:underline font-semibold'>About</li>
          </Link>
          
          <Link to={'/sign-in'}>
            <li className='text-slate-800 hover:underline font-semibold'>Sign In</li>
          </Link>
        </ul>
      </div>
    </header>
  )
}

export default Header