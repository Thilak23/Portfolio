import React from 'react'
import './Styles/skills.css'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { DiResponsive } from "react-icons/di";
import { FaGitAlt } from "react-icons/fa";

const Skills = () => {
  return (
    <div className='skill' id='skills'>
      <div className='skill-title'>
        SKILLS
      </div>
      <div className='skill-1'>
        <div className='s-1-1'>
          <FaHtml5 className='html'/>
          <h2>HTML</h2>
        </div>
        <div className='s-1-2'>
          <FaCss3 className='css'/>
          <h2>CSS</h2>
        </div>
        <div className='s-1-3'>
          <FaBootstrap className='boot'/>
          <h2>Bootstrap</h2>
        </div>
        <div className='s-1-4'>
          <IoLogoJavascript className='js'/>
          <h2>JavaScript</h2>
        </div>
        <div className='s-1-5'>
          <FaReact className='react'/>
          <h2>React</h2>
        </div>
      </div>

      <div className='skill-2'>
        <div className='s-2-1'>
        <FaJava className='java'/>
        <h2>Java</h2>
        </div>
        <div className='s-2-2'>
        <SiMysql className='sql'/>
        <h2>MySQL</h2>
        </div>
        <div className='s-2-3'>
        <DiResponsive className='resp'/>
        <h2>Responsive</h2>
        </div>
        <div className='s-2-4'>
        <FaGitAlt className='git'/>
        <h2>Git</h2>
        </div>
      </div>
    </div>
  )
}

export default Skills
