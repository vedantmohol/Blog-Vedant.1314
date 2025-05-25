import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../redux/theme/themeSlice';
import { signoutSuccess } from '../redux/user/userSlice';

export default function Header() {
  const path = useLocation().pathname;
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const { theme } = useSelector((state) => state.theme);
  const [searchTerm, setSearchTerm] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  const handleSignout = async () => {
    try {
      const res = await fetch('/api/user/signout', {
        method: 'POST',
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  return (
    <nav className='border-b-2 flex flex-wrap items-center justify-between p-4'>
      <Link to="/" className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>V</span>
        Blog
      </Link>
      <form onSubmit={handleSubmit} className='hidden lg:inline'>
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="pl-4 pr-10 py-2 border rounded-md focus:outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <AiOutlineSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>
      </form>
      <button className='w-12 h-10 lg:hidden bg-gray-200 rounded-full flex items-center justify-center' type='button'>
        <AiOutlineSearch />
      </button>
      <div className="flex gap-2 md:order-2 items-center">
        <button
          className='w-12 h-10 mt-3 sm:inline bg-gray-200 rounded-full'
          onClick={() => dispatch(toggleTheme())}
        >
          {theme === 'light' ? <FaSun className='ml-4'/> : <FaMoon className='ml-4'/>}
        </button>

        {currentUser ? (
          <div className="relative">
            <img
              src={currentUser.profilePicture}
              alt="user"
              className="w-10 h-10 rounded-full cursor-pointer"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            />
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-50">
                <div className="p-3 border-b">
                  <p className="text-sm">@{currentUser.username}</p>
                  <p className="text-sm font-medium truncate">{currentUser.email}</p>
                </div>
                <Link to={'/dashboard?tab=profile'} className="block px-4 py-2 text-sm hover:bg-gray-100">Profile</Link>
                <button
                  onClick={handleSignout}
                  className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-gray-100"
                >
                  Sign out
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link to="/sign-in">
            <button className='mt-3 px-4 py-2 border border-purple-500 text-purple-500 rounded-md hover:bg-purple-50'>
              Sign In
            </button>
          </Link>
        )}

        <button
          className="sm:hidden ml-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {(isMenuOpen || window.innerWidth >= 640) && (
        <div className={`w-full mt-4 sm:mt-0 sm:flex sm:w-auto ${isMenuOpen ? 'block' : 'hidden'} sm:inline`}>
          <ul className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-sm font-medium">
            <li>
              <Link to="/" className={`${path === '/' ? 'text-blue-500' : 'text-gray-700'} hover:text-blue-700`}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className={`${path === '/about' ? 'text-blue-500' : 'text-gray-700'} hover:text-blue-700`}>
                About
              </Link>
            </li>
            <li>
              <Link to="/projects" className={`${path === '/projects' ? 'text-blue-500' : 'text-gray-700'} hover:text-blue-700`}>
                Projects
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
