import React from 'react'
import { useLocation, Link, useNavigate } from 'react-router-dom'

function Header() {
    const location = useLocation()
    const Navigate = useNavigate()

    function pathMatchRoute(route) {
        return route === location.pathname;
    }

    return (
        <div className='bg-white border-b shadow-sm sticky'>
            <header className='flex justify-between items-center px-3 max-w-6xl mx-auto z-50 '>
                <div>
                    <img src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg" alt="logo" className='h-5 cursor-pointer' />
                </div>
                <div>
                    <ul className='flex space-x-10'>
                        <li onClick={() => Navigate("/")} className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMatchRoute("/") && "text-black border-b-red-400"}`}>Home</li>
                        <li onClick={() => Navigate("/offers")} className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMatchRoute("/offers") && "text-black border-b-red-400"}`}>Offers</li>
                        <li onClick={() => Navigate("/sign-in")} className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMatchRoute("/sign-in") && "text-black border-b-red-400"}`}>Sign in</li>
                    </ul>
                </div>
            </header>
        </div>
    )
}

export default Header;
