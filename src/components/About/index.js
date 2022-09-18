import React from 'react';
import coverImage from "../../assets/cover/zoronik.jpg";

function About() {
  return (
    
    <section className="my-5">
        <h1 id="about" className='intro'>About Me</h1>
        <img src={coverImage} className="my-2" style={{ width: "50%" }} alt="cover" />
        <p>I like dogs</p>
    </section>
    
  );
}

export default About;