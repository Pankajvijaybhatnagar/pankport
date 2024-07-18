// components/Navbar.js
import React from 'react';
import Link from 'next/link';

const Navbar = () => {


  return (
    <nav className=" bg-white rounded-xl mt-2">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
             
            </button>
          </div>
          <div className=" flex items-center  justify-between sm:items-stretch sm:justify-start">
            <div className="">
              <h2 className="text-white">Logo</h2>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <Link className='hover:bg-gray-300 rounded-lg px-3 duration-700 ' href="/" >
                  Home
                </Link>
                <Link  className='hover:bg-gray-300 rounded-lg px-3 duration-700 ' href="/contact" >
                 Contact
                </Link>
                <Link  className='hover:bg-gray-300 rounded-lg px-3 duration-700 ' href="/about" >
                 About
                </Link>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
