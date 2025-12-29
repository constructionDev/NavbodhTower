import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 2rem 5%;
  color: ${({ theme }) => theme.text || "#333"};
`;

const Title = styled.h1`
  font-size: 2rem;
  color: ${({ theme }) => theme.primary || "#f0c000"};
  margin-bottom: 1.5rem;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 1.3rem;
  margin-top: 1.5rem;
  margin-bottom: 0.8rem;
  color: ${({ theme }) => theme.primary || "#f0c000"};
`;

const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 1rem;
`;

const PrivacyPolicy = () => {
  return (
    <Container>
      <Title>Demo Privacy Policy</Title>

      <Paragraph><strong>Effective Date:</strong> December 29, 2025</Paragraph>

      <Paragraph>
        Your privacy is important to us. This Privacy Policy explains how we
        collect, use, and protect your information when you visit or use our
        website.
      </Paragraph>

      <SectionTitle>1. Information We Collect</SectionTitle>
      <Paragraph>
        We may collect information that you provide directly to us, such as:
        <ul>
          <li>Your name and email address (if you fill out a contact form).</li>
          <li>Any information you submit through forms, comments, or inquiries.</li>
        </ul>
        We may also automatically collect certain information when you visit our site, such as:
        <ul>
          <li>IP address and browser type.</li>
          <li>Pages you visit on our site and the time spent on them.</li>
        </ul>
      </Paragraph>

      <SectionTitle>2. How We Use Your Information</SectionTitle>
      <Paragraph>
        We use the information we collect to:
        <ul>
          <li>Respond to your inquiries or requests.</li>
          <li>Improve and maintain our website.</li>
          <li>Send updates or information if you opt in.</li>
        </ul>
      </Paragraph>

      <SectionTitle>3. Sharing Your Information</SectionTitle>
      <Paragraph>
        We do <strong>not</strong> sell, rent, or trade your personal information. We may share your information only:
        <ul>
          <li>With service providers who help us operate the website.</li>
          <li>If required by law or to protect our rights.</li>
        </ul>
      </Paragraph>

      <SectionTitle>4. Cookies</SectionTitle>
      <Paragraph>
        Our website may use cookies to improve your experience. Cookies are small files stored on your device that help us understand how visitors use our site. You can disable cookies in your browser, but some features may not work properly.
      </Paragraph>

      <SectionTitle>5. Security</SectionTitle>
      <Paragraph>
        We take reasonable steps to protect your information, but no website or internet transmission is 100% secure. We cannot guarantee absolute security of your data.
      </Paragraph>

      <SectionTitle>6. Links to Other Websites</SectionTitle>
      <Paragraph>
        Our website may contain links to other websites. We are <strong>not responsible</strong> for the privacy practices of other sites. Please read their privacy policies when visiting them.
      </Paragraph>

      <SectionTitle>7. Children’s Privacy</SectionTitle>
      <Paragraph>
        Our website is <strong>not intended for children under 13</strong>. We do not knowingly collect personal information from children under 13.
      </Paragraph>

      <SectionTitle>8. Changes to This Policy</SectionTitle>
      <Paragraph>
        We may update this Privacy Policy from time to time. Any changes will be posted on this page with the updated date.
      </Paragraph>

      <SectionTitle>9. Contact Us</SectionTitle>
      <Paragraph>
        If you have any questions about this Privacy Policy, you can contact us at:<br />
        <strong>Email:</strong> your-email@example.com
      </Paragraph>
    </Container>
  );
};

export default PrivacyPolicy;
