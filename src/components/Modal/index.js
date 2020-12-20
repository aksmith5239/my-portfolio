import React from 'react';

const Modal = ({ onClose, selectedProject}) => {
    const {name, description, url, github} = selectedProject;
    return(
      
            <div className="modal-backdrop">
                <div className="modal-container">
                    <h3>{name}</h3>
                    <p>
                        {description}  
                    </p>
                        
                       <button className="link-button"><a href={url}>Visit Web Site</a></button> 

                       <button className="link-button"><a href={github}>Git Hub Repo</a></button> 
                      
                        
                    <button onClick={onClose} type="button">Close Modal</button>
                </div>
            </div>
        
    );
}

export default Modal;