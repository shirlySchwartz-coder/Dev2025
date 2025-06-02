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
          icon: '/register.png',
          label: 'Register',
          href: '/register',
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
  export  default menuItems;