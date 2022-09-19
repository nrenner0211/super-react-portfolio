import React from 'react';
import coverImage from "../../assets/cover/zoronik.jpg";

function About() {
  return (
    
    <section className="my-5">
        <h1 id="about" className='intro'>About Me</h1>
        <div className='center'>
          <img src={coverImage} className="my-2 isRounded" style={{ width: "25%" }} alt="cover" />
          <p className='center'>
            Hello! Thanks for checking out my new and improved React Portfolio. I'm Niki, an aspiring Full-Stack Developer and a creative soul who loves to learn and build. While working my construction day job, I have spent the last year learning how to code through a bootcamp and with endless open-source education on the internet. 
          </p>
        </div>
    </section>
    
  );
}

export default About;