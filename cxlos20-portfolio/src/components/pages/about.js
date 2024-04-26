import React, { useState, useEffect} from 'react';


const AnimatedTypingText = () => {
    const [displayedText, setDisplayedText] = useState('');
    const text = "Data Analyst / Developer";
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        let typingInterval;

        const typeText = () => {
            if (currentIndex < text.length) {
                setDisplayedText(prevText => prevText + text[currentIndex]);
                setCurrentIndex(prevIndex => prevIndex + 1);
            } else {
                clearInterval(typingInterval); // Stop typing once text is fully typed
            }
        };

        typingInterval = setInterval(typeText, 110); // Adjust typing speed here (milliseconds)

        return () => clearInterval(typingInterval);
    }, [currentIndex]);

    return (
        <h1 className="animated-text headline">
            {displayedText}
            <span>|</span> {/* Cursor */}
        </h1>
    );
};


const About = () => {
    return(
        <div className="page">

            <header href='#about'>
                {/* <h1>Data Analyst/ Developer</h1> */}
                <AnimatedTypingText />
                
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
                        <p className='bio '>
                        Hello and welcome to my portfolio! My name is Carlos Bautista, and I'm a Data Analyst and Web Developer. I graduated from Montclair State University with a Bachelor of Science in Business Administration, focusing on International Business. Additionally, I have a Full Stack Web Development certificate from The University of Texas Austin and the IBM Data Analyst Professional Certificate.

                        Originally from New Jersey, I made the move to Austin in 2021. I'm passionate about leveraging data analytics and web development skills to create meaningful insights and user-friendly experiences. Explore my portfolio to see examples of my work and projects!
                        </p>
                    </div>
                    
                </div>
                

            </div>
        </div>
    );
};

export default About;

