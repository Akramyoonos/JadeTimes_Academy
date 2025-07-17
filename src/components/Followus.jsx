import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

// Image imports from local assets
import followUs1 from '../assets/Images/Followus1.png';
import followUs2 from '../assets/Images/Followus2.jpeg';
import followUs3 from '../assets/Images/Followus3.jpeg';
import followUs4 from '../assets/Images/Followus4.jpeg';
import followUs5 from '../assets/Images/Followus5.jpeg';
import followUs6 from '../assets/Images/Followus6.png';
import followUs7 from '../assets/Images/Followus7.jpeg';
import followUs8 from '../assets/Images/Followus8.jpeg';
import followUs9 from '../assets/Images/Followus9.jpeg';
import followUs10 from '../assets/Images/Followus10.png';
import followUs11 from '../assets/Images/Followus11.png';
import followUs12 from '../assets/Images/Followus12.jpeg';

const followUsImages = [
  { src: followUs1, alt: 'Man walking towards bright orange light wearing NYFA shirt holding a camera' },
  { src: followUs2, alt: 'Colorful vibrant background with NYFA New York Film Academy text' },
  { src: followUs3, alt: 'Silhouette of woman holding camera in blue smoky background' },
  { src: followUs4, alt: 'Smiling woman wearing NYFA cap and headphones with camera' },
  { src: followUs5, alt: 'Woman in red shirt and beret holding film reel on pink background' },
  { src: followUs6, alt: 'Man in suit holding NYFA diploma on city street' },
  { src: followUs7, alt: 'Back of person with ring lights and official selection logo' },
  { src: followUs8, alt: 'Man sitting at table with books and wooden chair' },
  { src: followUs9, alt: 'Sunset sky over water with buildings' },
  { src: followUs10, alt: 'Couple kissing outdoors in wedding attire' },
  { src: followUs11, alt: 'Clay skull model with blue hand sculpture on wooden table' },
  { src: followUs12, alt: 'Two people wearing masks operating film camera in black and white' },
];

const FollowUsCard = ({ src, alt }) => (
  <div className="relative group">
    <img alt={alt} className="w-full h-auto object-cover" height="600" src={src} width="600" />
    <a className="absolute bottom-3 right-3 text-white text-[11px] font-normal flex items-center gap-1 bg-black bg-opacity-50 px-2 py-0.5 rounded" href="https://www.instagram.com/jadetimes_academy/" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faInstagram} className="text-[10px]" />
      Follow Us
    </a>
  </div>
);

const FollowUs = () => {
  return (
    <div className="FollowusFont">
      <div className="bg-white m-0 p-0">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="flex items-start gap-3 mb-8">
            <div className="border-l-4 border-[#9B1B6E] h-14"></div>
            <h1 className="text-black text-[22px] leading-[26px] font-normal tracking-normal">
              FOLLOW
              <br />
              US
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {followUsImages.map((image) => (
              <FollowUsCard key={image.src} src={image.src} alt={image.alt} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FollowUs;