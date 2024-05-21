import React, { useState, useEffect, useRef} from 'react';

const AnimatedTypingText = () => {
    const [displayedText, setDisplayedText] = useState('');
    const text = "Statistical Analyses";
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

        typingInterval = setInterval(typeText, 80); // Adjust typing speed here (milliseconds)

        return () => clearInterval(typingInterval);
    }, [currentIndex]);

    return (
        <h1 className="animated-text">
            {displayedText}
            <span>|</span> {/* Cursor */}
        </h1>
    );
};


const Data = () => {
    return(
        <div className='projects'>
            <header>
                {/* <h1>Projects Coming Soon!</h1> */}
                <AnimatedTypingText />
            </header>

            <div className='p-border'>
                <div className="projects2">

                    <div className="p-box2">
                        <a href="https://us-immigration-statistics-b0f238985cfe.herokuapp.com/">
                            <div>
                                <h2 className='ptitle'>US Immigration Statistics</h2> 
                            </div>
                            <div className=''>
                                <img className='img3' alt='' src={require(`./screenshots/Screenshot-223715.png`)}/>
                            </div>
                        </a>
                    </div>

                    <div className="p-box2">
                        <a href="https://flight-delay-statistics-b070eee730f6.herokuapp.com/">
                            <div>
                                <h2 className='ptitle'>Flight Delay Statistics</h2>
                            </div>
                            <div className=''>
                            <img className='img3' alt='' src={require(`./screenshots/Screenshot-1005.png`)}/>
                            </div>
                        </a>
                    </div>

                    {/* <div className="p-box2">
                        <a href="https://lookerstudio.google.com/navigation/reporting">
                            <div>
                                <h2 className='ptitle'>Project 3</h2>
                            </div>
                            <div className=''>
                            <img className='img3' alt='' src={require(`./screenshots/Screenshot-223715.png`)}/>
                            </div>
                        </a>
                    </div> */}
                </div>
            </div>

            {/* <div className='p-border'>
                <div className="projects2">
                    <div className="p-box">
                        <a href="https://lookerstudio.google.com/navigation/reporting">
                            <div>
                                <h2 className='ptitle'>Project 4</h2> 
                            </div>
                            <div className='img2'>
                            <img className='img2' alt='' src={require(`./screenshots/Screenshot-135144.png`)}/>
                            </div>
                        </a>
                    </div>

                    <div className="p-box">
                        <a href="https://lookerstudio.google.com/navigation/reporting">
                            <div>
                                <h2 className='ptitle'>Project 5</h2>        
                            </div>
                            <div className='img2'>
                            <img className='img2' alt='' src={require(`./screenshots/Screenshot-135144.png`)}/>
                            </div>
                        </a>
                    </div>

                    <div className="p-box">
                        <a href="https://lookerstudio.google.com/navigation/reporting">
                            <div>
                                <h2 className='ptitle'>Project 6</h2>   
                            </div>
                            <div className='img2'>
                            <img className='img2' alt='' src={require(`./screenshots/Screenshot-135144.png`)}/>
                            </div>
                        </a>
                    </div>
                </div>
            </div> */}
        </div>
);
};

export default Data;