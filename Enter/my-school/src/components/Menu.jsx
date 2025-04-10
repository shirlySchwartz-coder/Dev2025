import Image from 'next/image.js';
import Link from 'next/link.js';

const menuItems = [
  {
    title: 'MENU',
    items: [
      {
        icon: '/home.png',
        label: 'Home',
        href: '/',
        visible: ['admin', 'teacher', 'student'],
      },
      {
        icon: '/teacher.png',
        label: 'Teachers',
        href: 'teachers',
        visible: ['admin', 'teacher'],
      },
      {
        icon: '/student.png',
        label: 'Students',
        href: 'students',
        visible: ['admin', 'teacher'],
      },

      {
        icon: '/class.png',
        label: 'Classes',
        href: '/list/classes',
        visible: ['admin', 'teacher'],
      },

      {
        icon: '/assignment.png',
        label: 'Task',
        href: '/list/task',
        visible: ['admin', 'teacher', 'student'],
      },
      {
        icon: '/result.png',
        label: 'Results',
        href: '/list/results',
        visible: ['admin', 'teacher', 'student'],
      },
    ],
  },
  {
    title: 'OTHER',
    items: [
      {
        icon: '/profile.png',
        label: 'Profile',
        href: '/profile',
        visible: ['admin', 'teacher', 'student'],
      },
      {
        icon: '/setting.png',
        label: 'Settings',
        href: '/settings',
        visible: ['admin', 'teacher', 'student'],
      },
      {
        icon: '/logout.png',
        label: 'Logout',
        href: '/logout',
        visible: ['admin', 'teacher', 'student'],
      },
    ],
  },
];

const Menu = () => {
  return (
    <div className='mt-4 text-sm'>
      {menuItems.map((menu, index) => (
        <div key={index} className='flex flex-col gap-2'>
          <span className='hidden lg:block text-gray-500 font-light my-4'>
            {menu.title}
          </span>
         

          {menu.items.map((item, index) => (
            <Link
              href={item.href}
              key={item.label}
              className='flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2'
            >
              <Image src={item.icon} alt={item.label} width={20} height={20} />
              <span className='hidden lg:block'>{item.label}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;
