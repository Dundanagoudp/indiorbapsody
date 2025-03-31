import React from 'react';
import {
  DesignContainer,
  LeftSection,
  RightSection,
  DesignHeading,
  StoreLinksContainer,
  StoreLink,
  StoreImage,
  DesignImage,
} from '../design/Designs.styles';

import TrendyDesigns1 from '../../assets/design1.png';
import TrendyDesigns2 from '../../assets/design2.png';
import TrendyDesigns3 from '../../assets/design3.png';
import googlePlayImage from '../../assets/googlePlayImage.png';
import appStoreImage from '../../assets/appStoreImage.png';

const Design = () => {
  const designs = [
    { img: TrendyDesigns1, text: "Explore Modern & Trendy Designs", reverse: false },
    { img: TrendyDesigns2, text: "Find the Perfect Design for You", reverse: true },
    { img: TrendyDesigns3, text: "Create Stunning Visuals with Ease", reverse: false },
  ];

  return (
    <div>
      {designs.map((design, index) => (
        <DesignContainer key={index} reverse={design.reverse}>
          <LeftSection>
            <DesignHeading>{design.text}</DesignHeading>
            <StoreLinksContainer>
              <StoreLink href="https://play.google.com" target="_blank" rel="noopener noreferrer">
                <StoreImage src={googlePlayImage} alt="Google Play" />
              </StoreLink>
              <StoreLink href="https://www.apple.com/app-store" target="_blank" rel="noopener noreferrer">
                <StoreImage src={appStoreImage} alt="App Store" />
              </StoreLink>
            </StoreLinksContainer>
          </LeftSection>
          <RightSection>
            <DesignImage src={design.img} alt="Trendy Designs" />
          </RightSection>
        </DesignContainer>
      ))}
    </div>
  );
};

export default Design;
