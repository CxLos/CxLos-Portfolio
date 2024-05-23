import React from "react";

function Navigation ({ currentPage, handlePageChange }) {
    return (

        <div className="">

            <div className='navbar1'>
                <a href='#about' onClick={() => handlePageChange('About')}>
                <div className='carlos'>
                    <h1 >Carlos Bautista</h1>
                </div>
                </a>
               

                <div className='navbar2'>
                    
                    <ul className="">
                        {/* <li className="">
                            <a href="#home" 
                            // className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'} 
                            onClick={() => handlePageChange('Home')}>
                                Home
                            </a>
                        </li> */}
                        <li className="nav1">
                            <a href="#portfolio" 
                            // lassName={currentPage === 'About' ? 'nav-link active' : 'nav-link'} 
                            onClick={() => handlePageChange('Data')}>
                                Projects
                            </a>
                        </li>
                        <li className="nav2">
                            <a href="#about" 
                            // lassName={currentPage === 'About' ? 'nav-link active' : 'nav-link'} 
                            onClick={() => handlePageChange('About')}>
                                About
                            </a>
                        </li>
                        <li className="nav3">
                            <a href="#badges" 
                            // lassName={currentPage === 'About' ? 'nav-link active' : 'nav-link'} 
                            onClick={() => handlePageChange('Badge')}>
                                Badges
                            </a>
                        </li>
                        {/* <li className="nav4">
                            <a href="#apps" 
                            // className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'} 
                            onClick={() => handlePageChange('Apps')}>
                                Apps
                            </a>
                        </li> */}
                        {/* <li className="nav5">
                            <a href="#resume" 
                            // className=
                            // {currentPage === 'Resume' ? 'nav-link active' : 'nav-link'} 
                            onClick={() => handlePageChange('Resume')}>
                                Resume
                            </a>
                        </li> */}
                        {/* <li className="">
                            <a href="#contact" 
                            // className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'} 
                            onClick={() => handlePageChange('Contact')}>
                                Contact
                            </a>
                        </li> */}
                        <div>
                            <a>
                                
                            </a>
                        </div>
                    </ul>
                </div>
            </div>

            {/* <div>
                <footer>
                    <p>Footer</p>
                </footer>
            </div> */}
            
        </div>

    );
};

export default Navigation;