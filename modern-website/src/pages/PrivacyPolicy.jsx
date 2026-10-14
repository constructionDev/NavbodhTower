import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 2rem 5%;
  color: ${({ theme }) => theme.text || "#333"};
  max-width: 1000px;
  margin: auto;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: ${({ theme }) => theme.primary || "#f0c000"};
  margin-bottom: 1.5rem;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 1.3rem;
  margin-top: 1.8rem;
  margin-bottom: 0.8rem;
  color: ${({ theme }) => theme.primary || "#f0c000"};
`;

const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 0.8rem;
`;

const List = styled.ul`
  margin-left: 1.5rem;
  margin-bottom: 1rem;
`;

const ListItem = styled.li`
  margin-bottom: 0.4rem;
`;

const PrivacyPolicy = () => {
  return (
    <Container>
      <Title>Privacy Policy</Title>

      <Paragraph>
        <strong>Effective Date:</strong> December 29, 2025
      </Paragraph>

      <Paragraph>
        At <strong>Navbodh Tower</strong>, your privacy is important to us.
        This Privacy Policy explains how we collect, use, and protect your
        information when you visit or use our website.
      </Paragraph>

      <SectionTitle>1. Information We Collect</SectionTitle>
      <Paragraph>We may collect the following information:</Paragraph>
      <List>
        <ListItem>Name, email address, and phone number (when you submit a form).</ListItem>
        <ListItem>Information shared through inquiries or contact forms.</ListItem>
        <ListItem>IP address, browser type, and device information.</ListItem>
        <ListItem>Pages visited and time spent on the website.</ListItem>
      </List>

      <SectionTitle>2. How We Use Your Information</SectionTitle>
      <Paragraph>We use your information to:</Paragraph>
      <List>
        <ListItem>Respond to inquiries and provide requested services.</ListItem>
        <ListItem>Improve website functionality and user experience.</ListItem>
        <ListItem>Send updates or promotional communication (if opted in).</ListItem>
      </List>

      <SectionTitle>3. Sharing of Information</SectionTitle>
      <Paragraph>
        We do <strong>not</strong> sell, rent, or trade your personal information.
        Your data may only be shared:
      </Paragraph>
      <List>
        <ListItem>With trusted service providers assisting website operations.</ListItem>
        <ListItem>If required by law or legal authorities.</ListItem>
      </List>

      <SectionTitle>4. Cookies</SectionTitle>
      <Paragraph>
        We may use cookies to enhance your browsing experience. Cookies help us
        understand how users interact with our website. You can disable cookies
        through your browser settings, but some features may not function
        properly.
      </Paragraph>

      <SectionTitle>5. Data Security</SectionTitle>
      <Paragraph>
        We implement reasonable security measures to protect your personal
        information. However, no method of transmission over the internet is
        completely secure.
      </Paragraph>

      <SectionTitle>6. Third-Party Links</SectionTitle>
      <Paragraph>
        Our website may contain links to third-party websites. We are not
        responsible for the privacy practices or content of those websites.
      </Paragraph>


      <SectionTitle>7. Policy Updates</SectionTitle>
      <Paragraph>
        We may update this Privacy Policy periodically. Any changes will be
        posted on this page with a revised effective date.
      </Paragraph>

      <SectionTitle>8. Contact Information</SectionTitle>
      <Paragraph>
        If you have questions about this Privacy Policy, please contact us:
        <br />
        <strong>Email:</strong> construction@navbodh.com
      </Paragraph>
    </Container>
  );
};

export default PrivacyPolicy;
