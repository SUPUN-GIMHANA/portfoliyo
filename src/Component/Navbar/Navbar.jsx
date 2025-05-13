import React from 'react'
import './Navbar.css'
import backgroundImg from '../../assets/background.jpg';
import blue from '../../assets/blue.gif';
import me from '../../assets/me.jpg';
import gmail from '../../assets/gmail.jpg';
import linkedin from '../../assets/linkedin.jpg';
import github from '../../assets/Github.png';
import facebook from '../../assets/Facebook.jpg';
import ball from '../../assets/ball.gif';
import whatsapp from '../../assets/whatsapp.jpg';

import { Link } from 'react-router-dom';

const Navbar = () => {


    const handleDownloadCV = () => {
    const cvUrl = '/Supun Gimhana.pdf';
    
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Supun_Gimhana_CV.pdf';
    link.target = '_blank';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

return (
    <div>
        <div className='topBar'>
            
            <div className='name'>
                <p className='nameA'>SUPUN GIMHANA</p>
            </div>

            <div className='bar'>
                <div className='head'>
                    <div className='topic co'>Home</div>
                    <div className='topic'><Link to="/about" className='link'>About</Link></div>
                    <div className='topic'><Link to="/Project" className='link'>Project</Link></div>
                    <div className='topic'><Link to="/Contact" className='link'>Contact</Link></div>
                </div>
            </div>
        
            <div className='mode'>
                <div className='mode1'>
                    <div className='dark'></div>
                </div>
            </div>

        </div>

        <div className='box'>

            <div className='a'>
                <div className='hello'>Hello, My name is</div>
                <div className='name1'>SUPUN <span className='nameColour'>GIMHANA</span></div>
                <div className='hello'>I'm a <span className='degree'>Computer Science and Engineer</span></div>
                <img src={backgroundImg} alt="background" className='background' />

                <div className='socialMedia'>

                    <a href="https://www.linkedin.com/in/supun-gimhana-64392b304/" target="_blank" rel="noopener noreferrer">
                    <div className='circle'>
                    <img src={linkedin} alt="linkedin" className='linkedin1' />
                    </div></a>

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
                    <img src={whatsapp} alt="facebook" className='linkedin1' />
                    </div>
                    </a>

                </div>

                <div className='cv'>
                    <div className='white' onClick={handleDownloadCV}>
                        <div className='black'>
                            <div className='cvtext'>DOWNLOAD CV</div>
                        </div>
                    </div>
                    <div className='ballbox'>
                        <img src={ball} alt="ball" className='ball' />
                    </div>
                </div>

            </div>


            <div className='blueContainer'>
                <img src={blue} alt="blue" className='size' />
                <div className='circleOverlay'></div>
                <img src={me} alt="me" className='me' />
            </div>

        </div>
    </div>
)
}

export default Navbar