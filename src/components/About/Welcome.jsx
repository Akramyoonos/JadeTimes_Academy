import React from 'react';
import AboutWelcome from '../../assets/Images/AboutWelcome.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

const Welcome = () => {
  const videoUrl = 'https://www.youtube.com/watch?v=FKz0Fnk_TRM';
  const videoThumbnail = 'https://img.youtube.com/vi/FKz0Fnk_TRM/maxresdefault.jpg';

  const handlePlayClick = () => {
    window.open(videoUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="WelcomeFont">
      <div className="bg-white text-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            <main className="flex-1">
              <div className="flex items-center gap-4 mb-8 sm:mb-10">
                <span className="inline-block w-1.5 h-10 sm:h-12 bg-[#3a9bdc]"></span>
                <h1 className="text-xl sm:text-2xl md:text-3xl font-normal text-gray-900">
                  WELCOME TO NEW YORK FILM ACADEMY
                </h1>
              </div>

              <article className="mb-12 flex flex-col sm:flex-row gap-6">
                <figure className="flex-shrink-0 relative w-32 sm:w-36 md:w-40 mx-auto sm:mx-0">
                  <img
                    alt="Black and white photo of Jerry Sherlock holding a film camera, captioned Jerry Sherlock Founder"
                    className="w-full h-auto object-cover rounded"
                    src={AboutWelcome}
                  />
                  <figcaption className="sr-only">Jerry Sherlock Founder</figcaption>
                </figure>
                <div className="text-sm sm:text-base text-gray-700 leading-relaxed space-y-4">
                  <p>
                    New York Film Academy, commonly known as NYFA, was founded in 1992 by Jerry Sherlock, executive producer of
                    <em> The Hunt for Red October (1990),</em>
                    as an alternative to traditional university-based film schools. Designed to demystify and democratize the highly competitive filmmaking industry, NYFA was established to provide accessibility to education in the art of filmmaking. Today, we continue to give a voice to students from all backgrounds and experiences, teaching them how to tell captivating stories through film, media, and the performing arts through a hands-on, project-based approach.
                  </p>
                  <p>
                    From their first day at NYFA, students receive the practical training and mentorship required to develop creative and technical expertise, as well as communication, collaboration, and critical thinking skills. Students spend a majority of their time creating projects, learning how to navigate the creative process from start-to-finish. By providing them with an ample amount of experience in their area of study, students can learn and master the framework to continue to create and innovate. Through this rigorous, but rewarding approach, students are given the tools, resources, and support to build their confidence and grow as an artist.
                  </p>
                </div>
              </article>

              <figure className="mb-12 relative">
                <img
                  alt="Collage of film and photography images with large text overlay reading New York Film Academy and a white circular play button in the center"
                  className="w-full h-auto object-cover rounded-lg"
                  src={videoThumbnail}
                />
                <button
                  aria-label="Play video"
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-white flex items-center justify-center text-white text-2xl cursor-pointer bg-black/30 hover:bg-black/50 transition-colors"
                  onClick={handlePlayClick}
                >
                  <FontAwesomeIcon icon={faPlay} />
                </button>
              </figure>

              <blockquote className="border-2 border-[#b32db6] p-6 text-base sm:text-lg leading-relaxed relative rounded-lg">
                <FontAwesomeIcon icon={faQuoteLeft} className="text-[#b32db6] absolute top-4 left-4 text-2xl sm:text-3xl md:text-4xl opacity-20" aria-hidden="true" />
                <p className="pl-8 sm:pl-12">
                  “Jerry was inspired by the idea that to learn how to make movies, one must actually make movies. He brought together a group of filmmakers and educators from the around the world, and we designed a truly unique film school with a new hands-on, immersive approach. Through this experiential learning method, students write, direct, shoot, and edit their own original films, while also serving as crewmembers on their fellow classmates’ films, gaining extensive on-set experience. This learn-by-doing philosophy is applied to all of our areas of study.”
                </p>
                <footer className="mt-4 text-sm sm:text-base text-gray-900 pl-8 sm:pl-12">
                  <strong>Michael J. Young</strong>
                  <span className="block sm:inline sm:ml-2 text-gray-600 font-normal">President of NYFA</span>
                </footer>
              </blockquote>
            </main>

            <aside className="w-full lg:w-80 flex-shrink-0">
              <div className="bg-[#f5f5f5] border border-gray-200 rounded-lg">
                <h2 className="font-bold text-sm sm:text-base px-6 py-4 border-b border-gray-300 uppercase tracking-wider">
                  RELATED LINKS
                </h2>
                <nav className="flex flex-col text-sm sm:text-base font-semibold text-gray-900">
                  <a className="px-6 py-4 border-b border-gray-300 hover:underline focus:underline focus:outline-none" href="#">
                    MISSION AND PURPOSE
                  </a>
                  <a className="px-6 py-4 border-b border-gray-300 hover:underline focus:underline focus:outline-none" href="#">
                    DEGREE PROGRAMS
                  </a>
                  <a className="px-6 py-4 hover:underline focus:underline focus:outline-none" href="#">
                    EXPLORE OUR PROGRAMS
                  </a>
                </nav>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
