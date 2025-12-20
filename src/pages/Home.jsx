import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

/* ================= CONTAINER ================= */
const Container = styled.div`
  padding: 2rem 1rem;
  max-width: 1300px;
  margin: 0 auto;
`;

// ================= SPACER =================
const Spacer = styled.div`
  height: 4rem; // Adjust space between projects and footer
`;
/* ================= HERO ================= */
const Hero = styled.section`
  min-height: 85vh;
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  align-items: center;
  gap: 2rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const HeroText = styled.div``;

const HeroTitle = styled(motion.h1)`
  font-size: 3.2rem;
  color: ${({ theme }) => theme.primary};

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.text};
  max-width: 600px;
  margin: 1rem 0;
`;

const HeroButtons = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Button = styled(motion.button)`
  padding: 0.9rem 1.8rem;
  border-radius: 30px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  background: ${({ primary }) =>
    primary
      ? "linear-gradient(135deg, #4f46e5, #6366f1)"
      : "#eee"};
  color: ${({ primary }) => (primary ? "#fff" : "#333")};
  box-shadow: ${({ primary }) =>
    primary ? "0 10px 25px rgba(79,70,229,0.4)" : "none"};
`;

/* ================= HERO IMAGE ================= */
const HeroImageWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
`;

const HeroImage = styled.img`
  width: 100%;
  max-width: 420px;
`;

/* ================= SEARCH ================= */
const SearchBox = styled(motion.section)`
  background: ${({ theme }) => theme.cardBackground};
  padding: 1.5rem;
  border-radius: 20px;
  margin: 4rem auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 1rem;
`;

const Select = styled.select`
  padding: 0.8rem;
  border-radius: 12px;
  border: 1px solid #ddd;
`;

/* ================= SECTION ================= */
const Section = styled.section`
  margin: 5rem 0;
`;

const SectionTitle = styled.h2`
  text-align: center;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 2rem;
`;

/* ================= CARDS ================= */
const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
`;

const Card = styled(motion.div)`
  background: ${({ theme }) => theme.cardBackground};
  padding: 1.5rem;
  border-radius: 20px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  cursor: pointer;
`;

const CardImage = styled.img`
  width: 100%;
  border-radius: 15px;
  margin-bottom: 1rem;
  transition: transform 0.4s ease;

  ${Card}:hover & {
    transform: scale(1.08);
  }
`;

const CardTitle = styled.h3`
  color: ${({ theme }) => theme.primary};
`;

const CardDesc = styled.p`
  color: ${({ theme }) => theme.text};
  font-size: 0.95rem;
`;

/* ================= PROCESS ================= */
const Process = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1.5rem;
  text-align: center;
`;

const ProcessCard = styled(motion.div)`
  background: ${({ theme }) => theme.cardBackground};
  padding: 1.5rem;
  border-radius: 15px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
`;

/* ================= TESTIMONIALS ================= */
const TestimonialSection = styled(Section)`
  background: ${({ theme }) => theme.cardBackground};
  padding: 3rem 2rem;
  border-radius: 20px;
`;

const TestimonialCard = styled(motion.div)`
  background: ${({ theme }) => theme.background};
  padding: 1.5rem;
  border-radius: 15px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.1);
  text-align: center;
`;

const ClientName = styled.h4`
  margin-top: 1rem;
  color: ${({ theme }) => theme.primary};
`;

/* ================= CTA ================= */
const CTA = styled(motion.section)`
  background: linear-gradient(135deg, #4f46e5, #6366f1);
  color: white;
  padding: 3.5rem 2rem;
  border-radius: 25px;
  text-align: center;
`;

/* ================= FOOTER ================= */
const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.cardBackground};
  padding: 4rem 2rem 2rem 2rem;
  color: ${({ theme }) => theme.text};
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  max-width: 1300px;
  margin: 0 auto;
`;

const TopSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;
`;

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

const Links = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.text};
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.primary};
    }
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

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

const BottomSection = styled.div`
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
`;

/* ================= DATA ================= */
const properties = [
  {
    title: "Office Space – 500 sqft",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36",
    text: "Modern office in a prime business district.",
  },
  {
    title: "Retail Showroom",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
    text: "High visibility retail space with footfall.",
  },
  {
    title: "Corporate Office – 1500 sqft",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
    text: "Spacious corporate office for enterprises.",
  },
];

const testimonials = [
  {
    name: "Rahul Sharma",
    feedback: "Navbodh Tower provided us a perfect office space. Professional and responsive team!",
  },
  {
    name: "Anjali Verma",
    feedback: "Great experience renting a retail showroom. Prime location and easy documentation.",
  },
  {
    name: "Suresh Gupta",
    feedback: "Highly recommend Navbodh Tower for corporate offices. Excellent property management.",
  },
];

/* ================= ANIMATIONS ================= */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

/* ================= FOOTER COMPONENT ================= */
const Footer = () => (
  <FooterContainer>
    <TopSection>
      <CompanyInfo>
        <h2>Navbodh Tower</h2>
        <p>Premium commercial spaces in Raipur. Offices, retail, and corporate buildings for growing businesses.</p>
      </CompanyInfo>

      <Links>
        <h3>Quick Links</h3>
        <a href="/">Home</a>
        <a href="/about">About Us</a>
        <a href="/projects">Projects</a>
        <a href="/gallery">Gallery</a>
        <a href="/contact">Contact</a>
      </Links>

      <ContactInfo>
        <h3>Contact</h3>
        <p>Phone: +91-12345-67890</p>
        <p>Email: info@navbodhtower.com</p>
        <p>Address: 123 Business Street, Raipur, Chhattisgarh</p>

        <SocialMedia>
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaLinkedinIn /></a>
          <a href="#"><FaTwitter /></a>
        </SocialMedia>
      </ContactInfo>
    </TopSection>

    <BottomSection>
      <p>© 2025 Navbodh Tower | All Rights Reserved</p>
      <div>
        <a href="/privacy">Privacy Policy</a> | <a href="/terms">Terms & Conditions</a>
      </div>
    </BottomSection>
  </FooterContainer>
);

/* ================= COMPONENT ================= */
const Home = () => {
  return (
    <Container>
      {/* HERO */}
      <Hero>
        <HeroText>
          <HeroTitle variants={fadeUp} initial="hidden" animate="visible">
            Navbodh Tower
          </HeroTitle>
          <HeroSubtitle
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            Premium commercial spaces for offices, retail, and enterprises in
            Raipur, Chhattisgarh.
          </HeroSubtitle>
          <HeroButtons>
            <Button primary whileHover={{ scale: 1.08 }}>View Properties</Button>
            <Button whileHover={{ scale: 1.08 }}>Contact Us</Button>
          </HeroButtons>
        </HeroText>

        <HeroImageWrapper
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
        >
          <HeroImage
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="Property Icon"
          />
        </HeroImageWrapper>
      </Hero>

      {/* SEARCH */}
      <SearchBox
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Select>
          <option>Location</option>
          <option>Raipur</option>
        </Select>
        <Select>
          <option>Property Type</option>
          <option>Office</option>
          <option>Retail</option>
          <option>Warehouse</option>
        </Select>
        <Select>
          <option>Budget</option>
          <option>₹20k – ₹50k</option>
          <option>₹50k+</option>
        </Select>
        <Button primary whileHover={{ scale: 1.05 }}>Search</Button>
      </SearchBox>

      {/* FEATURED */}
      <Section>
        <SectionTitle>Featured Properties</SectionTitle>
        <CardsContainer>
          {properties.map((item, i) => (
            <Card key={i} variants={fadeUp} initial="hidden" whileInView="visible" whileHover={{ y: -10 }}>
              <CardImage src={item.image} />
              <CardTitle>{item.title}</CardTitle>
              <CardDesc>{item.text}</CardDesc>
            </Card>
          ))}
        </CardsContainer>
      </Section>

      {/* PROCESS */}
      <Section>
        <SectionTitle>Our Process</SectionTitle>
        <Process>
          {["Requirement", "Shortlist", "Site Visit", "Documentation"].map((step, i) => (
            <ProcessCard key={i} variants={fadeUp} initial="hidden" whileInView="visible">
              <h4>{step}</h4>
            </ProcessCard>
          ))}
        </Process>
      </Section>

      {/* TESTIMONIALS */}
      <TestimonialSection>
        <SectionTitle>What Our Clients Say</SectionTitle>
        <CardsContainer>
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} variants={fadeUp} initial="hidden" whileInView="visible">
              <p>"{t.feedback}"</p>
              <ClientName>- {t.name}</ClientName>
            </TestimonialCard>
          ))}
        </CardsContainer>
      </TestimonialSection>

      {/* CTA */}
      <CTA variants={fadeUp} initial="hidden" whileInView="visible">
        <h2>Looking for the perfect commercial space?</h2>
        <Button whileHover={{ scale: 1.1 }}>Schedule a Call</Button>
      </CTA>
   {/* Spacer for gap */}
      <Spacer />
         {/* Footer */}
      <Footer />
    </Container>
  );
};

export default Home;
