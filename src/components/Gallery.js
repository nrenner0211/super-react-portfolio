import React from 'react';
import { BiLandscape } from "react-icons/bi"
import { DiGitBranch } from "react-icons/di"
import vault from '../assets/content/vault.gif'
import dadApp from '../assets/content/dad-app.gif';
import intergalacticResume from '../assets/content/intergalactic-resume.jpg';



function Gallery() {
    return (
        <section className='container-fluid'>
            <h1 className='intro'><BiLandscape /> Gallery</h1>
            <section className='container-custom'>

            <div className='gallery-card'>
                <div className='cardTitle'>3D Resumé</div>
                <p className='subtitle'>Tech stack includes JavaScript, Vite, Three.js</p>
                <img alt="3D Resume Demo" className="img img-fluid" src={intergalacticResume} />
                <a href='https://github.com/nrenner0211/intergalactic-3d-resume'><h1>Repository <DiGitBranch /></h1></a> 
                <a href='https://nrenner0211.github.io/intergalactic-3d-resume/'>Visit 3D Resumé</a>
            </div>

            <div className='gallery-card'>
                <div className='cardTitle'>Vault</div>
                <p className='subtitle'>Tech stack includes Node.js, JavaScript, MySQL2, Sequelize ORM, Handlebars templating engine, Bulma CSS Framework</p>
                <img alt="Vault demo" className="img img-fluid" src={vault} />
                <a href='https://github.com/nrenner0211/password-manager'><h1>Repository <DiGitBranch /></h1></a> 
                <a href='https://safe-escarpment-80538.herokuapp.com/'>Visit Vault</a>
            </div>

            <div className='gallery-card'>
                <div className='cardTitle'>dad-app</div>
                <p className='subtitle'>Tech stack includes HTML5, CSS, JavaScript, Materialize.css, OpenWeather API</p>
                <img alt='dad-app demo' className="img img-fluid" src={dadApp} />
                <a href='https://github.com/nrenner0211/dad_app'><h1>Repository <DiGitBranch /></h1></a> 
                <a href='https://nrenner0211.github.io/dad_app/'>Visit dad-app</a>
            </div>
            </section>
        </section >
    )
}


export default Gallery;