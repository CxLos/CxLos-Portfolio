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
                        <a href="https://kidney-disease-outcome-fc4ec49235f0.herokuapp.com/">
                            <div>
                                <h2 className='ptitle'>Kidney Disease Outcome</h2> 
                            </div>
                            <div className=''>
                                <img className='img3' alt='' src={require(`./screenshots/OIP.jpg`)}/>
                            </div>
                        </a>
                    </div>

                    <div className="p-box2">
                        <a href="https://nav-may-2025-cbfb776ba604.herokuapp.com/">
                            <div>
                                <h2 className='ptitle'>BMHC Monthly Report</h2>
                            </div>
                            <div className=''>
                            <img className='img3' alt='' src={require(`./screenshots/Screenshot-163424.png`)}/>
                            </div>
                        </a>
                    </div>

                    <div className="p-box2">
                        <a href="https://cxlos-pokemon-stats-45bbc3565284.herokuapp.com/">
                            <div>
                                <h2 className='ptitle'>Pokemon Statistics</h2>
                            </div>
                            <div className=''>
                            <img className='img3' alt='' src={require(`./screenshots/pokemon-vector.jpg`)}/>
                            </div>
                        </a>
                    </div>
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