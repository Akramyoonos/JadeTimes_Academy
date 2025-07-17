import React from 'react'
import Header from './components/Header.jsx'
import Home_page from './pages/Home_page.jsx'
import Footer from './components/Footer.jsx'
import About_page from './pages/About_page.jsx'


function App() {

  return (
    <>
      <Header />
      <div>
        <About_page />
      </div>
      <Footer />
    </>
  )
}

export default App
