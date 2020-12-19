import React from 'react';
import ProjectList from '../ProjectList';

function Project(props) {
    const { currentCategory } = props;
    const currentProject = {
        name: "My Portfolio",
        description: "A collection of web applications built by Allison K. Smith",
    };
    return(
        <section>
            <h1>{currentProject.name}</h1>
            <p>{currentProject.description}</p>
            <ProjectList category={currentCategory.name} />
            
        </section>
    );
}
export default Project;