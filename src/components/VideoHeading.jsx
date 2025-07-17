import React from 'react'
import PropTypes from 'prop-types'
import HeadingBackground from '../assets/images/HeadingBackground.png'

const VideoHeading = ({  title, subtitle, altText }) => {
  return (
    <div className="headingFont">
      <div className="relative w-full max-w-full h-[120px] sm:h-[160px] md:h-[200px] lg:h-[240px] xl:h-[280px] mx-auto flex items-center justify-center overflow-hidden">
        <img alt={altText} className="absolute inset-0 w-full h-full object-cover" decoding="async" height="280" loading="lazy" src={HeadingBackground} width="1920" />
        <div className="absolute inset-0 bg-green bg-opacity-30">
        </div>
        <div className="relative text-center text-yellow-400 px-4">
          <h1 className="text-[22px] sm:text-[28px] md:text-[36px] lg:text-[44px] xl:text-[52px] font-normal tracking-wide">
            {title}
          </h1>
          <div className="inline-block mt-4 border-t-4 border-l-4 border-[#5aa9f6] border-solid pt-3 pl-3">
            <p className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] font-light tracking-widest leading-5 sm:leading-6 md:leading-7">
              {subtitle}
            </p>
          </div>
        </div>
      </div>
      <div className="h-[20px] bg-black w-full">
      </div>
    </div>
  )
}

VideoHeading.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired
}

export default VideoHeading