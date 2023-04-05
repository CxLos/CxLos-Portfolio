import React from 'react';

const About = () => {
    return(
        <div className="page">

            <header>
                <h1>About Me</h1>
            </header>

            <div className='about'>

                <div className='about1'>
                    <img className='me' alt='resume' src={require(`./screenshots/1519B6C9.jpg`)}/>
                </div>

                <div className='border'>
                    <div>
                        <p className='bio'>
                            Hello and Welcome to my portfolio! My name is Carlos Bautista and I am a Full Stack Web Developer. I am a graduate of the University of Texas at Austin Coding Bootcamp. I am from New Jersey and I am currently living in the Austin area. I graduated in 2017 from Montclair State University with a B.S. in International Business and have been working in the field ever since. I took this bootcamp because I wanted to expand my skillset and also shift careers.        
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;