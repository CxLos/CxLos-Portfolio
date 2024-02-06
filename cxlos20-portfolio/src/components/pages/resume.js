import React, { useState, useEffect, useRef} from 'react';

const AnimatedTypingText = () => {
    const [displayedText, setDisplayedText] = useState('');
    const text = "Experience";
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

        typingInterval = setInterval(typeText, 120); // Adjust typing speed here (milliseconds)

        return () => clearInterval(typingInterval);
    }, [currentIndex]);

    return (
        <h1 className="animated-text">
            {displayedText}
            <span>|</span> {/* Cursor */}
        </h1>
    );
};

const Resume = () => {
    return(
        <div className=''>
            
            <div classname=''>
                <header>
                    {/* <h1>Resume</h1> */}
                    <AnimatedTypingText />
                </header>
            </div>

            <div className="rbox">
                <div className='rbox1'>
                  
                    <a href="https://onedrive.live.com/?cid=3585458A03CAD8DC&id=3585458a03cad8dc%2121847&parId=3585458a03cad8dc%218159&o=OneUp" download="Bautista_resume.pdf" className='resume-link'>
                        <img className='resume' alt='resume' title='Download pdf' src={require(`./screenshots/resume.png`)}/>
                    </a> 
                </div>

            </div>
        </div>
    );
};

export default Resume;



