import React from 'react';
import './Styles/home.css';
import photo from './Assets/photo.png'

const Home = () => {
  return (
   <div id='home'>
      <div className='main'>
        <div className='main-1'>
            <h1>Hello, I'm <span className='highlight'>Thilak</span></h1>
            <h2 className='domain'>Front-End Developer</h2>
            <p className='about'>Welcome to my personal portfolio. I specialize in creating interactive and responsive web applications using modern technoligies such as HTML, CSS, JavaScript and React JS.</p>
            <button className='hire'><a href='https://thilak2k3@gmail.com' className='hire-link'>Get in Touch</a></button>
        </div>
        <div className='main-2'>
          <div>
            <img src={photo} alt='' className='img'/>
          </div>
        </div>
      </div>
   </div>
  )
}

export default Home;
