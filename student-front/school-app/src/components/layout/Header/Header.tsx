import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <div>
        <Link
          to='/'
          className='flex items-center justify-center lg:justify-start gap-2'
        >
          <img src='/logo.png' alt='logo' width={50} height={50} />
          <span className='hidden lg:block'>School App</span>
        </Link>
      </div>
    </div>
  );
}

export default Header;
