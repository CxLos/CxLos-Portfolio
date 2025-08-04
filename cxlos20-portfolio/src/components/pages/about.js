import React, { useState, useEffect} from 'react';


const AnimatedTypingText = () => {
    const [displayedText, setDisplayedText] = useState('');
    const text = "Data Analyst";
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
                    <img className='me' alt='headshot' src={require(`./screenshots/headshot4.JPG`)}/>
                </div>

                <div className='border'>
                 <div>
                    <p className='bio'>
                        Hello and welcome to my portfolio!<br /><br />
                        My name is Carlos Bautista, and I hold a B.S. in Business Administration from Montclair State University. Originally from New Jersey, I moved to Austin in 2021, which was an experience that sparked my interest in the tech world and ultimately led me to pursue a career in data science.<br /><br />
                        I began my journey by studying computer science principles at UT Austin, where I learned the fundamentals of web development. During the program, I gained hands-on experience working on both the front end and back end, using technologies such as JavaScript, React, SQL, HTML, and CSS.<br /><br />
                        To build on this foundation, I went on to complete two more certifications: IBM Data Analyst Professional Certificate and IBM Data Science Professional Certificate. These courses deepened my understanding of data science principles and sharpened my skills in SQL and Python, along with libraries like NumPy, pandas, and matplotlib.<br /><br />
                        I invite you to explore my projects to see how I’ve applied these skills in real-world scenarios. Thanks for visiting!
                    </p>
                </div>

                    
                </div>
                

            </div>
        </div>
    );
};

export default About;

// eval "$(ssh-agent -s)"
// ssh-add ~/.ssh/id_ed25519
