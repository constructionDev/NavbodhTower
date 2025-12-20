import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import brochure from "../assets/brochure.pdf";
import Footer from "../components/Footer"; // Import your footer

// Container
const Container = styled.div`
  padding: 2rem 5%;
`;

// Page Title
const Title = styled.h1`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 1rem;
  text-align: center;
`;

// Tagline
const Tagline = styled.p`
  text-align: center;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 2rem;
`;

// Animated Character/Icon wrapper
const AnimatedCharacter = styled(motion.div)`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #4f46e5, #6366f1);
  border-radius: 50%;
  margin: 0 auto 2rem auto;
`;

// Form Section
const FormContainer = styled(motion.form)`
  max-width: 600px;
  margin: 0 auto 3rem auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background: ${({ theme }) => theme.cardBackground};
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.1);
`;

// Input and Textarea
const Input = styled.input`
  padding: 0.8rem 1rem;
  border-radius: 10px;
  border: 1px solid #ccc;
  font-size: 1rem;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  transition: all 0.3s ease;

  &:focus {
    border-color: ${({ theme }) => theme.primary};
    outline: none;
  }
`;

const Textarea = styled.textarea`
  padding: 0.8rem 1rem;
  border-radius: 10px;
  border: 1px solid #ccc;
  font-size: 1rem;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  resize: vertical;
  min-height: 120px;
  transition: all 0.3s ease;

  &:focus {
    border-color: ${({ theme }) => theme.primary};
    outline: none;
  }
`;

// Submit Button
const SubmitButton = styled.button`
  background: ${({ theme }) => theme.primary};
  color: #fff;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 10px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.85;
    transform: translateY(-2px);
  }
`;

// Company Info Section
const InfoSection = styled.div`
  max-width: 800px;
  margin: 2rem auto 3rem auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media(max-width: 768px){
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const InfoCard = styled(motion.div)`
  background: ${({ theme }) => theme.cardBackground};
  padding: 1.5rem;
  border-radius: 15px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.1);
`;

const InfoTitle = styled.h4`
  color: ${({ theme }) => theme.primary};
  margin-bottom: 0.5rem;
`;

const InfoText = styled.p`
  color: ${({ theme }) => theme.text};
`;

// Google Map Embed
const MapWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto 3rem auto;
  border-radius: 15px;
  overflow: hidden;

  iframe {
    width: 100%;
    height: 400px;
    border: 0;
  }
`;

// Brochure Section
const BrochureSection = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
`;

const DownloadButton = styled.a`
  background: ${({ theme }) => theme.primary};
  color: #fff;
  padding: 0.7rem 1.5rem;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.85;
    transform: translateY(-3px);
  }
`;

// Framer Motion Variants
const formVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", duration: 0.8, bounce: 0.3 } 
  }
};

const infoVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const characterAnimation = {
  animate: { y: [0, -15, 0], rotate: [0, 10, -10, 0] },
  transition: { repeat: Infinity, duration: 4 }
};

const Contact = () => {
  return (
    <>
      <Container>
        <Title>Contact Us</Title>
        <Tagline>We’d love to hear from you. Reach out for any queries or visit us!</Tagline>

        {/* Animated Character */}
        <AnimatedCharacter
          animate={characterAnimation.animate}
          transition={characterAnimation.transition}
        />

        {/* Contact Form */}
        <FormContainer
          variants={formVariants}
          initial="hidden"
          animate="visible"
        >
          <Input type="text" placeholder="Your Name" />
          <Input type="email" placeholder="Your Email" />
          <Input type="text" placeholder="Subject" />
          <Textarea placeholder="Your Message" />
          <SubmitButton type="submit">Send Message</SubmitButton>
        </FormContainer>

        {/* Company Info */}
        <InfoSection>
          <InfoCard
            variants={infoVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <InfoTitle>Address</InfoTitle>
            <InfoText>Navbodh Tower, Raipur, Chhattisgarh</InfoText>
          </InfoCard>
          <InfoCard
            variants={infoVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <InfoTitle>Contact</InfoTitle>
            <InfoText>Phone: +91 12345 67890</InfoText>
            <InfoText>Email: info@navbodhtower.com</InfoText>
          </InfoCard>
        </InfoSection>

        {/* Google Map */}
      <MapWrapper>
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.5430058948464!2d81.6603450743615!3d21.24996298014607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dd0079aafe6d%3A0xd393eb546300f1f5!2sNAVBODH%20TOWER!5e0!3m2!1sen!2sin!4v1766224455698!5m2!1sen!2sin"
    title="Navbodh Tower Location"
    allowFullScreen
    loading="lazy"
  ></iframe>
</MapWrapper>


        {/* Download Brochure */}
        <BrochureSection>
          <DownloadButton href={brochure} download>
            Download Company Brochure
          </DownloadButton>
        </BrochureSection>
      </Container>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Contact;
