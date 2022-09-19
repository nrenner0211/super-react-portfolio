import React from 'react';
import coverImage from "../../assets/cover/zoronik.jpg";

function About() {
  return (
    
    <section className="my-5">
        <h1 id="about" className='intro'>About Me</h1>
        <div className='center'>
          <img src={coverImage} className="my-2 isRounded" style={{ width: "40%" }} alt="cover" />
          <p className='card'>
            Hello! Thanks for checking out my new and improved portfolio, built with React. I'm Niki, an aspiring Full-Stack Developer and a creative soul who loves to learn and build. While working my construction day job, I have spent the last year learning how to code through a bootcamp and with endless open-source education on the internet. In my free time, you can find me gardening and playing with my dogs. 

            <div className='cardTitle'>
              Causes I'm passionate about:
            </div>
            <a href="https://savethebees.com/">Save the Bees</a>
          </p>
          
          
        </div>
    </section>
    
  );
}

export default About;