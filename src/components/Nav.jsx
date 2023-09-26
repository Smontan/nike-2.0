import { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';

import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants';

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header className='padding-x py-8 absolute z-10 w-full '>
      <nav className='flex justify-between items-center max-container'>
        <a href="/">
          <img 
            src={headerLogo} 
            alt="Nike logo" 
            width={130}
            height={29}
          />
        </a>

        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden ">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="font-montserrat leading-normal text-lg text-slate-gray">{item.label}</a>
            </li>
          ))}
        </ul>
        {/* <div className="hidden max-lg:block">
          <img 
            src={hamburger} 
            alt="Menu icon" 
            width={25}
            height={25}
            o
          />
        </div> */}

        <div className="hidden max-lg:block relative">
          <HiMenuAlt4
            onClick={() => setToggle(true)}
            className='bg-coral-red w-[30px] h-[30px] rounded-full p-1 text-white cursor-pointer'
          />

          {toggle && (
            <div className=" fixed top-0 bottom-0 right-0 h-full w-[70%] bg-primary bg-hero bg-cover bg-center z-10 flex flex-col">
              <HiX 
                onClick={() => setToggle(false)}
                className=' w-[35px] h-[35px] bg-white rounded-full my-8 ms-auto mr-8 p-1 cursor-pointer justify-self-end object-contain'
              />
              <ul className="flex flex-col h-full text-center mt-10">
                {navLinks.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="font-montserrat leading-10 text-xl  text-slate-gray uppercase font-semibold" onClick={() => setToggle(false)}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Nav