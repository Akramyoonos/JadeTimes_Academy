import React from 'react'

const Footer = () => {
  return (
    <div className="FooterFont">
      <div class="bg-black text-white">  
      <div className="max-w-screen-xl mx-auto">
        {/* <!-- Top nav with 3 links --> */}
        <div className="hidden sm:flex border-b border-gray-900 text-xs font-semibold tracking-widest text-white uppercase">
          <a className="flex-1 border-r border-gray-900 py-4 px-6 flex items-center justify-center gap-2 hover:text-sky-500 transition" href="#">
            REQUEST INFO
            <i className="fas fa-arrow-up-right text-sky-500">
            </i>
          </a>
          <a className="flex-1 border-r border-gray-900 py-4 px-6 flex items-center justify-center gap-2 hover:text-yellow-400 transition" href="#">
            APPLY NOW
            <i className="fas fa-arrow-up-right text-yellow-400">
            </i>
          </a>
          <a className="flex-1 py-4 px-6 flex items-center justify-center gap-2 hover:text-purple-600 transition" href="#">
            VISIT US
            <i className="fas fa-arrow-up-right text-purple-600">
            </i>
          </a>
        </div>
        {/* <!-- Main footer content --> */}
        <footer className="pt-10 pb-20 px-6 sm:px-10">
          {/* <!-- Logo --> */}
          <div className="mb-6">
            <img alt="New York Film Academy logo in white on black background" className="h-20 w-auto" height="40" src="src/assets/images/Logo.avif" width="150" />
          </div>
          {/* <!-- Navigation links --> */}
          <nav className="mb-6 flex flex-wrap gap-6 text-xs font-semibold tracking-widest uppercase">
            <a className="hover:underline" href="#">
              NYFA BROCHURES
            </a>
            <a className="hover:underline" href="#">
              STORE
            </a>
            <a className="hover:underline" href="#">
              FACULTY
            </a>
            <a className="hover:underline" href="#">
              ALUM NETWORK
            </a>
            <a className="hover:underline" href="#">
              JOBS
            </a>
            <a className="hover:underline" href="#">
              TEACH-OUT POLICY
            </a>
          </nav>
          {/* <!-- Social icons --> */}
          <div className="flex gap-6 text-gray-600 text-lg mb-16">
            <a aria-label="Instagram" className="hover:text-white" href="#">
              <i className="fab fa-instagram">
              </i>
            </a>
            <a aria-label="Facebook" className="hover:text-white" href="#">
              <i className="fab fa-facebook-f">
              </i>
            </a>
            <a aria-label="X (Twitter)" className="hover:text-white" href="#">
              <i className="fab fa-x-twitter">
              </i>
            </a>
            <a aria-label="YouTube" className="hover:text-white" href="#">
              <i className="fab fa-youtube">
              </i>
            </a>
            <a aria-label="Snapchat" className="hover:text-white" href="#">
              <i className="fab fa-snapchat-ghost">
              </i>
            </a>
            <a aria-label="Pinterest" className="hover:text-white" href="#">
              <i className="fab fa-pinterest-p">
              </i>
            </a>
            <a aria-label="LinkedIn" className="hover:text-gray-600" href="#">
              <i className="fab fa-linkedin-in">
              </i>
            </a>
          </div>
          <hr className="border-gray-900 mb-10" />
          {/* <!-- Bottom text and language links --> */}
          <div className="flex flex-col sm:flex-row sm:justify-between text-gray-500 text-xs leading-relaxed gap-6 sm:gap-0">
            <div className="max-w-3xl space-y-3">
              <p>
                Copyright © 2025 New York Film Academy •
                <a className="hover:underline text-gray-400" href="#">
                  Privacy Policy
                </a>
              </p>
              <p>
                All programs and workshops are solely owned and operated by the New York Film Academy and are not affiliated with Universal Studios, or Harvard University. GI Bill® is a registered trademark of the U.S. Department of Veterans Affairs (VA). More information about education benefits offered by VA is available at the official U.S. government website at
                <a className="hover:underline text-gray-400" href="http://www.benefits.va.gov/gibill" rel="noopener noreferrer" target="_blank">
                  http://www.benefits.va.gov/gibill
                </a>
                . Not all programs are offered at all locations.
              </p>
              <p>
                BPPE: The New York Film Academy is approved to operate by the California Bureau for Private Postsecondary Education (BPPE) “Approval” or “approval to operate” means that the institution is compliant with the minimum standards contained in the California Private Postsecondary Education Act of 2009 (as amended) and Division 7.5 of Title 5 of the California Code of Education.
              </p>
              <p>
                <strong>
                  <a className="hover:underline text-gray-400" href="#">
                    Click here
                  </a>
                </strong>
                to access the Bureau for Private Postsecondary Education website.
                <br />
                <strong>
                  <a className="hover:underline text-gray-400" href="#">
                    Click here
                  </a>
                </strong>
                to download New York Film Academy’s 2023 School Performance Fact Sheet for the Los Angeles Campus.
                <br />
                <strong>
                  <a className="hover:underline text-gray-400" href="#">
                    Click here
                  </a>
                </strong>
                to download New York Film Academy – BPPE 2023 Annual Report.
              </p>
            </div>
            <div className="flex flex-wrap gap-6 justify-end text-gray-400 text-xs font-semibold tracking-widest uppercase">
              <a className="hover:text-white" href="#">
                RU
              </a>
              <a className="hover:text-white" href="#">
                ES
              </a>
              <a className="hover:text-white" href="#">
                AR
              </a>
              <a className="hover:text-white" href="#">
                IT
              </a>
              <a className="hover:text-white" href="#">
                PT
              </a>
              <a className="hover:text-white" href="#">
                JP
              </a>
              <a className="hover:text-white" href="#">
                KR
              </a>
              <a className="hover:text-white" href="#">
                CN
              </a>
            </div>
          </div>
        </footer>
      </div>
      </div>
    </div>
  )
}

export default Footer
