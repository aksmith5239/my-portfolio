import React from 'react';

function Project(props) {
  return (
    <ul className="list-group">
      {props.projects.map(item => (
        <li className="list-group-item" key={item.id}>
          {item.name}
        </li>
      ))}
    </ul>
  );
}

export default Project;
