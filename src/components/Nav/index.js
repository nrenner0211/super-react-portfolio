import React from 'react';


function Nav() {

  return (
    <header>
        <h2>
            <a href="/">
            <span role="img" aria-label="emoji">🎨</span> Nicolette Renner
            </a>
        </h2>
        <nav className='navbar'>
            <ul className="flex-row">
            <li className="mx-2">
                <a href='#about'>
                    About
                </a>
            </li>
            <li className='mx-2'>
                <a href='/gallery'>
                    Gallery
                </a>
            </li>
            <li className='mx-2'>
                <a href='/contact'>
                    Contact
                </a>
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