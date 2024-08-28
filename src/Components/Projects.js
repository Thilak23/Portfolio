import React from 'react'
import './Styles/projects.css'
import { FaArrowRight } from "react-icons/fa6";
import bike from './Assets/bike.jpeg'
import todo1 from './Assets/todo1.jpg'
import RPS from './Assets/RPS.jpg'

const Projects = () => {
  return (
    <div className='projects' id='projects'>
      <div className='projects-title'>
        PROJECTS
      </div>
      <div className='pro'>
        <div className='pro-1'>
          <img src={bike} alt='bike' className='bike'/>
          <div className='pro-sub'>
          <h3 className='pro-title'>Bike Tune-Up</h3>
          <p className='para-1'>A Bike Tune-Up ensures your bicycle runs smoothly. This webpage highlights services, provides maintenance tips, and offers easy contact and booking options.
          </p>
          <button className='but-1'><a href='#' className='link-1'>View Code <FaArrowRight  className='arrow'/></a></button>
          </div>
        </div>

        <div className='pro-2'>
          <img src={todo1} alt='todo' className='todo'/>
          <div className='pro-sub'>
          <h3 className='pro-title'>Todo-List</h3>
          <p className='para-2'>A To-Do List helps organize tasks by listing and tracking what needs to be done, improving focus and productivity. It allows users to create, prioritize, and track tasks that need to be completed.
          </p>
          <button className='but-2'><a href='#' className='link-1'>View Code <FaArrowRight  className='arrow'/></a></button>
          </div>
        </div>

        <div className='pro-3'>
          <img src={RPS} alt='rps' className='rps'/>
          <div className='pro-sub'>
          <h3 className='pro-title'>Rock Paper Scissors</h3>
          <p className='para-3'>This project is a digital version of the classic hand game. Players compete against the computer, choosing rock, paper, or scissors, with the winner determined by rules.
          </p>
          <button className='but-3'><a href='#' className='link-1'>View Code <FaArrowRight  className='arrow'/></a></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects