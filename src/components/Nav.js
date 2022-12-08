import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    // const [fix, setFix] = useState(false)

    // function setFixed() {
    //     if (window.scrollY >= 392) {
    //         console.log(setFix(true))
    //     } else {
    //         setFix(false)
    //     }
    // }
    // window.addEventListener("scroll", setFixed)

    return (
            <nav className='navbar'>
                <ul className='flex-start'>
                    <li>
                        <strong>Nicolette Renner</strong> <br/>
                        Full Stack Developer
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/" title="home" aria-label="home">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to='/gallery'>
                            Gallery
                        </Link>
                    </li>
                    <li>
                        <Link to='/support'>
                            Support
                        </Link>
                    </li>
                    <li>
                        <a href="#footer">
                            More
                        </a>
                    </li>
                </ul>
            </nav>
    );
}

export default Nav;