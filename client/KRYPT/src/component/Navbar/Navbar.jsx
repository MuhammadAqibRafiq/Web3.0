import React, { useState } from 'react'
import { HiMenuAlt4 } from "react-icons/hi"
import { AiOutlineClose } from "react-icons/ai"

import logo from "../../../images/logo.png"

const NavbarItems = ({ title, classProps }) => {
  return <li className={`mx-4 cursor-pointer ${classProps}`}>
    {title}
  </li>
}
const Navbar = () => {

  const [toggleMenu, settoggleMenu] = useState(false)

  return (
    <nav className='w-full flex md:justify-center justify-between items-center p-4'>

      <div className='md:flex:[0.5] flex-initial justify-center items-center'>
        <img src={logo} alt="logo" className='w-32 cursor-pointer' />
      </div>

      <ul className='text-white md:flex hidden list-none flex-row flex-initial justify-center items-center'>

        {["Market", "Exchange", "Tutorials", "Wallets"].map((items, key) => (
          <NavbarItems title={items} key={key} />
        ))}

        <li className='bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]'>
          Login
        </li>
      </ul>

      {!toggleMenu ?
        <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => settoggleMenu(true)} />
        :
        <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => settoggleMenu(false)} />
      }
      {
        toggleMenu && (
          <ul className='z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none 
          flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in'
          >
            <li className='text-xl w-full my-2'>
              <AiOutlineClose fontSize={28} className="md:hidden cursor-pointer" onClick={() => settoggleMenu(false)} />
            </li>
            {["Market", "Exchange", "Tutorials", "Wallets"].map((items, key) => (
              <NavbarItems title={items} key={key} classProps="my-2 text-lg text-white" />
            ))}
          </ul>
        )
      }
    </nav>
  )
}

export default Navbar