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
                        <img className='resume' alt='resume' src={require(`./screenshots/Screenshot-225715.png`)}/>
                    </div>
                    <div className='rbox1'>
                        <img className='resume' alt='resume' src={require(`./screenshots/Screenshot-225613.png`)}/>
                    </div>
                </div>
        </div>
    );
};

export default Resume;

