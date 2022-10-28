import React from 'react';
import vault from '../../assets/content/vault.gif'
import dadApp from '../../assets/content/dad-app.gif';
import { BiLandscape } from "react-icons/bi"
import { DiGitBranch } from "react-icons/di"


function Gallery() {

  return (
      <section className='container-fluid'>
        <h1 className='intro'><BiLandscape /> Gallery</h1>
        <section className='container-custom'>
          <div className='card'>
            <div className='cardTitle'>Vault</div>
            <p className='subtitle'>Express.js, MySQL2, Sequelize, Handlebars, Bulma</p>
            <img alt="Vault demo" className="img-fluid" src={vault} />
            <a href='https://github.com/nrenner0211/password-manager'><h1><DiGitBranch /></h1></a> 
            <a href='https://safe-escarpment-80538.herokuapp.com/'>Visit Vault</a>
          </div>

          <div className='card'>
            <div className='cardTitle'>dad-app</div>
            <p className='subtitle'>HTML, Node.js, Materialize.css, OpenWeather API</p>
            <img alt='dad-app demo' className="img-fluid" src={dadApp} />
            <a href='https://github.com/nrenner0211/dad_app'><h1><DiGitBranch /></h1></a> 
            <a href='https://nrenner0211.github.io/dad_app/'>Visit dad-app</a>
          </div>
        </section>
    </section >
  )

}


export default Gallery;