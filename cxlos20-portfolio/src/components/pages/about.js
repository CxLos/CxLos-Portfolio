import React from 'react';

const About = () => {
    return(
        <div className="page">

            <header>
                <h1>Data Analyst</h1>
            </header>
            <div>
            <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="61842971-ed83-498b-bf71-e0af10ad4648" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>
            </div>

            <div className='about'>

                <div className='about1'>
                    <img className='me' alt='headshot' src={require(`./screenshots/Screenshot-131402.png`)}/>
                </div>

                <div className='border'>
                    <div>
                        <p className='bio'>
                            Hello and Welcome to my portfolio! My name is Carlos Bautista. I am a Data Analyst and Web Developer. I am a graduate from Montclair State University with a B.S. in Business Administration with a concentration in International Business. I also have a Full Stack Web Development certificate from The University of Texas Austin, and Currently working on the IBM Data Analyst Professional Certificate. I am originally from New Jersey and moved to Austin in the summer of 2021. Since moving here, I developed a strong interest in coding, particularly data science, so I decided it was time to further my education and learn more about the tech industry. From here, I realized I really enjoy working with numbers and trying to find the meaning behind them, then presenting that information to tell a story. Please feel free to contact me if you have any questions or would like to connect!     
                        </p>
                    </div>
                    
                </div>
                

            </div>
        </div>
    );
};

export default About;