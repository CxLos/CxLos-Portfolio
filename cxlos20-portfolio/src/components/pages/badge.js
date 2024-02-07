import React, { useState, useEffect } from 'react';

const AnimatedTypingText = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
      let typingInterval;
      let cursorInterval;

      const typeText = () => {
          if (currentIndex < text.length) {
              setDisplayedText(prevText => prevText + text[currentIndex]);
              setCurrentIndex(prevIndex => prevIndex + 1);
          } else {
              clearInterval(typingInterval); // Stop typing once text is fully typed
          }
      };

      typingInterval = setInterval(typeText, 140); // Adjust typing speed here (milliseconds)

      cursorInterval = setInterval(() => {
          setCursorVisible(prev => !prev); // Toggle cursor visibility
      }, 100); // Adjust blinking speed here (milliseconds)

      return () => {
          clearInterval(typingInterval);
          clearInterval(cursorInterval);
      };
  }, [text, currentIndex]);

  return (
      <h1 className="animated-text">
          {displayedText}
          <span className={cursorVisible ? "blink" : ""}>|</span> {/* Use CSS class for blinking cursor */}
      </h1>
  );
};

const Badge = () => {
    return(

        <div className="page">
          <header>
                {/* <h1>Badges</h1> */}
                <AnimatedTypingText text="Badges" />
          </header>

          <div className='badge-box'>

            <div className='badge'>
              <a href='https://www.credly.com/badges/61842971-ed83-498b-bf71-e0af10ad4648/public_url'>

                {/* <div className='badge-title'>
                  <header className='badge-header'>
                        <h1>Data Analysis with Python</h1>
                  </header>
                </div> */}
                
                <div className='badge-logo1'>
                  <img className='ibm' alt='Data Analysis with Python IBM Badge' src={require(`./screenshots/IBM1.png`)}/>
                </div>

              </a>
            </div>

            <div className='badge'>
              <a href='https://www.credly.com/badges/61842971-ed83-498b-bf71-e0af10ad4648/public_url'>

                {/* <div className='badge-title'>
                  <header className='badge-header'>
                        <h1>Data Visualization with Python</h1>
                  </header>
                </div> */}
                
                <div className='badge-logo2'>
                  <img className='ibm' alt='Data Analysis with Python IBM Badge' src={require(`./screenshots/IBM2.png`)}/>
                </div>

              </a>
            </div>

            {/* <div className='badge'>
              <a href='https://www.credly.com/badges/61842971-ed83-498b-bf71-e0af10ad4648/public_url'>

                <div className='badge-title'>
                  <header className='badge-header'>
                        <h1>Data Visualization with Python</h1>
                  </header>
                </div>
                
                <div className='badge-logo'>
                  <img className='ibm' alt='Data Analysis with Python IBM Badge' src={require(`./screenshots/IBM1.png`)}/>
                </div>

              </a>
            </div> */}

          </div>
           {/* <div>
            <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="61842971-ed83-498b-bf71-e0af10ad4648" data-share-badge-host="https://www.credly.com">
            </div>
            <script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>
            </div> */}
        </div>
    );
};

export default Badge;