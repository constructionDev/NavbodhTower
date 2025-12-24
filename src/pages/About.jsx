import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import brochure from "../assets/brochure.pdf";
import Footer from "../components/Footer";
import bgVideo from '../assets/bg.mp4';
import map from "../assets/map2.png";
import smallsq from "../assets/1500sq.jfif";
import largesq from "../assets/3100sq.jfif";





// ================= CONTAINER =================
const Container = styled.div``;

// ================= HERO =================
const HeroVideoWrapper = styled.section`
  position: relative;
  width: 100vw;
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    min-height: 40vh;
  }
`;

const HeroVideo = styled.video`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const VideoOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.65),
    rgba(0, 0, 0, 0.35)
  );
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  color: #fff;
  padding: 2rem 1rem;
`;

const Title = styled.h1`
  font-size: clamp(2.2rem, 5vw, 3.5rem);
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  margin-top: 1rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

// ================= BROCHURE DOWNLOAD =================
const BrochureSection = styled.div`
  text-align: center;
  margin: 2rem 0;
`;

const DownloadButton = styled.a`
  display: inline-block;
  background-color: ${({ theme }) => theme.primary};
  color: #fff;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.primaryHover || "#ff6600"};
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
    border: 2px solid;
`;

const CardTitle = styled.h3`
  color: ${({ theme }) => theme.primary};
  font-size: 1.2rem;
  margin-bottom: 8px;
`;

const CardDesc = styled.p`
  font-size: 1rem;
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
 border: 2px solid;
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

// ================= FOUNDER SECTION =================
const FounderSectionWrapper = styled(Section)`
  background: ${({ theme }) => theme.cardBackground};
  padding: 4rem 2rem;
  border-radius: 15px;
`;

const FounderCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 900px;
  margin: 0 auto;
  background: #fff;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
  text-align: center;
  transition: all 0.3s ease;

  @media (min-width: 768px) {
    flex-direction: row;
    text-align: left;
  }
`;

const FounderImg = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1.5rem;
  border: 5px solid ${({ theme }) => theme.primary};

  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 2rem;
  }
`;

const FounderInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const FounderName = styled.h3`
  font-size: 2rem;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 0.5rem;
`;

const FounderRole = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
  margin-bottom: 1rem;
`;

const FounderAbout = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.text};
  line-height: 1.6;
`;

// ================= MAP =================

const services = [
  {
    title: "Office Spaces",
    desc: "Well-planned and modern office spaces ideal for startups, professionals, and corporates.",
    plotSize: "1200 - 3000 sq.ft",
    mapImage: "/assets/maps/office-map.png" // put the image in your public/assets/maps folder
  },
  {
    title: "Retail & Showroom Spaces",
    desc: "Prime retail spaces with excellent visibility and high customer footfall.",
    plotSize: "800 - 2500 sq.ft",
    mapImage: "/assets/maps/retail-map.png"
  },
  {
    title: "Corporate Setups",
    desc: "Spacious commercial floors suitable for banks, consultancies, and large enterprises.",
    plotSize: "1500 - 4000 sq.ft",
    mapImage: "/assets/maps/corporate-map.png"
  },
  // Add for other services
];


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

// ================= FOUNDER DATA =================
const founder = {
  name: "John Doe",
  role: "Founder & CEO",
  image: "https://picsum.photos/300?random=1", // bigger image
  about: "John has over 10 years of experience in tech and entrepreneurship. He is passionate about building innovative solutions that make a difference."
};

// ================= ABOUT PAGE =================
const About = () => {
 const services = [
  {
    title: "Office Spaces",
    desc: "Well-planned and modern office spaces ideal for startups, professionals, and corporates."
  },
  {
    title: "Retail & Showroom Spaces",
    desc: "Prime retail spaces with excellent visibility and high customer footfall."
  },
  {
    title: "Corporate Setups",
    desc: "Spacious commercial floors suitable for banks, consultancies, and large enterprises."
  },
  {
    title: "Customizable Layouts",
    desc: "Flexible floor plans that can be customized as per your business requirements."
  },
  {
    title: "Flexible Leasing",
    desc: "Business-friendly rental options for small and large enterprises."
  },
  {
    title: "Modern Amenities",
    desc: "High-speed lifts, ample parking and advanced fire safety systems."
  },
  {
    title: "Prime Location Advantage",
    desc: "Located in Shankar Nagar, Raipur with excellent connectivity and brand visibility."
  }
];


const whyUs = [
  "Prime location in Shankar Nagar, Raipur",
  "Government approved commercial project",
  "Modern infrastructure with high-speed lifts",
  "Flexible commercial spaces for offices, banks & clinics",
  "Ample parking with CCTV & fire safety systems",
  "Trusted by reputed brands and professionals",
  "Excellent visibility for branding and footfall",
  "Business-friendly environment with professional tenants",
];



 const processSteps = [
  "Inquiry & Requirement Understanding",
  "Site Visit & Space Selection",
  "Customization & Planning",
  "Transparent Documentation",
  "Finalization & Handover",
  "Ongoing Support",
];


const achievements = [

  { number: "Trusted", label: "By Leading Brands & Professionals" },
  { number: "Prime", label: "Commercial Location in Raipur" },
  { number: "G+3", label: "Floors of Modern Commercial Space" },
  { number: "100%", label: "Operational & Occupied Building" },
  { number: "Modern", label: "Infrastructure, Safety & Compliance" },
];



  return (
    <Container>
      {/* HERO */}
      <HeroVideoWrapper>
        <HeroVideo src={bgVideo} autoPlay muted loop playsInline />
        <VideoOverlay />
        <HeroContent>
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <Title>About Navbodh Tower</Title>
            <Subtitle>
              Building the right spaces for growing businesses in Raipur, Chhattisgarh.
            </Subtitle>
          </motion.div>
        </HeroContent>
      </HeroVideoWrapper>

      {/* COMPANY OVERVIEW */}
    <Section>
  <SectionTitle>Company Overview</SectionTitle>
  <SectionSubtitle>
    <strong>Navbodh Tower</strong> is a modern, government-approved commercial complex designed to cater to the diverse needs of today’s businesses. 
    Strategically located in the bustling area of Shankar Nagar, Raipur (C.G.), it offers premium commercial spaces that provide excellent visibility, seamless connectivity, and world-class infrastructure.
  </SectionSubtitle>

  <SectionSubtitle>
    With its cutting-edge design and flexible space options, Navbodh Tower is poised to become the go-to destination for businesses looking to thrive in a dynamic and growing market.
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
            <CardTitle>🎯 Our Mission</CardTitle>
            <CardDesc>
             To provide high-quality, well-planned, and future-ready commercial spaces that empower businesses to grow and succeed. At Navbodh Tower, our mission is to create a secure, professional, and accessible business environment through modern infrastructure, strategic location, and customer-focused flexibility.
            </CardDesc>
          </ServiceCard>
          <ServiceCard
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            whileHover={{ scale: 1.05, y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
          >
            <CardTitle>🌟 Our Vision</CardTitle>
            <CardDesc>
           To become a landmark commercial destination in Raipur, recognized for excellence in design, reliability, and business value. We envision Navbodh Tower as a hub where enterprises of all sizes thrive, innovation is encouraged, and long-term partnerships are built through trust and quality.
            </CardDesc>
          </ServiceCard>
        </CardsContainer>
      </Section>






{/* BUILDING MAP & FEATURES */}
<Section>
  <SectionTitle>Building Blueprint & Features</SectionTitle>
  <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
    {/* Blueprint image */}
    <img
      src={map}
      alt="Full Building Blueprint"
      style={{
        width: "100%",  // Reduced width for a smaller image
        maxWidth: "1300px",  // Set maximum width to 800px
        borderRadius: "10px",
        marginBottom: "1rem",
      }}
    />
    {/* Key Features */}
    <ul style={{ listStyle: "disc", paddingLeft: "1.5rem", color: "#f5b301", fontSize: "1.1rem" }}>
      <li>Well-planned office spaces suitable for various businesses</li>
      <li>Flexible layouts for customization</li>
      <li>Modern infrastructure with safety compliance</li>
      <li>Prime commercial location with excellent connectivity</li>
      <li>Ample parking and security features</li>
    </ul>
  </div>
</Section>

{/* PLOT SIZE CARDS */}
<Section>
  <SectionTitle>Available Plot Sizes</SectionTitle>
  <CardsContainer>
    {/* 1500 sq.ft plot card */}
    <ServiceCard
      key="1500sq"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      whileHover={{
        scale: 1.08,
        y: -5,
        boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
      }}
    >
      <CardTitle>Corporate Setup (1500 sq.ft)</CardTitle>
      <CardDesc>
        Spacious commercial floors suitable for banks, consultancies, and large enterprises.
      </CardDesc>
      <p>
        <strong>Plot Size:</strong> 1500 sq.ft
      </p>
      <img
        src={smallsq}
        alt="1500 sq.ft Setup"
        style={{ width: "100%", borderRadius: "10px", marginTop: "1rem",height:"480px" }}
      />
    
    </ServiceCard>

    {/* 3100 sq.ft plot card */}
    <ServiceCard
      key="3100sq"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      whileHover={{
        scale: 1.08,
        y: -5,
        boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
      }}
    >
      <CardTitle>Corporate Setup (3100 sq.ft)</CardTitle>
      <CardDesc>
        Spacious commercial floors suitable for banks, consultancies, and large enterprises.
      </CardDesc>
      <p>
        <strong>Plot Size:</strong> 3100 sq.ft
      </p>
      <img
        src={largesq}
        alt="3100 sq.ft Setup"
        style={{ width: "100%", borderRadius: "10px", marginTop: "1rem" , height:"480px"  }}
      />
    
    </ServiceCard>
  </CardsContainer>
</Section>



      {/* SERVICES */}
      {/* <Section>
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
              <CardTitle>{s.title}</CardTitle>
              <CardDesc>{s.desc}</CardDesc>
              <img
                src={`https://picsum.photos/200?random=${i + 10}`}
                alt={s.title}
                style={{ width: "100%", borderRadius: "10px", marginTop: "1rem" }}
              />
            </ServiceCard>
          ))}
        </CardsContainer>
      </Section> */}

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
              <CardDesc>{w}</CardDesc>
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
              <CardDesc>{p}</CardDesc>
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

      {/* FOUNDER */}
      {/* <FounderSectionWrapper>
        <SectionTitle>Our Founder</SectionTitle>
        <FounderCard
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          whileHover={{ scale: 1.02, boxShadow: "0 25px 50px rgba(0,0,0,0.2)" }}
        >
          <FounderImg src={founder.image} alt={founder.name} />
          <FounderInfo>
            <FounderName>{founder.name}</FounderName>
            <FounderRole>{founder.role}</FounderRole>
            <FounderAbout>{founder.about}</FounderAbout>
          </FounderInfo>
        </FounderCard>
      </FounderSectionWrapper> */}

      {/* LOCATION & CONTACT */}
      <Section>
        <SectionTitle>Visit Us</SectionTitle>
        <SectionSubtitle>Navbodh Tower | Shankar Nagar, Raipur, Chhattisgarh</SectionSubtitle>
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
  