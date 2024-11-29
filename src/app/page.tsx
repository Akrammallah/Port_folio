import React from 'react'
import Home from './Componants/Home';
import Projects from "../app/Projects/page";
import ContactForm from './Componants/ContactForm';
import About from "@/app/About/page";
import Footer from './Componants/Footer';

const page = () => {
  return (
    <div>
      <Home/>
      <Projects/>
      <About/>

      <ContactForm/>
      <Footer/>
      

    </div>
  )
}

export default page
