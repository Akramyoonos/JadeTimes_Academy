import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const FeaturedContent = () => {
  return (
    <div className="bg-white font-sans">
      <div className="max-w-full overflow-x-hidden">
        <div className="flex items-center justify-between px-8 pt-10 pb-6">
          <div className="flex items-center space-x-4">
            <div className="w-1.5 h-14 bg-yellow-400"></div>
            <h2 className="text-black text-[28px] leading-[34px] font-normal tracking-tight">
              FEATURED
              <br />
              CONTENT
            </h2>
          </div>
          <div className="flex space-x-4">
            <button aria-label="Previous" className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 hover:bg-gray-100">
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button aria-label="Next" className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 hover:bg-gray-100">
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>
        <div className="flex space-x-6 overflow-x-auto no-scrollbar px-8 pb-10" role="list">
          <article className="relative flex-shrink w-[1500px] h-[600px] bg-black text-white" role="listitem">
            <img
              alt="Three people dressed in period clothing at a ball, two facing the camera smiling, one with back turned"
              className="w-full h-full object-cover"
              height="400"
              src="https://storage.googleapis.com/a1aa/image/28313d32-d1ae-41ca-05d4-5dfe75cf5b0d.jpg"
              width="900"
            />
            <div className="absolute bottom-6 left-6 right-6 bg-gradient-to-t from-black/80 to-transparent p-4">
              <h3 className="uppercase text-xs font-semibold tracking-widest mb-1">
                NYFA ALUM MASALI BADUZA STARS IN SURPRISE ‘BRIDGERTON’ ROLE
              </h3>
              <p className="text-sm leading-5 font-normal max-w-[600px]">
                The newest member of the ‘ton? NYFA AFA in Acting for Film alum Masali Baduza!
              </p>
              <button
                aria-label="Read more"
                className="absolute bottom-6 right-6 w-10 h-10 rounded-full border border-blue-500 text-blue-500 flex items-center justify-center hover:bg-blue-500 hover:text-white transition"
              >
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </button>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default FeaturedContent;