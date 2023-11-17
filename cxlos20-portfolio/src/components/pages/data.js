import React from 'react';

const Data = () => {
    return(
        <div className='projects'>
            <header>
                <h1>Projects Coming Soon!</h1>
            </header>

            <div className='p-border'>
                <div className="projects2">
                    <div className="p-box">
                        <a href="https://lookerstudio.google.com/navigation/reporting">
                            <div>
                                <h2 className='ptitle'>Project 1</h2> 
                            </div>
                            <div className='img2'>
                                <img className='img2' alt='' src={require(`./screenshots/Screenshot-135144.png`)}/>
                            </div>
                        </a>
                    </div>

                    <div className="p-box">
                        <a href="https://lookerstudio.google.com/navigation/reporting">
                        {/* <a href="https://characterize-this.herokuapp.com/"> */}
                            <div>
                                <h2 className='ptitle'>Project 2</h2>
                            </div>
                            <div className='img2'>
                            <img className='img2' alt='' src={require(`./screenshots/Screenshot-135144.png`)}/>
                            </div>
                        </a>
                    </div>

                    <div className="p-box">
                        <a href="https://lookerstudio.google.com/navigation/reporting">
                        {/* <a href="https://birdbrain.herokuapp.com/"> */}
                            <div>
                                <h2 className='ptitle'>Project 3</h2>
                            </div>
                            <div className='img2'>
                            <img className='img2' alt='' src={require(`./screenshots/Screenshot-135144.png`)}/>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            <div className='p-border'>
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
            </div>
        </div>
);
};

export default Data;