import Image from 'next/image';
const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4'>
      {/* search bar */}
      <div className='hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2'>
        <Image src='/search.png' alt='search' width={15} height={15} />
        <input type='text' placeholder='Search...'className="w-[200px] p-2 bg-transparent outline-none" />
      </div>
      {/* users*/}
      
        <div className=' flex items-center gap-6 justify-end w-full '>
          <div className='flex flex-col'>
            <span className='text-xs leading-3 font-medium '>Hello</span>
            <span className='text-xs leading-3 font-medium'>John Doe</span>
            <span className='text-[10px] text-gray-500 text-right'>Admin</span>
           
          </div>
          <Image src='/profile.png' alt='notification' width={20} height={20} className="rounded-full" />
         
        
      </div>
    </div>
  );
};

export default Navbar;
