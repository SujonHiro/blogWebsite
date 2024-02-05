import {React,useState} from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaAlignJustify } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [open, setOpen] = useState(false);

  const location = useLocation();

  const user = {
    name: 'Tom Cook',
    email: 'tom@example.com',
    imageUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  };

  const navigation = [
    { name: 'Home', href: '/', current: location.pathname === '/' },
    { name: 'Blogs', href: '/blogs', current: location.pathname === '/blogs' },
    { name: 'Authors', href: '/author', current: location.pathname === '/author' }
  ];

const userNavigation = [
  { name: 'Your Profile', href: '/profile' },
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Sign out', href: '/signout' },
]
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  return (
    <div className='min-h-full'>
        <nav className='bg-gray-800 fixed top-0 left-0 right-0 z-10'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                  <div className='flex h-16 items-center justify-between'>
                    <div className='flex items-center'>
                        <div className='flex-shrink-0'>
                            <img
                            className="h-8 w-8"
                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                            alt="blog"
                            />
                        </div>
                        <div className='hidden md:block'>
                            <div className='ml-10 flex items-baseline space-x-4'>
                                {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.href}
                                    className={classNames(
                                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                    'px-3 py-2 rounded-md text-sm font-medium'
                                    )}
                                >
                                    {item.name}
                                </Link>
                                ))}
                            </div>
                        </div>
                    </div>
               
                        <div className='hidden md:block'>
                          <div className='ml-4 flex items-center md:ml-6'>
                                <button className='rounded-md bg-gradient-to-r from-blue-600 to-purple-600 font-semibold px-3 py-2 text-white hover:opacity-85 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'>
                                  Login
                                </button>
                                <div className='relative ml-3'>
                                      <div>
                                          <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className='relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'>
                                              <span className='absolute inset-1.5'/>
                                              <span className='sr-only'>view Profile</span>
                                              <img className='h-8 w-8 rounded-full' src={user.imageUrl} alt="profile" />
                                          </button>
                                      </div>
                                        {/*transition*/}
                                          {isDropdownOpen && (
                                              <ul className='absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                                              {
                                                  userNavigation.map((item) => (
                                                      <li key={item.name}>
                                                      <a 
                                                        href={item.href} 
                                                        className={classNames(
                                                          location.pathname===item.href ? 'bg-gray-100' : '',
                                                          'block px-4 py-2 text-sm text-gray-700 hover:text-blue-400'
                                                        )}
                                                      >
                                                        {item.name}
                                                      </a>
                                                    </li>
                                                  ))
                                              }
                                          </ul> 
                                          )}
                                </div>      
                              </div>
                      </div>
                      <div className='-mr-2 flex md:hidden'>
                          {/*relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800*/}
                          <button className='relative inline-flex justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
                          onClick={() => setOpen(!open)}
                          >
                            <span className='absolute -inset-0.5'/>
                            <span className='sr-only'>Open Main Menu</span>
                            {open ? (
                              <IoCloseOutline className='block h-6 w-6' aria-hidden="true"/>
                            ):(
                              <FaAlignJustify className='block h-6 w-6' aria-hidden="true"/>
                            )}  
                          </button>
                      </div>
                </div>
                
            </div>
            {open ? (<div className='md:hidden'>
                  {/*space-y-1 px-2 pb-3 pt-2 sm:px-3*/}
                  <div className='space-y-1 px-2 pb-3 pt-2 sm:px-3'>
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white','block rounded-md px-3 py-2 text-base font-medium'
                      )}
                      >
                      {item.name}
                      </Link>
                    ))}
                    
                  </div>
                  <div className='border-t border-gray-700 pb-3 pt-4'>
                  <div className='flex items-center px-5'>
                    <div className='flex-shrink-0'>
                      <img className='h-8 w-8 rounded-full' src={user.imageUrl} alt="profile" />
                    </div>
                    <div className='ml-3'>
                          <div className='text-base font-medium leading-none text-white'>{user.name}</div>
                          <div className='text-sm font-medium leading-none text-gray-400'>{user.email}</div>
                    </div>
                    <button className='ml-auto rounded-md bg-gradient-to-r from-blue-600 to-purple-600 font-semibold px-3 py-2 text-white hover:opacity-85 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'>
                        Login
                    </button>
                  </div>
                  <div className='mt-3 space-y-1 px-2'>
                    
                    {userNavigation.map((item)=>(
                      
                      <a key={item.name} 
                        href={item.href}
                        className='block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white'
                      >
                      {item.name}
                      </a>
                    )
                      
                    )}
                  </div>
                </div>
                </div>
                ):null}
                  {/*border-t border-gray-700 pb-3 pt-4*/}
      </nav>
    </div>
  );
};

export default Navbar;
