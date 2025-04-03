import React from 'react';
import {
  BannerContainer,
  LeftSection,
  RightSection,
  BannerImage,
  BannerContent,
  BannerHeading,
  BannerSubheading,
  ComingSoonText,
  StoreLinksContainer,
  StoreLink,
  StoreImage,
} from './Banner.styles';

// Image imports
import googlePlayImage from '../../assets/googlePlayImage.png';
import appStoreImage from '../../assets/appStoreImage.png';
import rightBannerImage from '../../assets/banner2.png';

const Banner = () => {
  return (
    <BannerContainer>
      {/* Left Section - Text Content */}
      <LeftSection>
        <BannerContent>
          <BannerHeading>Sunshine<br></br> State Of Mind</BannerHeading>
          <BannerSubheading>Coming Soon!</BannerSubheading>
          <ComingSoonText>Shop Now</ComingSoonText>

          <StoreLinksContainer>
            <StoreLink
              href="https://play.google.com/store/apps/details?id=com.mycompany.lsdapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <StoreImage src={googlePlayImage} alt="Google Play" />
            </StoreLink>
            <StoreLink
              href="https://apps.apple.com/in/app/indigo-rhapsody/id6471662460"
              target="_blank"
              rel="noopener noreferrer"
            >
              <StoreImage src={appStoreImage} alt="App Store" />
            </StoreLink>
          </StoreLinksContainer>
        </BannerContent>
      </LeftSection>

      {/* Right Section - Image */}
      <RightSection>
        <BannerImage src={rightBannerImage} alt="Banner" />
      </RightSection>
    </BannerContainer>
  );
};

export default Banner;
