import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faGlobeAmericas, faChevronDown, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import '../index.css';
import logo from '../assets/images/Logo.avif';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="headerFont bg-gray-900 text-white">
      {/* <!-- Top bar --> */}
      <div className="border-b border-gray-700 text-xs">
        <div className="container mx-auto flex flex-wrap items-center justify-between px-4 py-2">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-gray-400">
            <span className="hidden lg:inline">QUICK LINKS FOR</span>
            <button className="font-semibold border-r border-gray-700 pr-3 hover:text-white">CURRENT STUDENTS</button>
            <button className="font-semibold border-r border-gray-700 pr-3 hover:text-white">PARENTS</button>
            <button className="text-yellow-500 font-semibold border-r border-gray-700 pr-3">
              *UPCOMING ONLINE INFO SESSIONS*
            </button>
            <button className="text-blue-500 font-semibold">BECOME A NYFA MEMBER</button>
          </div>
          <div className="flex items-center gap-6 text-gray-400 text-xs whitespace-nowrap">
            <span className="text-white font-normal">1-800-611-FILM</span>
            <button aria-label="Search" className="hover:text-white">
              <FontAwesomeIcon icon={faSearch} />
            </button>
            <button className="flex items-center space-x-1 hover:text-white">
              <FontAwesomeIcon icon={faGlobeAmericas} />
              <span>ENGLISH</span>
              <FontAwesomeIcon icon={faChevronDown} size="xs" />
            </button>
          </div>
        </div>
      </div>

      {/* <!-- Main navigation --> */}
      <nav className="relative border-b border-gray-700">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <div className="flex items-center gap-2">
            <img alt="NYFA logo" className="h-10 w-auto" src={logo} />
          </div>

          {/* <!-- Desktop Menu --> */}
          <ul className="hidden lg:flex gap-6 text-white text-sm font-normal items-center">
            <li><a className="hover:underline" href="#">ACADEMICS</a></li>
            <li><a className="hover:underline" href="#">ADMISSIONS &amp; FINANCES</a></li>
            <li><a className="hover:underline" href="#">CAMPUSES</a></li>
            <li><a className="hover:underline" href="#">DISCOVER NYFA</a></li>
            <li><a className="hover:underline" href="#">ALUMNI</a></li>
            <li><a className="hover:underline" href="#">YOUTH PROGRAMS</a></li>
          </ul>
          
          <div className="hidden lg:flex gap-4">
            {/* Add desktop-only buttons here if needed */}
          </div>

          {/* <!-- Mobile Menu Button --> */}
          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="lg" />
            </button>
          </div>
        </div>

        {/* <!-- Mobile Menu --> */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-gray-800 z-20">
            <ul className="flex flex-col gap-4 text-white text-sm font-normal p-4">
              <li><a className="hover:underline" href="#">ACADEMICS</a></li>
              <li><a className="hover:underline" href="#">ADMISSIONS &amp; FINANCES</a></li>
              <li><a className="hover:underline" href="#">CAMPUSES</a></li>
              <li><a className="hover:underline" href="#">DISCOVER NYFA</a></li>
              <li><a className="hover:underline" href="#">ALUMNI</a></li>
              <li><a className="hover:underline" href="#">YOUTH PROGRAMS</a></li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Header;
