import React from 'react';

const Resume = () => {
    return(
        <div className=''>
            
            <div classname=''>
                <header>
                    <h1>Resume</h1>
                </header>
            </div>

            <div className="rbox">
                <div className='rbox1'>
                  
                    <a href="https://onedrive.live.com/?cid=3585458A03CAD8DC&id=3585458a03cad8dc%2121847&parId=3585458a03cad8dc%218159&o=OneUp" download="Bautista_resume.pdf" className='resume-link'>
                        <img className='resume' alt='resume' title='Download pdf' src={require(`./screenshots/resume.png`)}/>
                    </a> 
                </div>

            </div>
        </div>
    );
};

export default Resume;



