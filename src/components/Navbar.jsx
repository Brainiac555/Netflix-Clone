import React from 'react';

const Navbar = () => {
  return (
    <div className='relative z-10 flex items-start justify-between md:px-12'>
      <nav className="absolute top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-gradient-to-b from-black/90 to-transparent">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix Logo"
          className="h-6 md:h-10 md:ml-30"
        />
        <button className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-md font-medium md:mr-30">
          Sign In
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
