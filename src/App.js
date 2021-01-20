import React, { useState } from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Project from './components/Project';
import Footer from './components/Footer';
import ContactForm from './components/Contact';
import Resume from './components/Resume';

const projects =([
  {
  name:"Roadrunner Capitol Reports",
  description: "A PHP, MySQL web application for professional government affairs consultants to track legislation at the New Mexico legislature",
  url: "https://www.roadrunnercapitol.com",
  github: "",
  category: "portfolio"
},
{
  name:"Wizier",
  description: "A JavaScript web application to help young learners have fun while they study for exams",
  url: "https://terahje.github.io/group-assignment",
  github: "https://github.com/terahje/group-assignment",
  category: "portfolio"
}, 
{
  name:"The Cutting Edge",
  description: "An ExpressJs, MongoDB web application to for small hair salon's to manage services and appointments",
  url: " https://the-cutting-edge-20.herokuapp.com",
  github: "https://github.com/aksmith5239/cutting-edge",
  category: "portfolio"
}, 
{
  name:"My Team",
  description: "A NodeJs command line application to generate teams of employees",
  url: "",
  github: " https://github.com/aksmith5239/team-profile-generator",
  category: "portfolio"
}, 
{
  name:"My Tech Blog",
  description: "My Tech Blog is an interactive web based blog site",
  url: "https://my-tech-blog-2020.herokuapp.com/",
  github: " https://github.com/aksmith5239/team-profile-generator",
  category: "portfolio"
}, 
{
  name:"Weather Dash",
  description: "A JavaScript application to search for current weather data",
  url: "https://aksmith5239.github.io/weather-dash/",
  github: " https://github.com/aksmith5239/weather-dash",
  category: "portfolio"
},
{
  name:"The Cutting Edge - Final Cut",
  description: "MERN Application. A scheduling system for hair stylists that allows a user to choose a style, book the style and send a message for a stylist to accept and book the appointment. ",
  url: "",
  github: " https://github.com/aksmith5239/the-cutting-edge-final-cut",
  category: "portfolio"
}, 

]);

function App() {
  const [currentPage, handlePageChange] = useState('Home');

  // The renderPage method uses a switch statement to render the appropriate current page
  const renderPage = () => {
    switch (currentPage) {
      case 'Contact':
        return <ContactForm />;
      case 'Projects':
        return <Project projects={projects}/>;
      case 'Resume':
        return <Resume />;
      default:
        return <About />;
    }
  };

  return (
    <div>
      {/* Pass the state value and the setter as props to NavTabs */}
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Call the renderPage function passing in the currentPage */}
      <div>{renderPage(currentPage)}</div>
      <Footer></Footer>
    </div>
  );
}

export default App;
