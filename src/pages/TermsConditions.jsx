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

const TermsConditions = () => {
  return (
    <Container>
      <Title> Demo Terms & Conditions</Title>

      <Paragraph><strong>Effective Date:</strong> December 29, 2025</Paragraph>

      <Paragraph>
        By accessing or using this website, you agree to comply with and be bound by the following Terms & Conditions. Please read them carefully before using the site.
      </Paragraph>

      <SectionTitle>1. Use of Website</SectionTitle>
      <Paragraph>
        You may use this website only for lawful purposes. You must not use the site in any way that could damage, disable, or impair the website or interfere with any other party’s use of the website.
      </Paragraph>

      <SectionTitle>2. Intellectual Property</SectionTitle>
      <Paragraph>
        All content on this website, including text, images, logos, and designs, is the property of the website owner or its licensors. You may not reproduce, distribute, or modify any content without prior written permission.
      </Paragraph>

      <SectionTitle>3. User Content</SectionTitle>
      <Paragraph>
        If you submit content through forms or comments, you grant us a non-exclusive, royalty-free, worldwide license to use, reproduce, and display your content on our website.
      </Paragraph>

      <SectionTitle>4. Disclaimer</SectionTitle>
      <Paragraph>
        The information provided on this website is for general informational purposes only. We do not guarantee the accuracy, completeness, or reliability of any content. Your use of the website is at your own risk.
      </Paragraph>

      <SectionTitle>5. Limitation of Liability</SectionTitle>
      <Paragraph>
        In no event shall the website owner be liable for any damages arising out of or in connection with your use of this website, including direct, indirect, incidental, or consequential damages.
      </Paragraph>

      <SectionTitle>6. Links to Other Websites</SectionTitle>
      <Paragraph>
        This website may contain links to third-party websites. We are not responsible for the content or practices of any linked sites. Please review their terms and privacy policies.
      </Paragraph>

      <SectionTitle>7. Changes to Terms</SectionTitle>
      <Paragraph>
        We may update these Terms & Conditions from time to time. Any changes will be posted on this page with the updated date. Your continued use of the website after changes indicates your acceptance of the new terms.
      </Paragraph>

      <SectionTitle>8. Governing Law</SectionTitle>
      <Paragraph>
        These Terms & Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising out of these terms will be subject to the exclusive jurisdiction of the courts in Raipur, Chhattisgarh.
      </Paragraph>

      <SectionTitle>9. Contact Us</SectionTitle>
      <Paragraph>
        If you have any questions about these Terms & Conditions, you can contact us at:<br />
        <strong>Email:</strong> your-email@example.com
      </Paragraph>
    </Container>
  );
};

export default TermsConditions;
