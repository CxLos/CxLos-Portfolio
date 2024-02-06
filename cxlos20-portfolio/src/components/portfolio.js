import React, { useState } from 'react';
import Navigation from './navigation';
import Home from './pages/home'
import Badge from './pages/badge'
import About from './pages/about'
import Data from './pages/data'
import Apps from './pages/apps';
import Resume from './pages/resume'
import Contact from './pages/contact'
import Footer from './pages/footer'

const Portfolio = () => {

    const [currentPage, setCurrentPage] = useState('About');
    
    const renderPage = () => {
      if (currentPage === 'Home') {
        return <Home />;
      }
      if (currentPage === 'About') {
        return <About />;
      }
      if (currentPage === 'Badge') {
        return <Badge />;
      }
      if (currentPage === 'Data') {
        return <Data />;
      }
      if (currentPage === 'Apps') {
        return <Apps />;
      }
      if (currentPage === 'Resume') {
        return <Resume />;
      }
      return <Contact />;

    };
  
    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
          <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
          {renderPage()}
{/* 
          <footer className='foot'>

            <div className='links'>
              <a href='https://github.com/CxLos'>
                GitHub
              </a>
            </div>
            <div className='links'>
              <a href='https://www.linkedin.com/in/carlos-bautista-5a8388115/'>
                LinkedIn
              </a>
            </div>

          </footer> */}

          <Footer />
          
        </div>
        
      );

    // return(
    //     <div className= 'carlos'>
    //         <h1>Carlos Bautista</h1>
    //     </div>
    // );
};

export default Portfolio;

// export default function Portfolio() {

//     return (

//         <div>
//             <h1>Portfolio</h1>
//             <h1>Portfolio</h1>
//             <h1>Portfolio</h1>
//             <h1>Portfolio</h1>
//             <h1>Portfolio</h1>
//             <h1>Portfolio</h1>
//         </div>
//     )
// }