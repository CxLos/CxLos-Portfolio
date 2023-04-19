import React from 'react';

const Resume = () => {
    return(
        <div className=''>

            <div classname=''>
                <header className=''>
                    <h1>Resume</h1>
                </header>
            </div>
          
            <div className='rbox'>
                {/* <img className='image' alt='resume' src='../assets/images/Screenshot-142539.png'/> */}
                {/* <img className='resume' alt='resume' src={require(`./screenshots/Screenshot-115502.png`)}/>
                <img className='resume' alt='resume' src={require(`./screenshots/Screenshot-120004.png`)}/> */}
                <img className='resume' alt='resume' src={require(`./screenshots/Screenshot-163937.png`)}/>
            </div>
        </div>
    );
};

export default Resume;