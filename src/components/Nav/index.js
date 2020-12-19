import React from 'react';

function Nav() {
    
const categories = [
    {
        name: "porfolio",
        description: "a portfolio of web development work by Allison K. Smith",
    },
    {
        name: "resume",
        description: "a downloadable resume of Allison K. Smith's web development work",
    }
]
function categorySelected(name) {
    console.log(`${name} clicked`);
}
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
                        <span onClick={categorySelected}>contact </span>
                    </li>
                    
                        {categories.map((category) => (
                            <li className="navItem" key={category.name}>
                                <span onClick={() => categorySelected(category.name)}>{category.name}</span>
                            </li>
                        ))}
                    
                </ul>
            </nav>
        </header>
    )
}
export default Nav;