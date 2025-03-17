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
      <Title>POLICIES</Title>
      <SectionTitle>Terms and Conditions</SectionTitle>

      <Section>
        <SectionTitle>1. Introduction</SectionTitle>
        <Paragraph>
          1.1 Welcome to Indigo Rhapsody.in (“the Website”). These Terms and Conditions (“Terms”) govern your use of the Website and the services offered by Indigo Rhapsody.
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
