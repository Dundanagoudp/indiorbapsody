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

      <Title>TERMS & CONDITIONS</Title>

      <Section>
        <SectionTitle>1. Introduction</SectionTitle>
        <Paragraph>
          1.1 Welcome to Indigo Rhapsody.in ("the Website"). These Terms and Conditions ("Terms") govern your use of the Website and the services offered by Indigo Rhapsody.
        </Paragraph>
        <Paragraph>1.2 By accessing and using the Website, you agree to be bound by these Terms.</Paragraph>
        <Paragraph>
          1.3 Except where additional terms and conditions are provided, which are product specific, these Terms shall supersede all previous representations, understandings, arrangements or agreements.
        </Paragraph>
        <Paragraph>
          1.4 If you have any queries about the Terms, various policies, or have any comments, suggestions, or grievances, please mail us your query at <a href="mailto:contact@sveccha.in">contact@sveccha.in</a>.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>2. Account Registration</SectionTitle>
        <Paragraph>
          2.1 To use certain features of the Website, you may be required to create an account. You must provide accurate and complete information during the registration process.
        </Paragraph>
        <Paragraph>2.2 You are responsible for maintaining the confidentiality of your account and password. Any actions taken using your account will be your responsibility.</Paragraph>
      </Section>

      <Section>
        <SectionTitle>3. Product Listings</SectionTitle>
        <Paragraph>3.1 Indigo Rhapsody provides a platform for artisans and designers to list their products in the fashion, accessories, jewelry, and decor categories.</Paragraph>
        <Paragraph>
          3.2 Indigo Rhapsody reserves the right to modify or update these Terms including any policy at any time without prior notice. Continued access to the Website after any modification shall constitute acceptance of the revised Terms.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>4. Ordering and Payments</SectionTitle>
        <Paragraph>
          4.1 When you place an order through the Website or mobile application, all payments will be processed by Indigo Rhapsody.
        </Paragraph>
        <Paragraph>
          4.2 The Financial Information collected from the Users is transacted through secure digital platforms of approved payment gateways that comply with security standards.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>5. User Conduct</SectionTitle>
        <Paragraph>5.1 You agree to use the Website for lawful and non-commercial purposes only.</Paragraph>
        <Paragraph>5.2 You must not engage in any activity that may harm the integrity and security of the Website.</Paragraph>
      </Section>

      <Section>
        <SectionTitle>6. Intellectual Property</SectionTitle>
        <Paragraph>6.1 All content on the Website, including text, images, logos, and trademarks, is the intellectual property of Indigo Rhapsody.</Paragraph>
      </Section>

      <Section>
        <SectionTitle>7. Order Cancellation</SectionTitle>
        <Paragraph>7.1 If you wish to cancel your order, write to us within 24 hours at <a href="mailto:helpdesk@indigorhapsody.in">helpdesk@indigorhapsody.in</a>.</Paragraph>
      </Section>

      <Section>
        <SectionTitle>8. Limitation of Liability</SectionTitle>
        <Paragraph>8.1 Indigo Rhapsody is not responsible for any direct, indirect, or consequential damages arising from the use of the Website.</Paragraph>
      </Section>

      <Section>
        <SectionTitle>9. Termination</SectionTitle>
        <Paragraph>9.1 Indigo Rhapsody reserves the right to terminate or suspend your account or access to the Website at its discretion.</Paragraph>
      </Section>

      <Section>
        <SectionTitle>10. Changes to Terms</SectionTitle>
        <Paragraph>10.1 Indigo Rhapsody may modify these Terms from time to time. Any changes will be effective upon posting on the Website.</Paragraph>
      </Section>

      <Section>
        <SectionTitle>11. Contact</SectionTitle>
        <Paragraph>11.1 For any queries, contact us at <a href="mailto:contact@sveccha.in">contact@sveccha.in</a>.</Paragraph>
      </Section>
    </PoliciesContainer>
  );
};

export default Policies;