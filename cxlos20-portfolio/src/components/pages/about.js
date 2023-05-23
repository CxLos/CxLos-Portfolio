import React from 'react';

const About = () => {
    return(
        <div className="page">

            <header>
                <h1>Software Developer</h1>
            </header>

            <div className='about'>

                <div className='about1'>
                    <img className='me' alt='resume' src={require(`./screenshots/Screenshot-131401.png`)}/>
                </div>

                <div className='border'>
                    <div>
                        <p className='bio'>
                            Hello and Welcome to my portfolio! My name is Carlos Bautista and I am a Full Stack Web Developer. I am a graduate of the University of Texas at Austin Coding Bootcamp. I am also a graduate from Montclair State University with a B.S. in Business Administration with a concentration in International Business. I am originally from New Jersey and currently living in the Austin area. I decided to enroll in a coding bootcamp because I developed a passion for building web applications and I also wanted to expand my skillset to learn about software development. My strengths include problem solving, team building, and creativity. I am currently seeking a position as a Full Stack Web Developer. Please feel free to contact me if you have any questions or would like to connect!     
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;