import React from 'react';
import electio from '../../assets/content/electiopic.png';
import { DiGitBranch } from "react-icons/di"

function CurrentProject() {
    return (

        <section className="my-5">
            <h1 id="current" className='intro'> 
                Currently Working On:
            </h1>
            <div className='container'>
            
                <div className='cardTitle'>elect.io</div>
                <p className='subtitle'>MERN Stack, Google Civic Information API</p>
                <img alt="Elect.io Screenshot" src={electio} />
                <a href='https://github.com/nrenner0211/elect.io'><h1><DiGitBranch /></h1></a> 
                <a href='https://cryptic-temple-27245.herokuapp.com/'>Visit elect.io</a>
            

            </div>
        </section>
    )
};

export default CurrentProject;