import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const SearchProgramsBy = () => {
  return (
    <div className="SearchbyFont">
      <div className="flex flex-col md:flex-row items-center border-b border-gray-200">
        <div className="flex-grow px-6 py-4 text-black text-base font-normal whitespace-nowrap w-full md:w-auto">
          Search Programs by
        </div>
        <div className="w-full md:w-auto flex flex-col md:flex-row border-t md:border-t-0 md:border-l border-gray-200 divide-y md:divide-y-0 md:divide-x divide-gray-200">
          <button
            className="flex items-center justify-center w-full md:w-auto px-6 py-4 text-xs font-semibold text-gray-600 tracking-widest uppercase whitespace-nowrap hover:text-black"
            aria-label="All Disciplines"
          >
            ALL DISCIPLINES
            <FontAwesomeIcon icon={faChevronDown} className="ml-2 text-gray-600" />
          </button>
          <button
            className="flex items-center justify-center w-full md:w-auto px-6 py-4 text-xs font-semibold text-gray-600 tracking-widest uppercase whitespace-nowrap hover:text-black"
            aria-label="All Programs"
          >
            ALL PROGRAMS
            <FontAwesomeIcon icon={faChevronDown} className="ml-2 text-gray-600" />
          </button>
          <button
            className="flex items-center justify-center w-full md:w-auto px-6 py-4 text-xs font-semibold text-gray-600 tracking-widest uppercase whitespace-nowrap hover:text-black"
            aria-label="All Locations"
          >
            ALL LOCATIONS
            <FontAwesomeIcon icon={faChevronDown} className="ml-2 text-gray-600" />
          </button>
        </div>
        <button
          className="w-full md:w-auto px-8 py-4 bg-sky-500 hover:bg-sky-600 text-black text-xs font-semibold tracking-widest uppercase"
          aria-label="Search"
        >
          SEARCH
        </button>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-lg font-normal text-black mb-4">
          The Original Hands-on Film, Media, and Performing Arts School
        </h2>
        <p className="text-gray-600 text-base font-normal max-w-3xl">
          New York Film Academy was founded on the philosophy that “learning by
          doing” combined with best industry practices is more valuable than years
          of theoretical study for film, media, and performing arts students.
          This educational model allows students to achieve more in less time than
          at other institutions.
        </p>
      </div>
    </div>
  )
}

export default SearchProgramsBy
