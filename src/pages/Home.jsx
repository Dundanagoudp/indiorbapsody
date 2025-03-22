import React, { useState, useEffect } from 'react';
import Banner from '../components/homesection/Banner';
import Vision from '../components/homesection/Vision';
import Design from '../components/design/Designs';
import Contact from '../components/contactsection/Contact';
import Loader from "../components/loader/ApiLoders";
import Blog from '../components/blogsection/Blog';

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? <Loader /> : (
        <>
          <Banner />
          <Vision />
          <Design />
          <Blog/>
          <Contact />

        </>
      )}
    </div>
  );
};

export default Home;