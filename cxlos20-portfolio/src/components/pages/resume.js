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
                    {/* <div className='rbox1'>
                        <img className='resume' alt='resume' src={require(`./screenshots/Screenshot-224148.png`)}/>
                    </div> */}
                    <div className='rbox1'>
                    <a href="https://docs.google.com/document/d/1rD4-PZOt2kMmxeYXZWkA_-xmUc_kqJ9EUQkMeJQnB58/">
                        <img className='resume' alt='resume' src={require(`./screenshots/Screenshot-122247.png`)}/>
                        </a>
                    </div>
                    <div className='rbox1'>
                        {/* <img className='resume' alt='resume' src={require(`./screenshots/Screenshot-225613.png`)}/> */}
                    </div>
                </div>
        </div>
    );
};

export default Resume;