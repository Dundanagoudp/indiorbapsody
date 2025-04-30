import React, { useState, useEffect } from "react";
import {
  PoliciesContainer,
  Title,
  Section,
  SectionTitle,
  Paragraph,
} from "../policiessection/Policies.styles";
import Loader from "../loader/ApiLoders";

const Policies = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return loading ? (
    <Loader/>
  ) : (
    <PoliciesContainer>
      <Title>PRIVACY POLICY</Title>

      <Section>
        <Paragraph>
          At Indigo Rhapsody (Sveccha) we value your privacy. This Privacy Policy explains how we collect, use, and protect your personal information when you use our fashion app and website.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>1. Information We Collect</SectionTitle>
        <Paragraph>
          We may collect the following types of information:
        </Paragraph>
        <Paragraph>
          · Personal Information: Name, email address, phone number, shipping address, and payment details (only processed securely through third-party providers).
        </Paragraph>
        <Paragraph>
          · Account Information: Username, password (encrypted), and preferences.
        </Paragraph>
        <Paragraph>
          · Device & Usage Data: Device type, IP address, browser type, pages visited, and interactions with our app or site.
        </Paragraph>
        <Paragraph>
          · Optional Information: Style preferences, wishlists, and feedback you choose to provide.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>2. How We Use Your Information</SectionTitle>
        <Paragraph>
          We use your information to:
        </Paragraph>
        <Paragraph>
          · Provide and improve our services
        </Paragraph>
        <Paragraph>
          · Process orders and payments
        </Paragraph>
        <Paragraph>
          · Send you updates, order confirmations, and promotional offers (you can opt-out anytime)
        </Paragraph>
        <Paragraph>
          · Understand user behavior to enhance our website and app experience
        </Paragraph>
        <Paragraph>
          · Prevent fraud and maintain security
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>3. How We Share Your Information</SectionTitle>
        <Paragraph>
          We do not sell your personal data. We may share your information with:
        </Paragraph>
        <Paragraph>
          · Service Providers: Trusted third parties who help us operate (e.g., payment processors, shipping companies).
        </Paragraph>
        <Paragraph>
          · Legal Requirements: If required by law or to protect our rights or users' safety.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>4. Your Choices</SectionTitle>
        <Paragraph>
          · You can update your account information at any time.
        </Paragraph>
        <Paragraph>
          · You can opt-out of marketing emails by clicking "unsubscribe."
        </Paragraph>
        <Paragraph>
          · You may request access, correction, or deletion of your data by contacting us at <a href="mailto:info@indigorhapsody.com">info@indigorhapsody.com</a>.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>5. Data Security</SectionTitle>
        <Paragraph>
          We take security seriously. Your data is stored securely, and we use encryption and other safeguards to protect it.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>6. Children's Privacy</SectionTitle>
        <Paragraph>
          Our services are not intended for children under 13. We do not knowingly collect personal information from children.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>7. Changes to This Policy</SectionTitle>
        <Paragraph>
          We may update this Privacy Policy from time to time. We'll notify you of any significant changes by posting the new version on our app or website.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>8. Contact Us</SectionTitle>
        <Paragraph>
          If you have any questions or concerns, please contact us at:
        </Paragraph>
        <Paragraph>
          📧 <a href="mailto:info@indigorhapsody.com">info@indigorhapsody.com</a>
        </Paragraph>
        <Paragraph>
          🏢 Indigo Rhapsody, Bengaluru, India
        </Paragraph>
      </Section>
    </PoliciesContainer>
  );
};

export default Policies;