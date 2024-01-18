import React from 'react';

const Badge = () => {
    return(

        <div className="page">
          <header>
                <h1>Badges</h1>
            </header>

          <div className='badge'>
            <a href='https://www.credly.com/badges/61842971-ed83-498b-bf71-e0af10ad4648/public_url'>

              <div className='badge-title'>
                <header className='badge-header'>
                      <h1>Data Analysis with Python</h1>
                </header>
              </div>
              
              <div className='badge-logo'>
                <img className='ibm' alt='Data Analysis with Python IBM Badge' src={require(`./screenshots/IBM1.png`)}/>
              </div>

            </a>
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