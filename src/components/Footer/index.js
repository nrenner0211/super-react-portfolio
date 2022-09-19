import React from 'react';
import github from '../../assets/cover/gh-screenshot.png';
import linkedin from '../../assets/cover/linkedin.png';

function Footer () {
    return(
        <section className='my-5'>
            <h1 id='footer' className='intro'>Socials & More</h1>

            <section className='flex-column center'>


                <div className='card'>

                        <div className='cardTitle'>LinkedIn</div>
                        <a href='www.linkedin.com/in/nicolette-renner'><img className='screenshot' alt='LinkedIn profile screenshot' src={ linkedin }></img></a>

                </div>

                <div className='card'>

                    <a href="mailto://nrenner0211@gmail.com">&#128231;Email</a>
                    <br/>
                    <a href="tel:681.443.1530">&#128242;Phone</a>
                    <br/>
                    <a href="https://docs.google.com/document/d/1_cKcm8su5IJsvIRQgv5t-ZNC9XwxU1QRKR7VMmWz2P0/edit?usp=sharing">📥Download Resume</a>

                </div>

                <div className='card'>

                        <div className='cardTitle'>GitHub</div>
                        <a href='https://github.com/nrenner0211'><img className='screenshot' alt='GitHub profile screenshot' src={ github }></img></a>

                </div>



            </section>
            <script src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript"></script>
        </section>
    )
}

export default Footer;