import React, { useState } from 'react';
import './Styles/header.css';
import menu from './Assets/menu.png';
import dark from './Assets/dark.png';
import moonwhite from './Assets/moonwhite.jpg'; // Assuming you have a light mode icon

const Header = () => {
  const [open, setOpen] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
    if (darkTheme) {
      document.body.classList.remove('dark-mode');
    } else {
      document.body.classList.add('dark-mode');
    }
  };

  return (
    <div>
      <nav className='mynav'>
        <div className="logo">Thilak</div>
        <div className='my-link'>
          <ul className={open ? "open" : 'my-link-2'}>
            <li><a href="#home">Home</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className='theme'>
          <img
            src={darkTheme ? moonwhite : dark}
            alt={darkTheme ? "moon" : "dark"}
            height={20}
            onClick={toggleTheme}
          />
        </div>
        <div className="menu" onClick={() => setOpen(!open)}>
          <img src={menu} alt="menu" height={25} />
        </div>
      </nav>
    </div>
  );
};

export default Header;
