import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import brochure from "../assets/brochure.pdf";
import Footer from "../components/Footer"; // Import the footer

// ================= CONTAINER =================
const Container = styled.div`
  padding: 2rem 5%;
`;

// ================= HERO =================
const Hero = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  min-height: 50vh;
  text-align: center;
  padding: 3rem 1rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: ${({ theme }) => theme.primary};
`;

const Subtitle = styled.p`
  font-size: 1.3rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.text};
  max-width: 600px;
`;

const BrochureSection = styled.section`
  margin-top: 2rem;
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

// ================= SECTIONS =================
const Section = styled.section`
  margin: 4rem 0;
`;

const SectionTitle = styled.h2`
  text-align: center;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 2rem;
`;

const SectionSubtitle = styled.p`
  text-align: center;
  max-width: 700px;
  margin: 0 auto 2rem auto;
  color: ${({ theme }) => theme.text};
`;

// ================= CARDS =================
const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const ServiceCard = styled(motion.div)`
  background: ${({ theme }) => theme.cardBackground};
  padding: 1.5rem;
  border-radius: 15px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
`;

const ServiceTitle = styled.h3`
  color: ${({ theme }) => theme.primary};
`;

const ServiceDesc = styled.p`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.text};
  margin-top: 0.5rem;
`;

// ================= PROCESS CARD =================
const ProcessCard = styled(motion.div)`
  background: ${({ theme }) => theme.cardBackground};
  padding: 1.5rem;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.3s ease;
`;

// ================= ACHIEVEMENTS =================
const Achievement = styled.div`
  text-align: center;
  padding: 1rem;
`;

const Number = styled.h2`
  font-size: 2.2rem;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 0.5rem;
`;

const Label = styled.p`
  color: ${({ theme }) => theme.text};
`;

// ================= TEAM CARD =================
const TeamCard = styled(motion.div)`
  background: ${({ theme }) => theme.cardBackground};
  padding: 1.5rem;
  border-radius: 15px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
`;

const TeamImg = styled.img`
  width: 100px;
  border-radius: 50%;
  margin-bottom: 1rem;
`;

// ================= MAP =================
const MapWrapper = styled.div`
  margin-top: 2rem;
  iframe {
    width: 100%;
    height: 400px;
    border: 0;
    border-radius: 15px;
  }
`;

// ================= ANIMATIONS =================
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// ================= ABOUT PAGE =================
const About = () => {
  const services = [
    { title: "Office Spaces", desc: "Modern and flexible office spaces." },
    { title: "Retail Spaces", desc: "High footfall retail showrooms." },
    { title: "Corporate Buildings", desc: "Spacious corporate setups." },
    { title: "Custom Leasing", desc: "Tailored leasing solutions." },
    { title: "Legal Support", desc: "Documentation & legal guidance." },
  ];

  const whyUs = [
    "Prime Locations",
    "Transparent Pricing",
    "Flexible Lease Terms",
    "Professional Property Management",
    "End-to-End Support",
  ];

  const processSteps = [
    "Understand Business Requirements",
    "Property Shortlisting",
    "Site Visits",
    "Negotiation & Documentation",
    "Move-In Support",
  ];

  const achievements = [
    { number: "10+", label: "Years of Experience" },
    { number: "50+", label: "Commercial Units" },
    { number: "200+", label: "Satisfied Clients" },
    { number: "5+", label: "Locations" },
  ];

  const team = [
    { name: "Mr. Navin Patidar", role: "Founder & Director" },
    { name: "Anjali Sharma", role: "Property Manager" },
    { name: "Rahul Singh", role: "Sales Consultant" },
  ];

  return (
    <Container>
      {/* HERO */}
      <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.8 }}>
        <Hero>
          <Title>About Navbodh Tower</Title>
          <Subtitle>Building the right spaces for growing businesses</Subtitle>
          <BrochureSection>
            <DownloadButton href={brochure} download>
              Download Company Brochure
            </DownloadButton>
          </BrochureSection>
        </Hero>
      </motion.div>

      {/* COMPANY OVERVIEW */}
      <Section>
        <SectionTitle>Company Overview</SectionTitle>
        <SectionSubtitle>
          Navbodh Tower is a commercial real estate company based in Raipur,
          Chhattisgarh, specializing in premium office spaces, retail showrooms,
          and corporate buildings. We serve startups, SMEs, and established
          enterprises looking for reliable and well-located business spaces.
        </SectionSubtitle>
      </Section>

      {/* MISSION & VISION */}
      <Section>
        <SectionTitle>Mission & Vision</SectionTitle>
        <CardsContainer>
          <ServiceCard
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            whileHover={{ scale: 1.05, y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
          >
            <ServiceTitle>Mission</ServiceTitle>
            <ServiceDesc>
              To provide flexible, transparent, and premium commercial spaces
              that support business growth.
            </ServiceDesc>
          </ServiceCard>
          <ServiceCard
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            whileHover={{ scale: 1.05, y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
          >
            <ServiceTitle>Vision</ServiceTitle>
            <ServiceDesc>
              To become the most trusted commercial real estate brand in
              Central India.
            </ServiceDesc>
          </ServiceCard>
        </CardsContainer>
      </Section>

      {/* SERVICES */}
      <Section>
        <SectionTitle>What We Offer</SectionTitle>
        <CardsContainer>
          {services.map((s, i) => (
            <ServiceCard
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              whileHover={{ scale: 1.08, y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
            >
              <ServiceTitle>{s.title}</ServiceTitle>
              <ServiceDesc>{s.desc}</ServiceDesc>
              <img
                src={`https://picsum.photos/200?random=${i + 10}`}
                alt={s.title}
                style={{ width: "100%", borderRadius: "10px", marginTop: "1rem" }}
              />
            </ServiceCard>
          ))}
        </CardsContainer>
      </Section>

      {/* WHY CHOOSE US */}
      <Section>
        <SectionTitle>Why Choose Us</SectionTitle>
        <CardsContainer>
          {whyUs.map((w, i) => (
            <ServiceCard
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              whileHover={{ scale: 1.08, y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
            >
              <ServiceDesc>{w}</ServiceDesc>
            </ServiceCard>
          ))}
        </CardsContainer>
      </Section>

      {/* PROCESS */}
      <Section>
        <SectionTitle>Our Process</SectionTitle>
        <CardsContainer>
          {processSteps.map((p, i) => (
            <ProcessCard
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              whileHover={{ scale: 1.05, y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
            >
              <ServiceDesc>{p}</ServiceDesc>
            </ProcessCard>
          ))}
        </CardsContainer>
      </Section>

      {/* ACHIEVEMENTS */}
      <Section>
        <SectionTitle>Our Achievements</SectionTitle>
        <CardsContainer>
          {achievements.map((a, i) => (
            <Achievement key={i}>
              <Number>{a.number}</Number>
              <Label>{a.label}</Label>
            </Achievement>
          ))}
        </CardsContainer>
      </Section>

      {/* TEAM */}
      <Section>
        <SectionTitle>Our Team</SectionTitle>
        <CardsContainer>
          {team.map((t, i) => (
            <TeamCard
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              whileHover={{ scale: 1.05, y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
            >
              <TeamImg src={`https://picsum.photos/100?random=${i + 20}`} alt={t.name} />
              <ServiceTitle>{t.name}</ServiceTitle>
              <ServiceDesc>{t.role}</ServiceDesc>
            </TeamCard>
          ))}
        </CardsContainer>
      </Section>

      {/* LOCATION & CONTACT */}
      <Section>
        <SectionTitle>Visit Us</SectionTitle>
        <SectionSubtitle>Navbodh Tower | Raipur, Chhattisgarh</SectionSubtitle>
        <BrochureSection>
          <DownloadButton href={brochure} download>
            Download Company Brochure
          </DownloadButton>
        </BrochureSection>
        <MapWrapper>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.5430058948464!2d81.6603450743615!3d21.24996298014607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dd0079aafe6d%3A0xd393eb546300f1f5!2sNAVBODH%20TOWER!5e0!3m2!1sen!2sin!4v1766224455698!5m2!1sen!2sin"
            title="Navbodh Tower Location"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </MapWrapper>
      </Section>

      {/* FOOTER */}
      <Footer />
    </Container>
  );
};

export default About;
