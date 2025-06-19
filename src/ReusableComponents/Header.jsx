import React from 'react'
import logo from '../../src/assets/images/logo.png';

const Header = () => {
  return (
   <div className="bg-white">
  <div className="mx-auto flex  max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
    <a className="block text-teal-600" href="#">
     <div className=' flex gap-2'>
      <h1 className=' text-2xl pt-6 font-bold'>Store</h1>
     <img src={logo} className='w-20'/>
     
     </div>
    </a>

    <div className="flex flex-1 items-center justify-end md:justify-between">
      <nav aria-label="Global" className="hidden md:block">
        <ul className="flex items-center gap-6 text-sm">
          <li>
            <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Home </a>
          </li>

          <li>
            <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> About </a>
          </li>

          <li>
            <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Service </a>
          </li>

        </ul>
      </nav>

    
    </div>
  </div>
</div>
  )
}

export default Header