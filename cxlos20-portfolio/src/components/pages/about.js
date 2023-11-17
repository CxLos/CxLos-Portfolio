import React from 'react';

const About = () => {
    return(
        <div className="page">

            <header>
                <h1>Data Analyst/ Web Developer</h1>
            </header>

            <div className='about'>

                <div className='about1'>
                    <img className='me' alt='resume' src={require(`./screenshots/Screenshot-131401.png`)}/>
                </div>

                <div className='border'>
                    <div>
                        <p className='bio'>
                            Hello and Welcome to my portfolio! My name is Carlos Bautista and I am a Data Analyst and Web Developer.I am a graduate from Montclair State University with a B.S. in Business Administration with a concentration in International Business. I also have a Full Stack Web Development certificate from The University of Texas Austin, and Currently working on the IBM Data Analyst Professional Certificate. I am originally from New Jersey and moved to Austin back in the summer of 2021. Since moving here, I developed a strong interest in coding and working with databases, so I decided it was time to further my education and learn more about the tech industry. From here, I realized I really enjoy working with numbers and trying to find the meaning behind them, then presenting that information to tell a story. Please feel free to contact me if you have any questions or would like to connect!     
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;