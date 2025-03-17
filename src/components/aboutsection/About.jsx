import React, { useState, useEffect } from "react";
import { AboutContainer, Title, Content } from "../aboutsection/About.styles";
import Loader from "../loader/ApiLoders";

const About = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <AboutContainer>
      <Title>About Us</Title>
      <Content>
        <p>
          In the vibrant heart of Bangalore, the Indigo Rhapsody team embarked on a mission to establish a thriving platform that celebrated the artistry of fashion designers and skilled artisans. However, as they delved deeper into the fashion world and engaged in candid conversations with industry experts, designers, and artisans, an awakening occurred. They realized that their initial vision wasn’t effectively addressing the profound challenges looming over the fashion industry.
        </p>
        <p>
          This pivotal moment triggered a paradigm shift, steering them towards a more significant and urgent goal: sustainability. Acknowledging the pressing environmental issues, Indigo Rhapsody made a conscientious pivot. They transformed from being a mere marketplace into a discerning curator of both fashion designer apparel and sustainable products, masterfully striking a balance between the two.
        </p>
        <p>
          They recognize that perfection may be a distant horizon, but their commitment is resolute. Indigo Rhapsody has seamlessly integrated fashion designer apparel with sustainable goods, creating an oasis for conscious consumers. Indigo Rhapsody is not just a place to shop; it’s a movement that promotes responsible consumerism and supports fashion innovation that doesn’t harm the planet.
        </p>
        <p>
          We believe that the future of fashion is sustainable, and we’re here to lead the way. In an industry where achieving 100% sustainability remains an elusive aspiration, Indigo Rhapsody stands as a shining example of taking one step at a time towards the ultimate goal of sustainability.
        </p>
      </Content>
    </AboutContainer>
  );
};

export default About;