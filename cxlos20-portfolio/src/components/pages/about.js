import React, { useState, useEffect} from 'react';


const AnimatedTypingText = () => {
    const [displayedText, setDisplayedText] = useState('');
    const text = "Data Scientist";
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

                {/* <div className='about1'>
                    <img className='me' alt='headshot' src={require(`./screenshots/headshot4.JPG`)}/>
                </div> */}

                <div className='border'>
                    <div>
                        <p className='bio'>
                            Hello & Welcome to my Portfolio!<br /><br />
                            Please feel free explore my projects, which highlight my skills in data analytics, data science, and machine learning, including the development of end-to-end data pipelines, predictive models, and generative AI applications. <br /><br />
                            Explore examples of real-time and batch data workflows, Python applications (pandas, NumPy, scikit-learn, matplotlib), SQL, & data engineering tools, all applied to build robust & comprehensive data applications. <br /><br />
                            Thanks for visiting!
                        </p>
                    </div>
                </div>
                

            </div>
        </div>
    );
};

export default About;

// eval "$(ssh-agent -s)" # Start the SSH agent
// ssh-add ~/.ssh/id_ed25519 # add private key
// ssh-add ~/.ssh/id_rsa # permanently add key
// ssh-add -l # list the keys in memory to confirm the correct key is added

// cat ~/.ssh/id_ed25519.pub # Copy this public key and add it to your GitHub account under Settings > SSH and GPG
//  keys

// ssh -T git@github.com # Test the connection to GitHub
// If you see a message like "Hi username! You've successfully authenticated, but GitHub does

// eval "$(ssh-agent -s)"
// ssh-add -D  # remove all keys from memory
// ssh-add ~/.ssh/id_ed25519  # add the correct key

