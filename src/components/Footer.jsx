import React from "react";
import styled from "styled-components";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaMailBulk, FaTwitter } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Link } from "react-router-dom";

// ======= FOOTER CONTAINER =======
const FooterContainer = styled.footer`
  width: 100%; /* Full width */
  background: ${({ theme }) => theme.cardBackground};
  padding: 4rem 2rem 2rem 2rem;
  color: ${({ theme }) => theme.text};
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

// ======= TOP SECTION =======
const TopSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;
  max-width: 1300px; /* Optional: content max width */
  margin: 0 auto;    /* Center content */
`;

// ======= COMPANY INFO =======
const CompanyInfo = styled.div`
  flex: 1 1 250px;

  h2 {
    color: ${({ theme }) => theme.primary};
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.95rem;
    line-height: 1.5;
  }
`;

// ======= LINKS =======
const Links = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h3 {
    margin-bottom: 0.5rem;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.text};
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.primary};
    }
  }
`;

// ======= CONTACT =======
const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h3 {
    margin-bottom: 0.5rem;
  }
`;

// ======= SOCIAL MEDIA =======
const SocialMedia = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 1.2rem;

  a {
    color: ${({ theme }) => theme.text};
    transition: transform 0.3s ease, color 0.3s ease;

    &:hover {
      transform: translateY(-3px);
      color: ${({ theme }) => theme.primary};
    }
  }
`;

// ======= BOTTOM SECTION =======
const BottomSection = styled.div`
  width: 100%;
  text-align: center;
  font-size: 0.9rem;
  border-top: 1px solid #ccc;
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  a {
    color: ${({ theme }) => theme.text};
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.primary};
    }
  }
`;

// ======= FOOTER COMPONENT =======
const Footer = () => {
  return (
    <FooterContainer>
      <TopSection>
        {/* Company Info */}
        <CompanyInfo>
          <h2>Navbodh Tower</h2>
          <p>
            Premium commercial spaces in Raipur, Chhattisgarh. We provide offices, retail showrooms, and corporate buildings for growing businesses.
          </p>
        </CompanyInfo>

        {/* Quick Links */}
        <Links>
          <h3>Quick Links</h3>
          <a href="/">Home</a>
          <a href="/about">About Us</a>
          <a href="/projects">Projects</a>
          <a href="/gallery">Gallery</a>
          <a href="/contact">Contact</a>
        </Links>

        {/* Contact Info */}
        <ContactInfo>
          <h3>Contact</h3>
          <p>Phone: 75910-66666 , 98733-76325</p>
          <p>Email: construction@navbodh.com</p>
          <p>Address: 2, Geetanjali Colony, Shankar Nagar, Raipur, Chhattisgarh 492001</p>

          {/* Social Media */}
          <SocialMedia>
            <a href="https://www.facebook.com/61578848643690/about/"><FaFacebookF /></a>
            <a href="https://www.instagram.com/navbodh_construction?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><FaInstagram /></a>
           <a href="mailto:navbodhconstruction@gmail.com">
  <SiGmail />
</a>
          </SocialMedia>
        </ContactInfo>
      </TopSection>

      {/* Bottom Section */}
      <BottomSection>
      <p>© {new Date().getFullYear()} Navbodh Tower | All Rights Reserved</p>

        <div>
  <Link to="/PrivacyPolicy">Privacy Policy</Link> | <Link to="/terms">Terms & Conditions</Link>
</div>
      </BottomSection>
    </FooterContainer>
  );
};

export default Footer;
