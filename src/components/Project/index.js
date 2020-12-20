import React, {useState} from 'react';
import Modal from '../Modal';

function Project(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState();

  const toggleModal = (item, i) => {
    setSelectedProject({...item, index: i})
    setIsModalOpen(!isModalOpen);
  }
  return (
    
    <div className="flex-row">
     { isModalOpen && <Modal onClose={toggleModal} selectedProject={selectedProject} /> } 
            {props.projects.map((item, i) => (
                <img 
                src = {require(`../../assets/${item.category}/${i}.png`).default}
                className='project-image' 
                alt={item.name}
                onClick={() => toggleModal(item, i)}
                key={item.id} 
                />
            ))}
             </div>   
  );
}

export default Project;
