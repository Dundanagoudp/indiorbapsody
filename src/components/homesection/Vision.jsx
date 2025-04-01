import React from 'react';
import {
  VisionContainer,
  VisionHeading,
  MissionHeading,
  VisionText,
  MissionText,
} from '../homesection/Vision.styles';

const Vision = () => {
  return (
    <div style={{ backgroundColor: '#E6DCDC' }}>
      <VisionContainer>
        <VisionHeading>Vision</VisionHeading>
        <VisionText>
          Our Vision Is To Be The Premier Platform That Celebrates The Artistry Of Fashion Designers Worldwide.
        </VisionText>

        <MissionHeading>Mission</MissionHeading>
        <MissionText>
          Indigo Rhapsody is an app-based marketplace designed for consciously crafted fashion and design. 
          It offers a curation of works from visionary fashion designers, brands, and artisans committed 
          to shaping the future of sustainable style.
        </MissionText>
        <MissionText>
          It transforms the shopping experience into an act of purpose. Here, eco-friendly fabrics and 
          handmade treasures weave a rhapsody of style and value, allowing customers to discover exclusive 
          collections that elevate their wardrobe while supporting brands dedicated to ethical practices.
        </MissionText>
        <MissionText>
          Indigo Rhapsody is more than just a platform. It's a movement that redefines couture by 
          prioritizing eco-friendly accessories, handmade home décor, and fashion that empowers both the 
          planet and its communities. Every purchase on Indigo Rhapsody is a step toward positive change, 
          empowering buyers to join a growing movement that celebrates sustainability and conscious living.
        </MissionText>
        <MissionText>
          It's easier than ever to shop with intention, knowing that each item not only looks good but 
          also does good for the world, proving that fashion can be a force for a better tomorrow.
        </MissionText>
      </VisionContainer>
    </div>
  );
};

export default Vision;