import React from 'react';
import github from '../../assets/cover/gh-screenshot.png';
import linkedin from '../../assets/cover/linkedin.png';
import { FaMobileAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import { FiMail, FiDownload } from 'react-icons/fi';
import { IoMdShare } from 'react-icons/io';

function Footer() {
    return (
        <section className='my-5'>
            <h1 id='footer' className='intro'><IoMdShare /> Socials & More</h1>

            <section className='flex-column center'>
                <div className='card'>
                    <div className='cardTitle'>
                        <FaLinkedin /> LinkedIn
                    </div>

                    <a href='https://www.linkedin.com/in/nicolette-renner' target={'_blank'}>

                        <img className='screenshot' alt='LinkedIn profile screenshot' src={linkedin}></img></a>

                </div>

                <div className='card'>
                    <a href="mailto://nrenner0211@gmail.com"><FiMail /> Email</a>
                    <br />
                    <a href="tel:681.443.1530"><FaMobileAlt /> Phone</a>
                    <br />
                    <a href="https://docs.google.com/document/d/1_cKcm8su5IJsvIRQgv5t-ZNC9XwxU1QRKR7VMmWz2P0/edit?usp=sharing" target={'_blank'}><FiDownload /> Download Resume</a>
                </div>
                <div className='card'>
                    <div className='cardTitle'><FaGithub /> GitHub</div>
                    <a href='https://github.com/nrenner0211' target={'_blank'}><img className='screenshot' alt='GitHub profile screenshot' src={github}></img></a>
                </div>
            </section>
            <script src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript"></script>
        </section>
    )
}

export default Footer;