
import React from 'react'
import logo from '../../src/assets/images/logo.png';
import { FaShoppingCart } from "react-icons/fa";
import {  useNavigate } from 'react-router-dom';
import { useCartStore } from '../Zustand/CartStore';


const Header = () => {

  const navigate = useNavigate();
  const { cart } = useCartStore();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  
  return (
    <div className="bg-white">
      <div className="mx-auto flex  max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <a className="block text-teal-600" href="#">
          <div className=' flex gap-2'>
            <h1 className=' text-2xl pt-6 font-bold'>Store</h1>
            <img src={logo} className='w-20' />

          </div>
        </a>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <a className="text-gray-500 transition hover:text-gray-500/75" href="/dashboard"> Home </a>
              </li>

              <li>
                <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> About </a>
              </li>

              <li>
                <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Service </a>
              </li>

            </ul>
          </nav>

        <div className="relative" onClick={() => navigate('/cart')}>
      <FaShoppingCart size={40} className="text-lg cursor-pointer" />
      {totalItems > 0 && (
        <span className="absolute -top-1 left-5 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex justify-center items-center">
          {totalItems}
        </span>
      )}
    </div>

        </div>
      </div>
    </div>
  )
}

export default Header

