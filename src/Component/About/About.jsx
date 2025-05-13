import React from 'react'
import './About.css'
import { Link } from 'react-router-dom';
import backgroundImg from '../../assets/background.jpg';
import blue from '../../assets/blue.gif';
import me from '../../assets/me.jpg';
const About = () => {
  return (
    <div>

      <div className='topBar'>
        <div className='name'>
          <p className='nameA'>SUPUN GIMHANA</p>
        </div>
        
        <div className='bar'>
          <div className='head'>
            <div className='topic'><Link to="/Navbar" className='link'>Home</Link></div>
            <div className='topic co'>About</div>
            <div className='topic'><Link to="/Project" className='link'>Project</Link></div>
            <div className='topic'><Link to="/Contact" className='link'>Contact</Link></div>
            <img src={backgroundImg} alt="background" className='background' />
          </div>
        </div>
        
        <div className='mode'>
          <div className='mode1'>
            <div className='dark'></div>
          </div>
        </div>
        
      </div>
      <div className='box'>
        <div className='k'>
          <div className='name1'>About <span className='nameColour'>Me</span></div><br />
          <div className='hello justified-text'>I'm Computer Science undergraduate specializing in
            Software Development and Full Stack Development. <br /><br />
            Highly motivated and passionate about
                Computer Science, with a strong commitment
                to expanding knowledge and gaining
                hands-on experience. A proactive team player
                with excellent leadership skills, strong
                problem-solving abilities, and a keen interest in
                exploring emerging technologies. Seeking an
                opportunity to apply technical skills and contribute
                to real-world projects.
          </div>
          <img src={backgroundImg} alt="background" className='background' />
        </div>
      </div>

      <div className='blueContainer'>
        <img src={blue} alt="blue" className='size' />
        <div className='circleOverlay'></div>
        <img src={me} alt="me" className='me' />
      </div>



    </div>
  )
}

export default About