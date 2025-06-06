import './navbar.css';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

const NavBar = () => {
  const [click, setClick] = useState(false);
  console.log(click)
  const handleClick = () => {
    setClick(!click);
    if (click) {
      document.body.style.overflow = ''
    } else {
      document.body.style.overflow = 'hidden'
    }
  }
  return (
    <div className='header-container'>
      <Link to='/' className='logo-link'>
        <h1 className="logo">{'<andreeramos />'}</h1>
      </Link>

      <ul className={
        click ? 'nav-menu active' : 'nav-menu'
      }>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/projects'>Projects</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
      <div className='hamburguer' onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: '#fff' }} />
        ) : (
          <FaBars size={20} style={{ color: '#fff' }} />
        )

        }
      </div>
    </div>
  )
}

export default NavBar
