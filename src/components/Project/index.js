import React from 'react';
import photo from "../../assets/rrcr-dashboard.png";

function Project(props) {
    
    const currentProject = {
        name: "Roadrunner Capitol Reports",
        description: "A php mysql web application to track legislation introduced by the NM Legislature",
    };
    return(
        <section>
            <h1>{currentProject.name}</h1>
            <p>{currentProject.description}</p>
            <div >
                <img src = {photo}
                className='project-image' 
                style={{ width: "50%"}}  
                alt="project photo" 
                />
            </div>
        </section>
    );
}
export default Project;