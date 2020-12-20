import React from 'react';

const Modal = ({ onClose, selectedProject}) => {
    const {name, description, url, github} = selectedProject;
    return(
      
            <div className="modal-backdrop">
                <div className="modal-container">
                    <h3>{name}</h3>
                    <p>
                        {description}
                        {url}
                        {github}
                    </p>
                    <button onClick={onClose} type="button">Close Modal</button>
                </div>
            </div>
        
    );
}

export default Modal;