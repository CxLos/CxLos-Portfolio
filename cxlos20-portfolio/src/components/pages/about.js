import React from 'react';

const About = () => {
    return(
        <div className="page">

            <header>
                <h1>Software Developer</h1>
            </header>

            <div className='about'>

                <div className='about1'>
                    <img className='me' alt='resume' src={require(`./screenshots/1519B6C9.jpg`)}/>
                </div>

                <div className='border'>
                    <div>
                        <p className='bio'>
                            Hello and Welcome to my portfolio! My name is Carlos Bautista and I am a Full Stack Web Developer. I am a graduate of the University of Texas at Austin Coding Bootcamp. I am also a graduate from Montclair State University with a B.S. in Business Administration with a concentration in International Business. I am from New Jersey and I am currently living in the Austin area. I decided to enroll in a coding bootcamp to expand my skillset and learn about software development and apply my new skills to the workforce.        
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;