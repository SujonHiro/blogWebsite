import {React,useState} from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
        <nav className='bg-gray-800'>
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
                {/* hidden md:block*/}
                <div className='hidden md:block'>
                    {/* ml-4 flex items-center md:ml-6*/}
                    <div className='ml-4 flex items-center md:ml-6'>
                        {/* relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 */}
                        <button className='rounded-md bg-gradient-to-r from-blue-400 to-purple-400 font-semibold px-3 py-2 text-white hover:opacity-85 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'>
                           Login
                        </button>
                        {/* relative ml-3*/}
                        <div className='relative ml-3'>
                            <div>
                                {/*relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800*/}
                                <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className='relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'>
                                    {/*absolute inset-1.5*/}
                                    <span className='absolute inset-1.5'/>
                                    {/*sr-only*/}
                                    <span className='sr-only'>view Profile</span>
                                    {/*h-8 w-8 rounded-full*/}
                                    <img className='h-8 w-8 rounded-full' src={user.imageUrl} alt="profile" />
                                </button>
                            </div>
                            {/*transition*/}

                                {/*absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none*/}
                                {isDropdownOpen && (
                                    <ul className='absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                                    {
                                        userNavigation.map((item) => (
                                            <li key={item.name}>
                                            <a 
                                              href={item.href} 
                                              className={classNames(
                                                location.pathname===item.href ? 'bg-gray-100 ' : '',
                                                'block px-4 py-2 text-sm text-gray-700'
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
                    {/* Mobile view*/}
                    
                </div>
            </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
