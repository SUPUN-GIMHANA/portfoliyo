import React from 'react'
import "./Project.css"
import { Link } from 'react-router-dom';
import backgroundImg from '../../assets/background.jpg';
import tea from '../../assets/tea.jpg';
import travelTicket from '../../assets/travelTicket.jpg';
import sgFilms from '../../assets/Films.jpg';
import planeSeat from '../../assets/planeSeat.jpg';
import zoo from '../../assets/zoo.jpg';
import lms from '../../assets/lms.jpg';
import rent from '../../assets/rent.jpg';
import Gemini from '../../assets/Gemini.jpg';
import load from '../../assets/load.gif';
import plus from '../../assets/plus.png';


const Project = () => {
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
            <div className='topic co'>Project</div>
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

      <div className="control">
          <div className='card'>
            
            <div className="ca card1">
                <img src={tea} alt="tea" className='tea' />
                <div className="text1">Ever Tea</div>
              <div className="top"><p className='p'>Tea Research Institute (TRI) connects tea
              cultivation with small-scale tea estate owners - Full Stack Development</p></div>
            </div>

            <div className="ca card1">
                <img src={travelTicket} alt="tea" className='tea' />
                <div className="text1">Ticket Booking</div>
              <div className="top"><p className='p'>Real-Time Event Ticketing System - Ful
                  l Stack Development</p></div>
            </div>

            <div className="ca card1">
                <img src={sgFilms} alt="tea" className='tea' />
                <div className="text1">SG Films</div>
              <div className="top"><p className='p'>Tea Research Institute (TRI) connects tea
              cultivation with small-scale tea estate owners - Full Stack Development</p></div>
            </div>

            <div className="ca card1">
                <img src={planeSeat} alt="tea" className='tea' />
                <div className="text1">Plane Seat Booking</div>
              <div className="top"><p className='p'>Plane Seat Management
                          System - Java OOP</p></div>
            </div>

            <div className="ca card1">
                <img src={zoo} alt="tea" className='tea' />
                <div className="text1">Life on Earth</div>
              <div className="top"><p className='p'>Develop a website for the SDG goals to help
                      animals</p></div>
            </div>

            <div className="ca card1">
                <img src={lms} alt="tea" className='tea' />
                <div className="text1">LMS for A/L class</div>
              <div className="top"><p className='p'>Developed an LMS for Advanced Level (A/L)
                  students, allowing them to select their A/L year</p></div>
            </div>

            <div className="ca card1">
                <img src={rent} alt="tea" className='tea' />
                <div className="text1">Rent & Booking</div>
              <div className="top"><p className='p'>The platform enables users to rent vehicles
                and houses, book playgrounds, and post advertisements for rent out various items.</p></div>
            </div>

            <div className="ca card1">
                <img src={Gemini} alt="tea" className='tea' />
                <div className="text1">Gemini clone</div>
              <div className="top"><p className='p'>Built a Gemini AI clone in React Native with chat 
                  interface, API integration, and responsive design for Android and iOS.</p></div>
            </div>

            <div className="ca card1">
                <img src={load} alt="load" className='load' />
                <img src={plus} alt="load" className='plus' />
            </div>

            <div className='blackCard'></div>
            <div className='blackCard'></div>
            <div className='blackCard'></div>
            <div className='blackCard'></div>
            <div className='blackCard'></div>

          </div>
      </div>
      

    </div>
  )
}

export default Project
