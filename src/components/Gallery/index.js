import React from 'react';
// import { Card, CardBody, CardTitle, CardSubtitle, CardText, CardLink, } from 'reactstrap';
import vault from "../../assets/content/vault.gif"
import dadApp from "../../assets/content/dad-app.gif";
import portfolio from "../../assets/content/portfolio-1.gif"

function Gallery() {

  return (
    <section className='my-5'>
      <h1 id="gallery" className='intro'>Gallery</h1>

      <section className='flex-row'>

        <div className='card'>
          <div className='cardTitle'>Vault</div>
          <p>Express.js, MySQL2, Sequelize, Handlebars, Bulma</p>
            <img alt="Vault Demo" src={ vault } />
            <a href='https://github.com/nrenner0211/password-manager'>Repository</a> <br/>
            <a href='https://safe-escarpment-80538.herokuapp.com/'>Visit Vault</a>
        </div>

        <div className='card'>
          <div className='cardTitle'>dad-app</div>
          <p>HTML, Node.js, Materialize.css, OpenWeather API</p>
            <img alt='dad-app Demo' src ={dadApp} />
            <a href='https://github.com/nrenner0211/dad_app'>Repository</a> <br/>
            <a href='https://nrenner0211.github.io/dad_app/'>Visit dad-app</a>
        </div>

        <div className='card'>
          <div className='cardTitle'>Original Portfolio</div>
          <p>Vanilla HTML & CSS, Updated with Bootstrap</p>
            <img alt='portfolio demo' src={ portfolio } />
            <a href='https://github.com/nrenner0211/my-first-portfolio'>Repository</a> <br/>
            <a href='https://nrenner0211.github.io/my-first-portfolio/'>Visit Portfolio</a>
        </div>

      </section>
      
    </section>
  )

}


export default Gallery;