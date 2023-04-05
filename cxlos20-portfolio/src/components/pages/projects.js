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
                        <a href="https://github.com/CxLos/CxLos20-React-Portfolio">
                            <h2>React Portfolio</h2>
                        </a>
                    </div>
                    <div className="p-box">
                        <a href="https://github.com/CxLos/CxLos19-Text-Editor">
                            <h2>CxLos19 Text Editor</h2>
                        </a>
                    </div>
                    <div className="p-box">
                        <a href="https://github.com/CxLos/CxLos18-Social-Network">
                            <h2>Cxlos18 Social Network</h2>
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