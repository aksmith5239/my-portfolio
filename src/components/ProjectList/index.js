import React, {useState} from 'react';


const ProjectList = ({ category }) => {
    const [projects] = useState([
        {
            name:"Roadrunner Capitol Reports",
            description: "A PHP, MySQL web application for professional government affairs consultants to track legislation at the New Mexico legislature",
            url: "https://www.roadrunnercapitol.com",
            github: "",
            category: "portfolio"
        
        },
        {
            name:"Wizier",
            description: "A JavaScript web application to help young learners have fun while they study for exams",
            url: "https://terahje.github.io/group-assignment",
            github: "https://github.com/terahje/group-assignment",
            category: "portfolio"
        }, 
        {
            name:"The Cutting Edge",
            description: "An ExpressJs, MongoDB web application to for small hair salon's to manage services and appointments",
            url: "https://terahje.github.io/group-assignment",
            github: " https://the-cutting-edge-20.herokuapp.com",
            category: "portfolio"
        }, 
        {
            name:"My Team",
            description: "A NodeJs command line application to generate teams of employees",
            url: "",
            github: " https://github.com/aksmith5239/team-profile-generator",
            category: "portfolio"
        }, 
        {
            name:"My Tech Blog",
            description: "My Tech Blog is an interactive web based blog site",
            url: "",
            github: " https://github.com/aksmith5239/team-profile-generator",
            category: "portfolio"
        }, 
        {
            name:"My Team",
            description: "A NodeJs command line application to generate teams of employees",
            url: "",
            github: " https://github.com/aksmith5239/tech-blog",
            category: "portfolio"
        }
    ])
    const currentProjects = projects.filter((project) => project.category === category);
    return(
        <div >
            <div className="flex-row">
            {currentProjects.map((image, i) => (
                <img 
                src = {require(`../../assets/${category}/${i}.png`).default}
                className='project-image' 
                style={{ width: "50%"}}  
                alt={image.name}
                key={image.name} 
                />
            ))}
             </div>   
        </div>
    );
}
export default ProjectList;