

// import React, { useRef } from 'react';
// // import emailjs from 'emailjs-com';
// import './Contact.css';
// import { Link } from 'react-router-dom';

// import backgroundImg from '../../assets/background.jpg';
// import blue from '../../assets/blue.gif';
// import me from '../../assets/me.jpg';
// import gmail from '../../assets/gmail.jpg';
// import linkedin from '../../assets/linkedin.jpg';
// import github from '../../assets/Github.png';
// import facebook from '../../assets/Facebook.jpg';
// import ball from '../../assets/ball.gif';
// import whatsapp from '../../assets/whatsapp.jpg';

// const Contact = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm(
//       'your_service_id',      // Replace with your EmailJS service ID
//       'your_template_id',     // Replace with your EmailJS template ID
//       form.current,
//       'your_public_key'       // Replace with your EmailJS public key
//     )
//     .then(() => {
//       alert('Message sent successfully!');
//       form.current.reset();
//     })
//     .catch((error) => {
//       alert('Failed to send message. Please try again.');
//       console.error(error);
//     });
//   };

//   const copyEmailToClipboard = () => {
//     navigator.clipboard.writeText('supung367@gmail.com')
//       .then(() => alert('Email copied to clipboard!'))
//       .catch((err) => console.error('Failed to copy email:', err));
//   };

//   return (
//     <div>

//       <div className='topBar'>
//         <div className='name'>
//           <p className='nameA'>SUPUN GIMHANA</p>
//         </div>
        
//         <div className='bar'>
//           <div className='head'>
//             <div className='topic'><Link to="/Navbar" className='link'>Home</Link></div>
//             <div className='topic co'><Link to="/About" className='link'>About</Link></div>
//             <div className='topic'><Link to="/Project" className='link'>Project</Link></div>
//             <div className='topic co'>Contact</div>
//           </div>
//         </div>
        
//         <div className='mode'>
//           <div className='mode1'>
//             <div className='dark'></div>
//           </div>
//         </div>
//       </div>

//       <div className='box'>
//         <div className='k'>
//           <div className='name1 nameColour'>Contact <span>me</span></div>
//         </div>
//       </div>

//       {/* 📬 Contact Form */}
//       <form ref={form} onSubmit={sendEmail} className="contact">
//         <div className="coloum1">
//           <input type="text" name="user_name" placeholder="Full Name" required />
//           <input type="email" name="user_email" placeholder="Email Address" required />
//         </div>
//         <div className="coloum1">
//           <input type="text" name="mobile_number" placeholder="Mobile Number" required />
//           <input type="text" name="subject" placeholder="Subject" required />
//         </div>
//         <div className="coloum">
//           <textarea name="message" placeholder="Your Message" required></textarea>
//         </div>
//         <button type="submit" className='send'>Send</button>

//         <div className='cv1'>
//           <div className='white1' onClick={copyEmailToClipboard}>
//             <div className='black'>
//               <div className='cvtext'>COPY EMAIL</div>
//             </div>
//           </div>
//           <div className='ballbox1'>
//             <img src={ball} alt="ball" className='ball' />
//           </div>
//           <div>
//             <div>Email : supung367@gmail.com</div>
//             <div>Phone no : +94 773686790</div>
//           </div>
//         </div>
//       </form>

//       {/* 🔗 Social Links */}
//       <div className="com">
//         <div className='socialMedia1'>
//           <a href="https://www.linkedin.com/in/supun-gimhana-64392b304/" target="_blank" rel="noopener noreferrer">
//             <div className='circle'>
//               <img src={linkedin} alt="linkedin" className='linkedin1' />
//             </div>
//           </a>

//           <a href="https://github.com/SUPUN-GIMHANA" target="_blank" rel="noopener noreferrer">
//             <div className='circle'>
//               <img src={github} alt="github" className='linkedin1' />
//             </div>
//           </a>

//           <a href="mailto:supung367@gmail.com" target="_blank" rel="noopener noreferrer">
//             <div className='circle'>
//               <img src={gmail} alt="gmail" className='linkedin1' />
//             </div>
//           </a>

//           <a href="https://www.facebook.com/share/1BmF6QEPBB/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
//             <div className='circle'>
//               <img src={facebook} alt="facebook" className='linkedin1' />
//             </div>
//           </a>

//           <a href="https://api.whatsapp.com/send/?phone=94773686790&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
//             <div className='circle'>
//               <img src={whatsapp} alt="whatsapp" className='linkedin1' />
//             </div>
//           </a>
//         </div>
//       </div>

//       {/* 👤 Avatar and Animation */}
//       <div className='blueContainer'>
//         <img src={blue} alt="blue" className='size' />
//         <div className='circleOverlay'></div>
//         <img src={me} alt="me" className='me' />
//       </div>
//       <img src={backgroundImg} alt="background" className='background' />

//     </div>
//   );
// };

// export default Contact;







import React, { useRef, useState } from 'react';
import './Contact.css';
import { Link } from 'react-router-dom';
import backgroundImg from '../../assets/background.jpg';
import blue from '../../assets/blue.gif';
import me from '../../assets/me.jpg';
import gmail from '../../assets/gmail.jpg';
import linkedin from '../../assets/linkedin.jpg';
import github from '../../assets/Github.png';
import facebook from '../../assets/Facebook.jpg';
import ball from '../../assets/ball.gif';
import whatsapp from '../../assets/whatsapp.jpg';
// ... (keep your existing imports)

const Contact = () => {
  const form = useRef();
  const [isCopied, setIsCopied] = useState(false);


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'your_service_id',      // Replace with your EmailJS service ID
      'your_template_id',     // Replace with your EmailJS template ID
      form.current,
      'your_public_key'       // Replace with your EmailJS public key
    )
    .then(() => {
      alert('Message sent successfully!');
      form.current.reset();
    })
    .catch((error) => {
      alert('Failed to send message. Please try again.');
      console.error(error);
    });
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText('supung367@gmail.com')
      .then(() => alert('Email copied to clipboard!'))
      .catch((err) => console.error('Failed to copy email:', err));
  };
  // ... (keep your existing sendEmail and copyEmailToClipboard functions)

  return (
    <div>

      
      <div className='topBar'>
        <div className='name'>
          <p className='nameA'>SUPUN GIMHANA</p>
        </div>
        
        <div className='bar'>
          <div className='head'>
            <div className='topic'><Link to="/Navbar" className='link'>Home</Link></div>
            <div className='topic co'><Link to="/About" className='link'>About</Link></div>
            <div className='topic'><Link to="/Project" className='link'>Project</Link></div>
            <div className='topic co'>Contact</div>
          </div>
        </div>
        
        <div className='mode'>
          <div className='mode1'>
            <div className='dark'></div>
          </div>
        </div>
      </div>

      <div className='box'>
        <div className='z'>
          <div className='name1 nameColour'>Contact <span>me</span></div>
        </div>
      </div>
      {/* Keep all your existing topBar, box, etc. */}

      {/* Enhanced Contact Form */}
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <div className="input-row">
          <div className="input-container">
            <input 
              type="text" 
              name="user_name" 
              placeholder=" "
              required 
              className="animated-input"
            />
            <label className="input-label">Full Name</label>
            <div className="input-highlight"></div>
          </div>
          
          <div className="input-container">
            <input 
              type="email" 
              name="user_email" 
              placeholder=" "
              required 
              className="animated-input"
            />
            <label className="input-label">Email Address</label>
            <div className="input-highlight"></div>
          </div>
        </div>
        
        <div className="input-row">
          <div className="input-container">
            <input 
              type="text" 
              name="mobile_number" 
              placeholder=" "
              required 
              className="animated-input"
            />
            <label className="input-label">Mobile Number</label>
            <div className="input-highlight"></div>
          </div>
          
          <div className="input-container">
            <input 
              type="text" 
              name="subject" 
              placeholder=" "
              required 
              className="animated-input"
            />
            <label className="input-label">Subject</label>
            <div className="input-highlight"></div>
          </div>
        </div>
        
        <div className="input-container message-container">
          <textarea 
            name="message" 
            placeholder=" "
            required 
            className="animated-textarea"
          ></textarea>
          <label className="input-label">Your Message</label>
          <div className="input-highlight"></div>
        </div>
        
        <button type="submit" className="send-button">
          Send Message
        </button>

        {/* Keep your existing cv1 section */}
        <div className='cv1'>
          <div className={`white1 ${isCopied ? 'copied' : ''}`} onClick={copyEmailToClipboard}>
            <div className='black'>
              <div className='cvtext'>{isCopied ? 'COPIED!' : 'COPY EMAIL'}</div>
            </div>
          </div>
          <div className='ballbox1'>
            <img src={ball} alt="ball" className='ball' />
          </div>
          <div>
            <div>Email : supung367@gmail.com</div>
            <div>Phone no : +94 773686790</div>
          </div>
        </div>
      </form>
             {/* 🔗 Social Links */}
      <div className="com">
        <div className='socialMedia1'>
          <a href="https://www.linkedin.com/in/supun-gimhana-64392b304/" target="_blank" rel="noopener noreferrer">
            <div className='circle'>
              <img src={linkedin} alt="linkedin" className='linkedin1' />
            </div>
          </a>

          <a href="https://github.com/SUPUN-GIMHANA" target="_blank" rel="noopener noreferrer">
            <div className='circle'>
              <img src={github} alt="github" className='linkedin1' />
            </div>
          </a>

          <a href="mailto:supung367@gmail.com" target="_blank" rel="noopener noreferrer">
            <div className='circle'>
              <img src={gmail} alt="gmail" className='linkedin1' />
            </div>
          </a>

          <a href="https://www.facebook.com/share/1BmF6QEPBB/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
            <div className='circle'>
              <img src={facebook} alt="facebook" className='linkedin1' />
            </div>
          </a>

          <a href="https://api.whatsapp.com/send/?phone=94773686790&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
            <div className='circle'>
              <img src={whatsapp} alt="whatsapp" className='linkedin1' />
            </div>
          </a>
        </div>
      </div>
       {/* 👤 Avatar and Animation */}
      <div className='blueContainer'>
        <img src={blue} alt="blue" className='size' />
        <div className='circleOverlay'></div>
        <img src={me} alt="me" className='me' />
      </div>
      <img src={backgroundImg} alt="background" className='background' />
      {/* Keep the rest of your existing code */}
    </div>
  );
};

export default Contact;