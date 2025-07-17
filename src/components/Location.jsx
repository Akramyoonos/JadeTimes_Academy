import React from 'react';
import location from '../assets/Images/bg-location.jpg';

// Data for locations, grouped by region
const locations = {
  "North America": [
    { name: "New York City", type: "Campus" },
    { name: "Los Angeles", type: "Campus" },
    { name: "Harvard University", type: "Location" },
  ],
  "Europe": [
    { name: "Florence, Italy", type: "Campus" },
    { name: "Paris, France", type: "Location" },
  ],
  "Asia-Pacific": [
    { name: "Beijing, China", type: "Location" },
  ],
};

// Component to render a single location item
const LocationItem = ({ name, type }) => (
  <div className="flex justify-between border-b border-gray-300 pb-2">
    <p className="text-base font-normal">{name}</p>
    <p className="text-sm font-light text-gray-400">{type}</p>
  </div>
);

// Component to render a region and its locations
const LocationRegion = ({ region, places }) => (
  <div className="flex flex-col gap-4 max-w-xs">
    <h2 className="text-sm font-semibold tracking-widest uppercase">{region}</h2>
    {places.map((place) => (
      <LocationItem key={place.name} name={place.name} type={place.type} />
    ))}
  </div>
);

const Location = () => {
  return (
    <div className="LocationFont">
      <div className="relative bg-white min-h-screen">
        <img
          alt="World map in light gray with location dots on North America, Europe, and Asia-Pacific regions"
          className="w-full h-auto object-cover"
          height="600"
          src={location}
          width="1920"
        />
        <div className="absolute top-1/2 left-10 -translate-y-1/2 flex flex-col gap-2 max-w-xs">
          <div className="border-l-4 border-purple-700 pl-3">
            <h1 className="text-4xl font-normal leading-tight text-black">
              CAMPUSES &amp;
              <br />
              LOCATIONS
            </h1>
          </div>
        </div>
        <div className="absolute bottom-20 left-10 right-10 max-w-7xl mx-auto flex flex-col sm:flex-row justify-between gap-10 text-black">
          {Object.entries(locations).map(([region, places]) => (
            <LocationRegion key={region} region={region} places={places} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Location;