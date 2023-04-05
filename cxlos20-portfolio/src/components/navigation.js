import React from "react";

function Navigation ({ currentPage, handlePageChange }) {
    return (

        <div className="">

            <div className='navbar1'>
            
                <div className='carlos'>
                    <h1>Carlos Bautista</h1>
                </div>

                <div className='navbar2'>
                    
                    <ul className="">
                        <li className="">
                            <a href="#home" className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'} onClick={() => handlePageChange('Home')}>
                                Home
                            </a>
                        </li>
                        <li className="">
                            <a href="#about" className={currentPage === 'About' ? 'nav-link active' : 'nav-link'} onClick={() => handlePageChange('About')}>
                                About
                            </a>
                        </li>
                        <li className="">
                            <a href="#projects" className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'} onClick={() => handlePageChange('Projects')}>
                                Projects
                            </a>
                        </li>
                        <li className="">
                            <a href="#resume" className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'} onClick={() => handlePageChange('Resume')}>
                                Resume
                            </a>
                        </li>
                        <li className="">
                            <a href="#contact" className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'} onClick={() => handlePageChange('Contact')}>
                                Contact
                            </a>
                        </li>
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