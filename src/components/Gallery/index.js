import React from 'react';
import vault from "../../assets/content/vault.gif";
import dadApp from "../../assets/content/dad-app.gif";

function Gallery() {
  return (

    <section className="hero">

      <div className="flex-row">

          {/* vault */}
      <h1 className="title">Vault</h1>
      <p className="subtitle">A secure password manager</p>
          <img
            src={vault}
            alt="Vault application"
            className="img-thumbnail mx-1"
          />

          {/* dad-app */}

          <img
            src={dadApp}
            alt="dad-app"
            className="img-thumbnail mx-1"
          />

      </div>
    </section>

  );
}
export default Gallery;