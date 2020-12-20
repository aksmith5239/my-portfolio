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
                    <div className="modal-buttons">  
                        <button className="link-button"><a href={url}>Visit Web Site</a></button>
                        <div className="divider" /> 
                        <button className="link-button"><a href={github}>Git Hub Repo</a></button> 
                        <div className="divider" /> 
                        <button className="close" onClick={onClose} type="button">Close Modal</button>
                    </div> 
                </div>
            </div>
        
    );
}

export default Modal;