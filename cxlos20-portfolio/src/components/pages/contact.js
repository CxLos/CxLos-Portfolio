import React, { useState } from 'react';




const Contact = () => {

    const [input, setInput] = useState({
        name: "",
        email: "",
        message: ""
    });

    const { name, email, message } = input;
  
    const ContactSubmit = (e) => {
      e.preventDefault();
  
    //   props.onSubmit({
    //     id: Math.random(Math.floor() * 1000),
    //     text: input,
    //     eagerness: eagerness,
    //   });
  
    //   setInput('');
    };
  
    const handleChange = (e) => {
        if(!e.target.value){
            alert("Field is required");
        } else {
            setInput(e.target.value);
            console.log(e.target.value)
        }
    };

    return(
        <div>
            <header>
                <h1>Contact Me</h1>
            </header>

            <div className='contact'>
                <form className='' onSubmit={ContactSubmit}>
                    <div className=''>
                        <div className='input'>
                            <input className="" 
                            type='text' 
                            placeholder='Name' name='name' 
                            defaultValue={name}
                            onBlur={handleChange}
                            >
                            </input>
                        </div>
                        <div className='input'>
                            <input className='resize' 
                            type='email' 
                            placeholder='E-mail' 
                            name='email' 
                            value={email}
                            onBlur={handleChange}>
                            </input>
                        </div>
                        <div className='input'>
                            <input className='' 
                            type='text' 
                            placeholder='Brief message here' 
                            name='body' 
                            value={message}
                            onBlur={handleChange}>
                            </input>
                        </div>
                    </div>
                    <div className='submit'>
                        <button className=''>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;