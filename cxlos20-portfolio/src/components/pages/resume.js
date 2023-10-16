import React from 'react';

const Resume = () => {
    return(
        <div className=''>
            
            <div classname=''>
                <header className=''>
                    <h1>Resume</h1>
                </header>
            </div>

            <div className="rbox">
                <div className='rbox1'>
                    {/* <a href="https://docs.google.com/document/d/1rD4-PZOt2kMmxeYXZWkA_-xmUc_kqJ9EUQkMeJQnB58/edit" download="Bautista_resume.pdf"> */}
                    {/* <a href="CxLos20-React-Portfolio/Bautistac_resume.pdf" download="Bautista_resume.pdf"> */}
                    {/* <a href="/Bautistac_resume.pdf" download="Bautistac_resume.pdf"> */}
                        <img className='resume' alt='resume' title='Download pdf' src={require(`./screenshots/Screenshot-114105.png`)}/>
                    {/* </a> */}
                </div>
                <div className='rbox1'>
                    {/* <a href="https://docs.google.com/document/d/1rD4-PZOt2kMmxeYXZWkA_-xmUc_kqJ9EUQkMeJQnB58/edit" download="Bautista_resume.pdf"> */}
                    {/* <a href="CxLos20-React-Portfolio/Bautistac_resume.pdf" download="Bautista_resume.pdf"> */}
                    {/* <a href="/Bautistac_resume.pdf" download="Bautista_resume.pdf">
                        <img className='resume' alt='resume' title='Download pdf' src={require(`./screenshots/Screenshot-154334.png`)}/>
                    </a> */}
                </div>
            </div>
        </div>
    );
};

export default Resume;
