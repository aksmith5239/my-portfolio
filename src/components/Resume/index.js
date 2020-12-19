import React from 'react';

function Resume() {
    

    return(
        <section>
            <h1>My Résumé</h1>
            <div>
                <img src={require(`../../assets/resume.jpg`).default} alt="resume"/>
            </div>
            
        </section>
       
    );
}
export default Resume;