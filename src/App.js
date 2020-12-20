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

const [contactSelected, setContactSelected] = useState(false);

// const [resumeSelected, setResumeSelected] = useState(false);

  return (
    <div>
      <Nav 
       categories={categories}
       setCurrentCategory={setCurrentCategory}
       currentCategory={currentCategory}
       contactSelected={contactSelected}
       setContactSelected={setContactSelected}
      ></Nav>
      <main >
        {!contactSelected ? (
        <>
        <Project currentCategory={currentCategory}></Project>
        <About></About>
        <Resume></Resume>
        </>
        ) : (
          <ContactForm></ContactForm>
        )}
       
       

      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
