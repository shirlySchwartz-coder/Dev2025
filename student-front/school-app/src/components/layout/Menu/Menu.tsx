import React from 'react';
import { Link } from 'react-router-dom';
import menuItems from '../../utils/menuList';

function Menu() {
  return (
    <div>
      {menuItems.map((menu, index) => (
        <div key={index} className='flex flex-col gap-2 text-red-500'>
          <div className='hidden lg:block text-gray-500 font-light my-4'>
            {menu.title}
          </div>
          <br />
          <br />

          {menu.items.map((item, index) => (
            <Link
              to={item.href}
              key={item.label}
              className='flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2'
            >
              <img src={item.icon} alt={item.label} width={20} height={20} />
              <div className='hidden lg:block'>{item.label}</div>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Menu;
