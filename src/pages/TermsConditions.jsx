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
  margin-bottom: 1rem;
`;

const TermsConditions = () => {
  return (
    <Container>
      <Title>Terms & Conditions</Title>

      <Paragraph>
        <strong>Effective Date:</strong> December 29, 2025
      </Paragraph>

      <Paragraph>
        By accessing or using <strong>Navbodh Tower</strong>, you agree to
        comply with and be bound by these Terms & Conditions. If you do not agree,
        please do not use the website.
      </Paragraph>

      <SectionTitle>1. Use of Website</SectionTitle>
      <Paragraph>
        You agree to use this website only for lawful purposes. You must not use
        the website in any way that may damage, disable, overburden, or impair
        the site or interfere with any other user's access.
      </Paragraph>

      <SectionTitle>2. Intellectual Property Rights</SectionTitle>
      <Paragraph>
        All content on this website, including text, images, graphics, logos,
        and design elements, is the property of the website owner and is
        protected by applicable intellectual property laws. Unauthorized use is
        strictly prohibited.
      </Paragraph>

      <SectionTitle>3. User Submissions</SectionTitle>
      <Paragraph>
        Any information or content submitted through forms or communication
        channels may be used by us to respond to inquiries or improve our
        services. You confirm that submitted information is accurate and lawful.
      </Paragraph>

      <SectionTitle>4. Disclaimer</SectionTitle>
      <Paragraph>
        The website content is provided for general informational purposes only.
        We make no warranties regarding accuracy, completeness, or reliability.
        Use of the website is at your own risk.
      </Paragraph>

      <SectionTitle>5. Limitation of Liability</SectionTitle>
      <Paragraph>
        Under no circumstances shall we be liable for any direct, indirect,
        incidental, or consequential damages arising from your use of or
        inability to use this website.
      </Paragraph>

      <SectionTitle>6. Third-Party Links</SectionTitle>
      <Paragraph>
        This website may contain links to external websites. We do not control
        or endorse the content of such sites and are not responsible for their
        practices or policies.
      </Paragraph>

      <SectionTitle>7. Modifications to Terms</SectionTitle>
      <Paragraph>
        We reserve the right to update or modify these Terms & Conditions at any
        time. Continued use of the website after changes constitutes acceptance
        of the revised terms.
      </Paragraph>

      <SectionTitle>8. Governing Law</SectionTitle>
      <Paragraph>
        These Terms & Conditions shall be governed by and interpreted in
        accordance with the laws of India. Any disputes shall be subject to the
        jurisdiction of courts located in Raipur, Chhattisgarh.
      </Paragraph>

      <SectionTitle>9. Contact Information</SectionTitle>
      <Paragraph>
        If you have any questions regarding these Terms & Conditions, please
        contact us at:
        <br />
        <strong>Email:</strong> construction@navbodh.com
      </Paragraph>
    </Container>
  );
};

export default TermsConditions;
