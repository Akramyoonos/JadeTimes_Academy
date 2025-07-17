import React, { useState } from 'react';
import studentImage1 from '../assets/Images/our-students-01-948x815-1-768x660.jpeg';
import studentImage2 from '../assets/Images/our-students-02-948x815-1-768x660.jpeg';
import studentImage3 from '../assets/Images/our-students-03-948x815-1-768x660.jpeg';
import studentImage4 from '../assets/Images/our-students-04-948x815--768x660.jpeg';

// Sample data for students. In a real app, this would likely come from a CMS or API.
const studentsData = [
  {
    name: 'Mayté Losada',
    program: 'Acting for Film',
    quote: 'Since enrolling in NYFA’s BFA Acting for Film degree, my classes, peers and professors have opened up a new world for me that I have come to appreciate and am proud to be part. I cannot wait to use all the techniques and tools I’ve learned to continue my journey into the film industry.',
    imageUrl: studentImage1,
    altText: 'Portrait of Mayté Losada, a student at the film academy.',
  },
  {
    name: 'John Doe',
    program: 'Filmmaking',
    quote: 'The hands-on experience I gained here is invaluable. The instructors are industry professionals who provide real-world insights that you can\'t get from a textbook.',
    imageUrl: studentImage2, // Reusing image for demonstration
    altText: 'Portrait of John Doe, a student at the film academy.',
  },
  {
    name: 'Jane Smith',
    program: 'Photography',
    quote: 'I discovered my unique visual style here. The creative freedom and supportive community allowed me to push my boundaries and create work I\'m truly proud of.',
    imageUrl: studentImage3, // Reusing image for demonstration
    altText: 'Portrait of Jane Smith, a student at the film academy.',
  },
  {
    name: 'Alex Johnson',
    program: '3D Animation & VFX',
    quote: 'From character design to final render, the curriculum covered everything. I left with a professional-level portfolio that got me hired before I even graduated.',
    imageUrl: studentImage4, // Reusing image for demonstration
    altText: 'Portrait of Alex Johnson, a student at the film academy.',
  },
];

const OurStudents = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentStudent = studentsData[currentIndex];

  return (
    <div className="StudentFont"> 
      <div className="max-w-screen-xl mx-auto flex flex-col min-h-screen bg-black text-white">
        <section className="flex flex-col md:flex-row items-center md:items-start justify-center flex-1 px-4 py-12 gap-8 md:px-8 md:gap-16 lg:px-12 lg:py-20 lg:gap-20">
          <div className="flex-shrink-0 max-w-[400px] md:max-w-[480px] w-full">
            <img 
              alt={currentStudent.altText} 
              className="w-full h-auto object-cover" 
              height="600" 
              src={currentStudent.imageUrl} 
              width="480" 
            />
          </div>
          <div className="max-w-xl flex flex-col justify-start w-full">
            <h2 className="text-3xl md:text-4xl font-normal leading-tight mb-8 pl-4 border-l-4 border-purple-600">
              OUR
              <br />
              STUDENTS
            </h2>
            <blockquote className="relative">
              <p className="text-base md:text-lg font-normal leading-relaxed mb-6">
                {currentStudent.quote}
              </p>
            </blockquote>
            <p className="font-semibold mb-1">
              {currentStudent.name}
            </p>
            <p className="text-gray-400 uppercase tracking-widest text-xs">
              {currentStudent.program}
            </p>
          </div>
        </section>
        
        <nav aria-label="Pagination dots" className="flex justify-center md:justify-end gap-4 mb-6 md:mb-10 px-6 md:px-12">
          {studentsData.map((_, index) => (
            <button 
              key={index}
              onClick={() => setCurrentIndex(index)}
              aria-current={currentIndex === index} 
              className={`w-3 h-3 rounded-full focus:outline-none focus:ring-2 focus:ring-sky-400 transition-all duration-300 ${
                currentIndex === index ? 'w-4 h-4 bg-sky-500' : 'bg-sky-700 opacity-50'
              }`}
            >
              <span className="sr-only">Go to slide {index + 1}</span>
            </button>
          ))}
        </nav>

        <footer className="flex border-t border-gray-700 bg-gray-800 text-white text-center text-sm md:text-base">
          <a className="flex-1 border-r border-gray-700 py-4 px-6 hover:bg-gray-900 transition" href="#">
            Testimonials
          </a>
          <a className="flex-1 border-r border-gray-700 py-4 px-6 hover:bg-gray-900 transition" href="#">
            Diversity
          </a>
          <a className="flex-1 border-r border-gray-700 py-4 px-6 hover:bg-gray-900 transition" href="#">
            Showcase
          </a>
          <a className="flex-1 py-4 px-6 hover:bg-gray-900 transition" href="#">
            Success Stories
          </a>
        </footer>
      </div>
    </div>
  );
};

export default OurStudents;