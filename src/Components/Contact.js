import React from 'react'
import './Styles/contact.css'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div className='contact' id='contact'>
      <div className='contact-title'>
        CONTACT
      </div>
      <div className='contact-info'>
        <div className='con-info-1'>
          <p className='p-1'>Let's Have Fun Together</p>
          <p className='p-2'>If you need any assistance or have any questions, feel free to reach out using the form.</p>
          <div className='social-media'>
            <p className='p-3'>Check My Profile</p>
            <div className='social'>
              <a href='https://www.linkedin.com/in/thilak-s-2k3/' className='linkedin-link'><FaLinkedin className='linkedin'/></a>
              <a href='https://github.com/Thilak23' className='github-link'><FaGithub className='github'/></a>
            </div>
          </div>
        </div>
        <div className='con-info-2'>
          <form className='form'>
            <input type="text" placeholder="Name" required="" className='name'/>
            <input type="email" placeholder="Email" required="" className='email'/>
            <textarea name="message" placeholder="Message" required="" className='message'></textarea>
            <button type="submit" className='submit'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact