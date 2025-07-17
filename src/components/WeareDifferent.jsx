import React from 'react'

const WeareDifferent = () => {
  return (
    <div className="DifferentFont"> 
      {/* Responsive grid for different screen sizes */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="flex items-start">
          <div className="border-l-4 border-[#B72BAE] pl-4">
            <h2 className="text-3xl font-normal leading-tight text-black">
              WE ARE <br />DIFFERENT
            </h2>
          </div>
        </div>

        {/* Stats grid with responsive columns */}
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-16">
          <div className="text-center">
            <div className="inline-flex items-center border-4 border-[#3BA9F4] px-8 py-4">
              <span className="text-[#3BA9F4] font-extrabold text-5xl leading-none">135k+</span>
            </div>
            <p className="mt-3 text-gray-500 text-sm">Students Graduated Since 1992</p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center border-4 border-[#B72BAE] px-8 py-4">
              <span className="text-[#B72BAE] font-extrabold text-5xl leading-none">160+</span>
            </div>
            <p className="mt-3 text-gray-500 text-sm">
              International Students From Over 160 <br />Countries
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center border-4 border-[#F9D03B] px-8 py-4">
              <span className="text-[#F9D03B] font-extrabold text-5xl leading-none">30</span>
            </div>
            <p className="mt-3 text-gray-500 text-sm">Years of Hands-On Programs</p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center border-4 border-[#3BA9F4] px-8 py-4">
              <span className="text-[#3BA9F4] font-extrabold text-5xl leading-none">8</span>
            </div>
            <p className="mt-3 text-gray-500 text-sm">Campuses and Locations Worldwide</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeareDifferent
