import React from 'react'
import Banner from '../components/homesection/Banner';
import Vision from '../components/homesection/Vision';
import Design from '../components/design/Designs';
import Contact from '../components/contactsection/Contact';

const Home=()=> {
  return (
    <div>
      <Banner />
      <Vision />
      <Design />
      <Contact/>
    </div>
  )
}

export default Home;
