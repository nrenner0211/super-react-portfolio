import React from 'react';
import { Link } from 'react-router-dom';
import favicon from '../../assets/cover/favicon.ico';
import { FaHome } from "react-icons/fa";

function Nav() {

    return (
        <header>
            <nav className='navbar'>
                <ul className="flex-row">
                    <li className="mx-2">
                        <Link to="/" title="home" aria-label="home">
                            <span>
                                <img aria-label="favicon" alt='favicon' src={favicon} style={{ width: "2.25rem" }}></img><h2 style={{ fontSize: "2.25rem", marginRight: "3rem" }}>&nbsp;&nbsp;Nicolette Renner
                                </h2>
                            </span>
                        </Link>
                    </li>
                    <li className="mx-2">
                        <Link to='/'>
                            <FaHome></FaHome>
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
                            More
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;