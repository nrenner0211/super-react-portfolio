import React from 'react';
// import { Card, CardBody, CardTitle, CardSubtitle, CardText, CardLink, } from 'reactstrap';
import vault from "../../assets/content/vault.gif"
import dadApp from "../../assets/content/dad-app.gif";

function Gallery() {

  return (
    <section className='my-5'>
      <h1 id="gallery" className='intro'>Gallery</h1>

      <section className='flex-row'>
        <div className='card'>
          <div className='cardTitle'>Vault</div>
            <a href="https://lh3.googleusercontent.com/dfd3cFIGjuL4RFU62v9l-K51HaYtM-3J8DnPpMcX6L0nnk-mQST6cCfwBm0PEWtCPFY=w2400?source=screenshot.guru"> <img alt="Vault Demo" src={ vault } /> </a>
        </div>
        <div className='card'>
          <div className='cardTitle'>dad-app</div>
            <a href="https://nrenner0211.github.io/dad_app/"> <img alt="dad-app Demo" src ={dadApp} /> </a>
        </div>
      </section>
    </section>
  )

}


export default Gallery;