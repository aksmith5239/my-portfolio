import React from 'react';
import MyResume from '../../assets/resume.jpg';

function Resume() {
    

    return(
        <section>
          <div className="container">
          <h1>My Résumé</h1>
          <div>
            <button><a target="_blank" rel="noreferrer" href={MyResume}>Click to Download Printable Resume</a></button>
          </div>
            <div>
              <img src={require(`../../assets/resume.jpg`).default} alt="resume"/>
            </div>
              </div>  
            
            
        </section>
       
    );
}
export default Resume;