import React from 'react';

// Props are passed through our functional component.
function Nav(props) {
  const tabs = ['About', 'Resume', 'Contact', 'Projects'];
  return (
 
     <header>
      <h2><a href="/">Allison K. Smith</a></h2> 
     
  
      <ul className="nav nav-tabs">
      {tabs.map(tab => (
        <li className="nav-item" key={tab}>
          <a
            href={'#' + tab.toLowerCase()}
            // Whenever a tab is clicked on,
            // the current page is set through the handlePageChange props.
            onClick={() => props.handlePageChange(tab)}
            className={
              props.currentPage === tab ? 'nav-link active' : 'nav-link'
            }
          >
            {tab}
          </a>
        </li>
      ))}
    </ul>
    </header>
   
  );
}

export default Nav;
