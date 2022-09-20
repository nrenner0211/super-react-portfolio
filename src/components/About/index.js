import React from 'react';
import coverImage from "../../assets/cover/zoronik.jpg";

function About() {
  return (
    
    <section className="my-5">
        <h1 id="about" className='intro'>About Me</h1>
        <div className='container center'><img src={coverImage} className="my-5 isRounded" style={{ width: "50%" }} alt="cover" /></div>
          
          <div className='container center'>

          <p className='transition'>
            <div>Hello! I'm Niki, an aspiring Full-Stack Developer. Thanks for checking out my portfolio! In my free time, you can find me gardening and playing with my dogs.</div> 

            <div className='cardTitle'>
              Causes I'm passionate about:
            </div>
            <a href='https://savethebees.com/'>Save the Bees</a>
            <br/>
            <a href='https://nami.org/Get-Involved/Awareness-Events/Mental-Health-Awareness-Month'>Mental Health Awareness</a>
          </p>
          
          
        </div>
    </section>
    
  );
}

export default About;