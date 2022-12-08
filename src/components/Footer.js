import React from 'react';
import github from '../assets/cover/gh-screenshot.png';
import linkedin from '../assets/cover/linkedin.png';
import { FaMobileAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import { FiMail, FiDownload } from 'react-icons/fi';
import { IoMdShare } from 'react-icons/io';

function Footer() {
    return (
        <section className='container-fluid'>
            <h1 className='footerIntro'><IoMdShare /> Socials & More</h1>
            <div className='nav'>
                <button class='btn'>
                    <a href="mailto://nrenner0211@gmail.com"><FiMail /> nrenner0211@gmail.com</a>
                </button>
                <button class='btn'>
                    <a href="tel:681.443.1530"><FaMobileAlt /> (681) 443-1530</a>
                </button>
                <button class='btn'>
                    <a href="https://docs.google.com/document/d/13DlB6UvOeICmNPo0Wa2KsTLz3KguqtGZYS50eYDBWw4/edit?usp=sharing" target={'_blank'} rel="noreferrer"><FiDownload /> Resumé</a>
                </button>
            </div>
            
                <div className='nav'>
                    <div className='card'>
                        <div className='cardTitle'>
                            <FaLinkedin /> LinkedIn
                        </div>
                        <a href='https://www.linkedin.com/in/nicolette-renner' target={'_blank'} rel="noreferrer">
                        <img className='img-fluid screenshot' alt='LinkedIn profile screenshot' src={linkedin}></img></a>
                    </div>
                    <div className='card'>
                        <div className='cardTitle'><FaGithub /> GitHub</div>
                        <a href='https://github.com/nrenner0211' target={'_blank'} rel="noreferrer"><img className='img-fluid screenshot' alt='GitHub profile screenshot' src={github}></img></a>
                    </div>
                </div>
        </section>
    )
}

export default Footer;