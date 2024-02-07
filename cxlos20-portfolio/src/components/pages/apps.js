import React, { useState, useEffect, useRef} from 'react';

const AnimatedTypingText = () => {
    const [displayedText, setDisplayedText] = useState('');
    const text = "Web Apps";
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


const Projects = () => {
    return(
        <div className='projects'>
            <header>
                {/* <h1>Projects</h1> */}
                <AnimatedTypingText text="Projects" />
            </header>

            <div className='p-border'>
                <div className="projects2">

                   
                        <div className="p-box">
                            <a href="https://rbarbosa51.github.io/whatacrypto-crypto-game/">
                                <div>
                                    <h2 className='ptitle'>Whatacrypto</h2> 
                                </div>
                                <div className='img2'>
                                    <img className='img2' alt='' src={require(`./screenshots/Screenshot-185839.png`)}/>
                                </div>
                            </a>
                        </div>
                    

                    <div className='projects3'>
                        <div className="p-box">
                            <a href="https://cxlos-character-generator.herokuapp.com/">
                            {/* <a href="https://characterize-this.herokuapp.com/"> */}
                                <div>
                                    <h2 className='ptitle'>Character Generator</h2>
                                </div>
                                <div className='img2'>
                                    <img className='img2' alt='' src={require(`./screenshots/character-form.png`)}/>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className='projects3'>
                        <div className="p-box">
                            <a href="https://cxlos-bird-brain.herokuapp.com/">
                            {/* <a href="https://birdbrain.herokuapp.com/"> */}
                                <div>
                                    <h2 className='ptitle'>Bird Brain</h2>
                                </div>
                                <div className='img2'>
                                    <img className='img2' alt='' src={require(`./screenshots/Screenshot-151238.png`)}/>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className='p-border'>
                <div className="projects2">

                <div className='projects3'>
                    <div className="p-box">
                        <a href="https://cxlos14-cms-blogsite.herokuapp.com/">
                            <div>
                                <h2 className='ptitle'>CxLos14 Blog Site</h2> 
                            </div>
                            <div className='img2'>
                                <img className='img2' alt='' src={require(`./screenshots/Screenshot-192357.png`)}/>
                            </div>
                        </a>
                    </div>
                </div>

                <div className='projects3'>
                    <div className="p-box">
                        <a href="https://cxlos.github.io/Cxlos6-Weather-App/">
                            <div>
                                <h2 className='ptitle'>CxLos6 Weather App</h2>        
                            </div>
                            <div className='img2'>
                                <img className='img2' alt='' src={require(`./screenshots/Screenshot-191817.png`)}/>
                            </div>
                        </a>
                    </div>
                </div>

                <div className='projects3'>
                    <div className="p-box">
                        <a href="https://cxlos.github.io/CxLos-Password-Generator3/">
                            <div>
                                <h2 className='ptitle'>CxLos Password Generator</h2>   
                            </div>
                            <div className='img2'>
                                <img className='img2' alt='' src={require(`./screenshots/Screenshot-163626.png`)}/>
                            </div>
                        </a>
                    </div>
                </div>

                </div>
            </div>
        </div>
);
};

export default Projects;