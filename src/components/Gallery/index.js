import React from 'react';
import vault from '../../assets/content/vault.gif'
import dadApp from '../../assets/content/dad-app.gif';
import portfolio from '../../assets/content/portfolio-1.gif';
import nosqlApi from '../../assets/content/nosql-api-routes.gif';
import { BiLandscape } from "react-icons/bi"
import { DiGitBranch } from "react-icons/di"
import CurrentProject from '../CurrentProject';

function Gallery() {

  return (
    <section className='my-5'>

<CurrentProject></CurrentProject>

      <h1 id="gallery" className='intro'><BiLandscape /> Gallery</h1>

      <section className='flex-row'>

        <div className='card'>
          <div className='cardTitle'>Vault</div>
          <p className='subtitle'>Express.js, MySQL2, Sequelize, Handlebars, Bulma</p>
          <img alt="Vault demo" src={vault} />
          <a href='https://github.com/nrenner0211/password-manager'><h1><DiGitBranch /></h1></a> 
          <a href='https://safe-escarpment-80538.herokuapp.com/'>Visit Vault</a>
        </div>

        <div className='card'>
          <div className='cardTitle'>dad-app</div>
          <p className='subtitle'>HTML, Node.js, Materialize.css, OpenWeather API</p>
          <img alt='dad-app demo' src={dadApp} />
          <a href='https://github.com/nrenner0211/dad_app'><h1><DiGitBranch /></h1></a> 
        <a href='https://nrenner0211.github.io/dad_app/'>Visit dad-app</a>
      </div>

      <div className='card'>
        <div className='cardTitle'>OG Portfolio</div>
        <p className='subtitle'>Vanilla HTML & CSS, Updated with Bootstrap</p>
        <img alt='portfolio demo' src={portfolio} />
        <a href='https://github.com/nrenner0211/my-first-portfolio'><h1><DiGitBranch /></h1></a> 
        <a href='https://nrenner0211.github.io/my-first-portfolio/'>Visit Portfolio</a>
      </div>

      <div className='card'>
        <div className='cardTitle'>NoSQL-API</div>
        <p className='subtitle'>Express.js, 
          MongoDB, GraphQL, Insomia</p>
        <img alt='README-Generator demo' src={nosqlApi} />
        <a href='https://github.com/nrenner0211/nosql-api'>
          <h1><DiGitBranch /></h1></a> 
      </div>

    </section>

    </section >
  )

}


export default Gallery;