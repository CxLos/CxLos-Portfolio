// import React, { useState } from 'react';




// const Contact = () => {

//     const [input, setInput] = useState({
//         name: "",
//         email: "",
//         message: ""
//     });

//     const { name, email, message } = input;
  
//     const ContactSubmit = (e) => {
//       e.preventDefault();
  
//     //   props.onSubmit({
//     //     id: Math.random(Math.floor() * 1000),
//     //     text: input,
//     //     eagerness: eagerness,
//     //   });
  
//     //   setInput('');
//     };
  
//     const handleChange = (e) => {
//         if(!e.target.value){
//             alert("Field is required");
//         } else {
//             setInput(e.target.value);
//             console.log(e.target.value)
//         }
//     };

//     return(
//         <div>
//             <header>
//                 <h1>Contact Me</h1>
//             </header>

//             <div className='contact'>
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
//             </div>
//         </div>
//     );
// };

// export default Contact;

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
// import styled from "styled-components";

// npm i @emailjs/browser

const Contact = () => {
	
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1wlwh8x",
        "template_tlbdaat",
        form.current,
        "w89xKvThoCqrRzt7s"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Message sent!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    // <StyledContactForm>
		<div>
			{/* <Title /> */}
			<header>
				<h1>Contact Me</h1>
			</header>

			<div className= "contact">
				<form ref={form} onSubmit={sendEmail}>
					<div className= "">
						<div className= "input">
							<label>Name</label>
							<input type="text" name="user_name" placeholder='Your name' />
						</div>
						<div className= "input">
							<label>Email</label>
							<input type="email" name="user_email" placeholder='Your e-mail' />
						</div>
						<div className= "input">
							{/* <label>Message</label>
							<input name="message" placeholder='Brief message here'  /> */}
						</div>
						<div className= "input">
							{/* <label>Message</label> */}
							<p>Message</p>
							<textarea name="message" placeholder='Brief message here'  />
						</div>
						<div className= "submit">
							{/* <input type="submit" value="Send" /> */}
							<button type="submit" value="Send"> Send </button>
						</div>
					</div>
				</form>
			</div>
			

		</div>

    // </StyledContactForm>
  );
};

export default Contact;

// Styles
// const StyledContactForm = styled.div`
//   width: 400px;

//   form {
//     display: flex;
//     align-items: flex-start;
//     flex-direction: column;
//     width: 100%;
//     font-size: 16px;

//     input {
//       width: 100%;
//       height: 35px;
//       padding: 7px;
//       outline: none;
//       border-radius: 5px;
//       border: 1px solid rgb(220, 220, 220);

//       &:focus {
//         border: 2px solid rgba(0, 206, 158, 1);
//       }
//     }

//     textarea {
//       max-width: 100%;
//       min-width: 100%;
//       width: 100%;
//       max-height: 100px;
//       min-height: 100px;
//       padding: 7px;
//       outline: none;
//       border-radius: 5px;
//       border: 1px solid rgb(220, 220, 220);

//       &:focus {
//         border: 2px solid rgba(0, 206, 158, 1);
//       }
//     }

//     label {
//       margin-top: 1rem;
//     }

//     input[type="submit"] {
//       margin-top: 2rem;
//       cursor: pointer;
//       background: rgb(249, 105, 14);
//       color: white;
//       border: none;
//     }
//   }
// `;