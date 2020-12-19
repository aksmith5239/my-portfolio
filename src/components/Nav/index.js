import React from 'react';


function Nav(props) {
  
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
      } = props;


    return(
        <header>
            <h2>
                <a href="/">
                    Allison K. Smith
                </a>
            </h2>
            <nav>
                <ul className="nav">
                    <li>
                        <a href="#about">
                            about me
                        </a>
                    </li>
                    <li>
                        <span> contact </span>
                    </li>
                    
                        {categories.map((category) => (
                            <li className={`navItem ${currentCategory.name === category.name && 'navActive'}`} key={category.name}>
                                <span onClick={() => setCurrentCategory(category.name)}>{category.name}</span>
                            </li>
                        ))}
                    
                </ul>
            </nav>
        </header>
    )
}
export default Nav;