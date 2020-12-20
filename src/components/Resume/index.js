import React from 'react';

function Resume() {
    

    return(
        <section>
          <div className="container">
          <h1>My Résumé</h1>
            <div>
                <img src={require(`../../assets/resume.jpg`).default} alt="resume"/>
            </div>
              </div>  
            
            
        </section>
       
    );
}
export default Resume;