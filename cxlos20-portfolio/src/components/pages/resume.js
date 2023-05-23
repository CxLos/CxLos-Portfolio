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
                    <a href="/Bautistac_resume.pdf" download="Bautista_resume.pdf">
                        <img className='resume' alt='resume' title='Download pdf' src={require(`./screenshots/Screenshot-122247.png`)}/>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Resume;
