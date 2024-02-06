import React, { useState, useEffect, useRef} from 'react';


const AnimatedTypingText = () => {
    const [displayedText, setDisplayedText] = useState('');
    const roles = ["Data Analyst", "Web Developer"];
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [typingForward, setTypingForward] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [pauseTimer, setPauseTimer] = useState(null);
    const [cursorVisible, setCursorVisible] = useState(true);

    useEffect(() => {
        let typingInterval;

        const typeText = () => {
            if (typingForward) {
                if (currentIndex < roles[currentRoleIndex].length) {
                    setDisplayedText(prevText => prevText + roles[currentRoleIndex][currentIndex]);
                    setCurrentIndex(prevIndex => prevIndex + 1);
                } else {
                    setTypingForward(false);
                    setPauseTimer(setTimeout(() => {
                        setTypingForward(true);
                    }, 30000)); // Pause for 3 seconds
                }
            } else {
                if (currentIndex > 0) {
                    setDisplayedText(prevText => prevText.slice(0, -1));
                    setCurrentIndex(prevIndex => prevIndex - 1);
                } else {
                    setTypingForward(true);
                    setCurrentRoleIndex(prevIndex => (prevIndex + 1) % roles.length);
                    clearTimeout(pauseTimer);
                }
            }
            setCursorVisible(!typingForward || currentIndex < roles[currentRoleIndex].length);
        };

        typingInterval = setInterval(typeText, 200);

        return () => clearInterval(typingInterval);
    }, [currentRoleIndex, roles, typingForward, currentIndex, pauseTimer]);

    return (
        <div>
            <h1 style={{ position: 'relative' }}>
                {displayedText}
                {cursorVisible && <span style={{ animation: 'blink 1s infinite' }}>|</span>}
            </h1>
        </div>
    );
};


const About = () => {
    return(
        <div className="page">

            <header>
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