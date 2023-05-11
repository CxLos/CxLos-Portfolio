import React from 'react';

const Resume = () => {
    return(
        <div className=''>

            <div classname=''>
                <header className=''>
                    <h1>Resume</h1>
                </header>
            </div>
          
            <div className='rbox'>
                {/* <img className='image' alt='resume' src='../assets/images/Screenshot-142539.png'/> */}
                {/* <img className='resume' alt='resume' src={require(`./screenshots/Screenshot-115502.png`)}/>
                <img className='resume' alt='resume' src={require(`./screenshots/Screenshot-120004.png`)}/> */}
                <img className='resume' alt='resume' src={require(`./screenshots/Screenshot-224148.png`)}/>
            </div>
        </div>
    );
};

export default Resume;

//                 <form className='' onSubmit={ContactSubmit}>
//                     <div className=''>
//                         <div className='input'>
//                             <input className="" 
//                             type='text' 
//                             placeholder='Name' name='name' 
//                             defaultValue={name}
//                             onBlur={handleChange}
//                             >
//                             </input>
//                         </div>
//                         <div className='input'>
//                             <input className='resize' 
//                             type='email' 
//                             placeholder='E-mail' 
//                             name='email' 
//                             value={email}
//                             onBlur={handleChange}>
//                             </input>
//                         </div>
//                         <div className='input'>
//                             <input className='' 
//                             type='text' 
//                             placeholder='Brief message here' 
//                             name='body' 
//                             value={message}
//                             onBlur={handleChange}>
//                             </input>
//                         </div>
//                     </div>
//                     <div className='submit'>
//                         <button className=''>Submit</button>
//                     </div>
//                 </form>