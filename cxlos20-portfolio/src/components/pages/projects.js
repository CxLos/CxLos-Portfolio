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
                        <a href="https://rbarbosa51.github.io/whatacrypto-crypto-game/">
                            <h2>Whatacrypto</h2>
                        </a>
                    </div>
                    <div className="p-box">
                        <a href="https://characterize-this.herokuapp.com/">
                            <h2>Character Generator</h2>
                        </a>
                    </div>
                    <div className="p-box">
                        <a href="https://birdbrain.herokuapp.com/">
                            <h2>Bird Brain</h2>
                        </a>
                    </div>
                </div>


                <div className="">
                    <div className="p-box">
                        <a href="https://github.com/CxLos/CxLos14-CMS-BlogSite">
                        {/* <a href="https://cxlos13-ecommerce-backend.herokuapp.com/"> */}
                            <h2>CxLos14 Blog Site</h2>
                        </a>
                    </div>
                    <div className="p-box">
                        <a href="https://github.com/CxLos/CxLos13-eCommerce-BackEnd">
                            <h2>CxLos13 eCommerce Backend</h2>
                        </a>
                    </div>
                    <div className="p-box">
                        <a href="https://cxlos.github.io/CxLos-Password-Generator3/">
                            <h2>CxLos Password Generator 3</h2>
                        </a>
                    </div>
                </div>
         
            </div>

        </div>
);

};

export default Projects;