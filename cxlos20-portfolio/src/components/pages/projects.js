import React from 'react';

const Projects = () => {
    return(
        <div className='projects'>
            <header>
                <h1>Projects</h1>
            </header>

            <div className='p-border'>

                <div className="">
                    <div className="p-box">
                        <div>
                            <a href="https://rbarbosa51.github.io/whatacrypto-crypto-game/">
                            <h2 className='ptitle'>Whatacrypto</h2>
                            </a>
                        </div>
                        <div className='img2'>
                            <img className='img2' alt='' src={require(`./screenshots/Screenshot-185839.png`)}/>
                        </div>
                    </div>

                    <div className="p-box">
                        <div>
                            <a href="https://characterize-this.herokuapp.com/">
                                <h2 className='ptitle'>Character Generator</h2>
                            </a>
                        </div>
                        <div className='img2'>
                            <img className='img2' alt='' src={require(`./screenshots/character-form.png`)}/>
                        </div>
                    </div>

                    <div className="p-box">
                        <div>
                            <a href="https://birdbrain.herokuapp.com/">
                                <h2 className='ptitle'>Bird Brain</h2>
                            </a>
                        </div>
                        <div className='img2'>
                            <img className='img2' alt='' src={require(`./screenshots/Screenshot-151238.png`)}/>
                        </div>
                    </div>
                </div>

                <div className="">
                    <div className="p-box">
                        <div>
                            <a href="https://github.com/CxLos/CxLos14-CMS-BlogSite">
                                {/* <a href="https://cxlos13-ecommerce-backend.herokuapp.com/"> */}
                                <h2 className='ptitle'>CxLos14 Blog Site</h2>
                            </a>
                        </div>
                        <div className='img2'>
                            <img className='img2' alt='' src={require(`./screenshots/Screenshot-192357.png`)}/>
                        </div>
                    </div>

                    <div className="p-box">
                        <div>
                            <a href="https://cxlos.github.io/CxLos5-Planner/">
                                <h2 className='ptitle'>CxLos5 Planner</h2>        
                            </a>
                        </div>
                        <div className='img2'>
                            <img className='img2' alt='' src={require(`./screenshots/Screenshot-164251.png`)}/>
                        </div>
                    </div>

                    <div className="p-box">
                        <div>
                            <a href="https://cxlos.github.io/CxLos-Password-Generator3/">
                                <h2 className='ptitle'>CxLos Password Generator 3</h2>   
                            </a>
                        </div>
                        <div className='img2'>
                            <img className='img2' alt='' src={require(`./screenshots/Screenshot-163626.png`)}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
);

};

export default Projects;