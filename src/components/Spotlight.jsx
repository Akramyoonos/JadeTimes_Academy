import React from 'react'

const Spotlight = () => {
  return (
     <div class="bg-white font-sans text-black"> 
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20">
        {/* <!-- Header --> */}
        <div className="mb-10 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
          <h1 className="text-2xl sm:text-3xl font-normal leading-tight">
            <span className="inline-block border-l-4 border-[#b52ea0] pl-2">
              SPOTLIGHT
            </span>
            <br />
            <span>
              NYFA
            </span>
          </h1>
        </div>
        {/* <!-- Top row cards --> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {/* <!-- Card 1 --> */}
          <div>
            <img alt="Group of people filming a scene with boom mic and lights in blue lighting" className="w-full object-cover" height="300" src="https://storage.googleapis.com/a1aa/image/a06f90fb-5d88-4316-cb3e-07d66419cdbc.jpg" width="400" />
            <h2 className="mt-4 text-xs tracking-widest-2 font-semibold uppercase">
              OPEN HOUSE &amp; LIVE ONLINE VIRTUAL EVENTS
            </h2>
            <p className="mt-1 text-xs text-gray-600 leading-relaxed">
              NYFA holds monthly open houses as well as a number of online virtual info sessions and events.
            </p>
          </div>
          {/* <!-- Card 2 --> */}
          <div>
            <img alt="Young girl smiling looking through a video camera indoors" className="w-full object-cover" height="300" src="https://storage.googleapis.com/a1aa/image/01087ece-c667-4691-4507-07f9e3a21592.jpg" width="400" />
            <h2 className="mt-4 text-xs tracking-widest-2 font-semibold uppercase">
              SIGN UP FOR SUMMER CAMP!
            </h2>
            <p className="mt-1 text-xs text-gray-600 leading-relaxed">
              NYFA has in-person and online summer camps and classNamees for teens ages 14-17 and kids 10-13. Camps are offered in NY, LA, Miami, Harvard, Florence, Paris, and online. Sign up your aspiring youth filmmaker, performer, or visual storyteller today!
            </p>
          </div>
          {/* <!-- Card 3 --> */}
          <div>
            <img alt="NYFA logo text in black on yellow geometric background" className="w-full object-cover" height="300" src="https://storage.googleapis.com/a1aa/image/f936276e-b815-46de-6c18-3862281086ef.jpg" width="400" />
            <h2 className="mt-4 text-xs tracking-widest-2 font-semibold uppercase">
              EXPLORE MORE AS A NYFA MEMBER! JOIN TODAY!
            </h2>
            <p className="mt-1 text-xs text-gray-600 leading-relaxed">
              Join now for $50! NYFA Membership opens the door to unique Film, Media, and Performing Arts experiences including masterclassNamees, discounts, and access to live online guest speaker events.
            </p>
          </div>
          {/* <!-- Card 4 --> */}
          <div>
            <img alt="Person wearing NYFA black hoodie and holding white tote bag with NYFA logo" className="w-full object-cover" height="300" src="https://storage.googleapis.com/a1aa/image/ef860120-b246-42df-7ea5-9cd1ecf3277d.jpg" width="400" />
            <h2 className="mt-4 text-xs tracking-widest-2 font-semibold uppercase">
              SHOP THE NEW ONLINE STORE
            </h2>
            <p className="mt-1 text-xs text-gray-600 leading-relaxed">
              Shop the NEW NYFA Online Store for a line of merchandise, apparel, and more.
            </p>
          </div>
        </div>
        {/* <!-- Carousel controls (centered) --> */}
        <div className="flex justify-center items-center mb-8 space-x-4">
          <button aria-label="Previous" className="text-gray-600 hover:text-gray-900">
            <i className="fas fa-chevron-left">
            </i>
          </button>
          <button aria-label="Next" className="text-gray-600 hover:text-gray-900">
            <i className="fas fa-chevron-right">
            </i>
          </button>
          <div className="w-40 h-1 bg-blue-300 rounded-full">
          </div>
        </div>
        {/* <!-- Bottom grid images with text overlay --> */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          {/* <!-- Degree Programs --> */}
          <div className="relative group cursor-pointer">
            <img alt="Group of people filming inside a dimly lit industrial space" className="w-full h-[250px] object-cover" height="250" src="https://storage.googleapis.com/a1aa/image/5f3a0657-344a-43e1-70a6-38bebbac79b9.jpg" width="400" />
            <div className="absolute bottom-4 left-4 text-white text-xs tracking-widest-2 font-light leading-snug">
              DEGREE
              <br />
              PROGRAMS
            </div>
            <div aria-hidden="true" className="absolute bottom-4 right-4 text-blue-400 text-lg group-hover:text-blue-600">
              <i className="fas fa-arrow-right">
              </i>
            </div>
          </div>
          {/* <!-- Certificate Programs --> */}
          <div className="relative group cursor-pointer">
            <img alt="Two people filming with camera outdoors in urban setting" className="w-full h-[250px] object-cover" height="250" src="https://storage.googleapis.com/a1aa/image/a0cc8d93-0c59-40cb-c032-f267cf32b8ca.jpg" width="400" />
            <div className="absolute bottom-4 left-4 text-white text-xs tracking-widest-2 font-light leading-snug">
              CERTIFICATE
              <br />
              PROGRAMS
            </div>
            <div aria-hidden="true" className="absolute bottom-4 right-4 text-blue-400 text-lg group-hover:text-blue-600">
              <i className="fas fa-arrow-right">
              </i>
            </div>
          </div>
          {/* <!-- Short-Term Workshops --> */}
          <div className="relative group cursor-pointer">
            <img alt="Group of people outdoors with NYFA shirts and filming equipment" className="w-full h-[250px] object-cover" height="250" src="https://storage.googleapis.com/a1aa/image/6a37fdf1-21bf-46ea-ca28-edd668c999cf.jpg" width="400" />
            <div className="absolute bottom-4 left-4 text-white text-xs tracking-widest-2 font-light leading-snug">
              SHORT-TERM
              <br />
              WORKSHOPS
            </div>
            <div aria-hidden="true" className="absolute bottom-4 right-4 text-blue-400 text-lg group-hover:text-blue-600">
              <i className="fas fa-arrow-right">
              </i>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          {/* <!-- Youth Programs --> */}
          <div className="relative group cursor-pointer">
            <img alt="Group of smiling young people outdoors posing for a photo" className="w-full h-[250px] object-cover" height="250" src="https://storage.googleapis.com/a1aa/image/1f947644-fc25-48ec-06b2-cc131568ddfc.jpg" width="600" />
            <div className="absolute bottom-4 left-4 text-white text-xs tracking-widest-2 font-light leading-snug">
              YOUTH
              <br />
              PROGRAMS
            </div>
            <div aria-hidden="true" className="absolute bottom-4 right-4 text-blue-400 text-lg group-hover:text-blue-600">
              <i className="fas fa-arrow-right">
              </i>
            </div>
          </div>
          {/* <!-- Study Abroad with NYFA --> */}
          <div className="relative group cursor-pointer">
            <img alt="Woman filming with camera in front of historic cathedral building" className="w-full h-[250px] object-cover" height="250" src="https://storage.googleapis.com/a1aa/image/85c065c8-2085-473f-f640-133d8735a3fd.jpg" width="600" />
            <div className="absolute bottom-4 left-4 text-white text-xs tracking-widest-2 font-light leading-snug">
              STUDY ABROAD
              <br />
              WITH NYFA
            </div>
            <div aria-hidden="true" className="absolute bottom-4 right-4 text-blue-400 text-lg group-hover:text-blue-600">
              <i className="fas fa-arrow-right">
              </i>
            </div>
          </div>
        </div>
        {/* <!-- Online Programs full width --> */}
        <div className="relative group cursor-pointer">
          <img alt="Close up of hands typing on laptop keyboard with coffee cup nearby" className="w-full h-[300px] object-cover" height="300" src="https://storage.googleapis.com/a1aa/image/1b88768f-ae53-4f55-a27e-2ade52eb01c8.jpg" width="1280" />
          <div className="absolute bottom-6 left-6 text-white text-xs tracking-widest-2 font-light leading-snug">
            ONLINE PROGRAMS
          </div>
          <div aria-hidden="true" className="absolute bottom-6 right-6 text-blue-400 text-lg group-hover:text-blue-600">
            <i className="fas fa-arrow-right">
            </i>
          </div>
        </div>
      </div>
  </div>
  )
}

export default Spotlight
