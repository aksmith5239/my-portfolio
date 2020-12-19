import React from 'react';
import portfolioImage from "../../assets/portfolio-image.jpg";

function About() {
    return(
        <section>
            <h1 id="about">About Me!</h1>
            <img src={portfolioImage} className='portfolio-image' style={{ width: "25%"}} alt="portfolio" />
            <div>
                <p>My Name is Allison Smith. By profession, I am a lobbyist in the state of New Mexico. I began creating web applications when I had the idea to create a legislative tracking and reporting service to improve the way I communicated with my clients. I figured quickly that the best way to create this system, was to make it web-based. I set out to learn the basics of HTML, CSS, PHP, MySql and created Roadrunner Capitol Reports. That one application spurred a desire to learn more about software development and use my talents and solid work ethic to create applications for others. I am now adding Javascript, NodeJs, React and ExpressJS to my library of coding experience.</p>
            </div>

        </section>
    );
}

export default About;