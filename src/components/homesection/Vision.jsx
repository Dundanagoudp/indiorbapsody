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
        Our Mission Is To Bridge The World Of Fashion And Freedom Through A Dynamic Platform That Curates The Most Creative And Unique Apparel Designs From Talented Fashion Designers. We Are Dedicated To Revolutionizing The Fashion Industry By Treating Every Individual As A Unique Canvas For Self-Expression.
      </MissionText>
      <MissionText>
        We Believe In Giving Users The Power To Choose From Our Collection Or Customize Their Clothing With Their Own Ideas, While Fostering Collaboration With Designers Who Can Bring These Visions To Life. At Sveccha, We Are Dedicated To Elevate The Essence Of Freedom And The Beauty Of Personal Expression In Fashion By Enabling Personal Style, Celebrating Diversity, And Fostering A Community Where Fashion Truly Meets Freedom.
      </MissionText>
    </VisionContainer>
    </div>
  );
};

export default Vision;