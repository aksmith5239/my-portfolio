import React from 'react';

function Project(props) {
  return (

    <div className="flex-row">
            {props.projects.map((item, i) => (
                <img 
                src = {require(`../../assets/${item.category}/${i}.png`).default}
                className='project-image' 
                // style={{ width: "25%"}}  
                alt={item.name}
                key={item.id} 
                />
            ))}
             </div>   
  );
}

export default Project;
