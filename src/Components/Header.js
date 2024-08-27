import React,{ useState} from 'react'
import './Styles/header.css'
import menu from'./Assets/menu.png'
import dark from './Assets/dark.png'
import moon from './Assets/moon.png'

const Header = () => {

  const[open, setOpen] = useState(false);

  return (
    <div>
      <nav className='mynav'>
        <div className="logo">Thilak</div>
        <div className='my-link'>
          <ul className={open ? "open" : 'my-link-2'}>
            <li><a href="#">Home</a></li>
            <li><a href="#">Skills</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className='theme'>
          <img src={dark} alt="dark" height={20}/>
        </div>
        <div className="menu" onClick={()=>setOpen(!open)}>
          <img src={menu} alt="menu" height={25}/>
        </div>
      </nav>
    </div>
  )
}

export default Header