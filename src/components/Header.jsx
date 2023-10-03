import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function Header() {
    const location = useLocation()
    const Navigate = useNavigate()
    function LocationMatch(route){
        if(route === location.pathname){
            return true
        }
    }
    
  return (
    <div className='bg-white border-b shadow-sm sticky'>
        <header className='flex justify-between items-center px-3 max-w-6xl mx-auto z-50 '>
            <div>
                <img src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg" alt="logo" className='h-5 cursor-pointer' />
            </div>
            <div>
                <ul className='flex space-x-10'>
                    <li onClick={()=>Navigate("/")}        className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${LocationMatch("/") && "text-black border-b-red-500"}  `}>Home</li>
                    <li onClick={()=>Navigate("/offers")}  className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${LocationMatch("/offers") && "text-black border-b-red-500"}  `}>Offers</li>
                    <li onClick={()=>Navigate("/sign-in")} className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${LocationMatch("/sign-in") && "text-black border-b-red-500"}  `}>Sign in</li>
                  </ul>
            </div>
        </header>
    </div>
  )
}

export default Header