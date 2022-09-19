import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {

  return (
    <header>
        <h2>
            <Link to="/">
            <span role="img" aria-label="emoji">🎨</span> Nicolette Renner
            </Link>
        </h2>
        <nav className='navbar'>
            <ul className="flex-row">
            <li className="mx-2">
                <Link to='/'>
                    About
                </Link>
            </li>
            <li className='mx-2'>
                <Link to='/gallery'>
                    Gallery
                </Link>
            </li>
            <li className='mx-2'>
                <Link to='/contact'>
                    Contact
                </Link>
            </li>
            <li className='mx-2'>
                <a href="#footer">
                    Extras
                </a>
            </li>
            </ul>
        </nav>
    </header>
  );
}

export default Nav;