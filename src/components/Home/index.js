// external imports
import React from 'react';
import { MdOutlineWavingHand } from "react-icons/md";
import { GoFlame } from "react-icons/go";

// internal imports
import coverImage from "../../assets/cover/nikiavatar.jpg";

function Home() {
  return (
    <section className="container-fluid">
      <h1 className='intro'> 
        About&nbsp;Me <MdOutlineWavingHand />
      </h1>
        <div className='container-custom'>
        <img src={coverImage} className="img-fluid avatar" alt="Avatar" />
          <p className='card'> 
            I'm Niki, certified Full Stack Coder with 1+ years experience in web development. Skilled front-end developer. Lifelong learner. What can I do for you? <br/>
            <strong>Top Skills: </strong> HTML, CSS, Sass, Javascript, Node.js, MERN Stack, React.js, Progressive Web Applications, Web Accessibility Standards <br/>
            <strong>Seeking Remote Work in the USA</strong> <br/>
            <a href="https://nrenner0211.github.io/my-first-portfolio/">View HTML, Bootstrap, & Sass Portfolio</a> <br/>
            <a href="https://docs.google.com/document/d/13DlB6UvOeICmNPo0Wa2KsTLz3KguqtGZYS50eYDBWw4/edit?usp=sharing" target={'_blank'} rel="noreferrer">View Resumé</a>
          </p>
        </div>
        <div className='cardTitle container-custom'>
          <ul className='row'>
            <li>
            <GoFlame /> I'm passionate about:
            </li>
            <li>
              <a href='https://savethebees.com/'>Save the Bees</a>
            </li>
            <li>
              <a href='https://nami.org/Get-Involved/Awareness-Events/Mental-Health-Awareness-Month'>Mental Health Awareness</a>
            </li>
          </ul>
        </div>

    </section>
  );
}

export default Home;