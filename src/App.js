import React, { useState } from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Project from './components/Project';
import Footer from './components/Footer';
import ContactForm from './components/Contact';
import Resume from './components/Resume';


function App() {
  const [categories] = useState([
    {
        name: "portfolio",
        description: "a portfolio of web development work by Allison K. Smith",
    },
    {
        name: "resume",
        description: "a downloadable resume of Allison K. Smith's web development work",
    }
]);
const [currentCategory, setCurrentCategory] = useState(categories[0]);  
  return (
    <div>
      <Nav 
       categories={categories}
       setCurrentCategory={setCurrentCategory}
       currentCategory={currentCategory}
      ></Nav>
      <main >
        <Resume></Resume>
        <ContactForm></ContactForm>
        <Project currentCategory={currentCategory}></Project>
        <About></About>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
