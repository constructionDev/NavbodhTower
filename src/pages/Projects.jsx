import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import premiumspace from "../assets/Shivayan.png";
import RetailShowroom from "../assets/lalchand.png";
import Warehouse from "../assets/Warehouse.jpg";
import tower from "../assets/tower.jpeg";
import coworking from "../assets/coworking.jfif";
import techhub from "../assets/coworking1.jpg";
import hdfc from "../assets/hdfclogo.png";
import beauty from "../assets/barlogo.png";     
import dr from "../assets/drlogo.png";
import Bone from "../assets/bonelogo.png";
import mahal from "../assets/Sheeshmahallogo.jpg";
import Anand from "../assets/anadlogo.jpg";
// ================= CONTAINER =================
const Container = styled.div`
  padding: 2rem 5%;
`;

// ================= PAGE TITLE =================
const Title = styled.h1`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.primary};
  text-align: center;
  margin-bottom: 2rem;
`;

// ================= ANIMATED CHARACTER =================
const AnimatedCharacter = styled(motion.div)`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #4f46e5, #6366f1);
  border-radius: 50%;
  margin: 2rem auto;
`;
const Spacer = styled.div`
  height: 4rem;
`;

// ================= PROJECTS GRID =================
const ProjectsGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`;

// ================= PROJECT CARD =================
const ProjectCard = styled(motion.div)`
  background: ${({ theme }) => theme.cardBackground};
  border-radius: 15px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px) scale(1.03);
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.25);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 380px;
  object-fit: cover;
  transition: transform 0.4s ease;

  ${ProjectCard}:hover & {
    transform: scale(1.05);
  }
`;

const ProjectContent = styled.div`
  padding: 1rem;
`;

const ProjectTitle = styled.h3`
  color: ${({ theme }) => theme.primary};
  margin-bottom: 0.5rem;
`;

const ProjectDesc = styled.p`
  color: ${({ theme }) => theme.text};
  font-size: 0.95rem;
  margin-bottom: 0.8rem;
`;

const VisitButton = styled.a`
  display: inline-block;
  padding: 0.5rem 1.2rem;
  background: ${({ theme }) => theme.primary};
  color: #fff;
  border-radius: 8px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    opacity: 0.85;
  }
`;

// ================= CLIENTS SECTION =================
const ClientsSection = styled.section`
  margin-top: 4rem;
`;

const ClientCard = styled.a`
  background: ${({ theme }) => theme.cardBackground};
  border-radius: 15px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;  // Ensure text is not underlined
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px) scale(1.03);
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.25);
  }
`;

const ClientLogo = styled.img`
  width: 120px;
  height: auto;
  margin-bottom: 1rem;
  object-fit: contain;
`;

const ClientName = styled.h3`
  color: ${({ theme }) => theme.primary};
  margin-bottom: 1rem;
`;

const ClientDesc = styled.p`
  color: ${({ theme }) => theme.text};
  font-size: 0.95rem;
  text-align: center;
`;

const ClientsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`;

// ================= FRAMER MOTION VARIANTS =================
const cardVariants = {
  offscreen: { y: 50, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.3, duration: 0.8 },
  },
};

const characterAnimation = {
  animate: { y: [0, -15, 0], rotate: [0, 10, -10, 0] },
  transition: { repeat: Infinity, duration: 4 },
};

// ================= PROJECTS COMPONENT =================
const Projects = () => {
  const projects = [
    {
      title: "Shivayan Health Care Pvt",
      // desc: "Modern office with high-end amenities.",
      img: premiumspace,
      link: "https://example.com/office",
    },
    {
      title: "Lalchand Heights",
      // desc: "High visibility retail location in city center.",
      img: RetailShowroom,
      link: "https://example.com/retail",
    },
    {
      title: "Navbodh Tower",
      // desc: "Luxury corporate building with multiple floors.",
      img: tower,
      link: "https://example.com/corporate",
    },
    // {
    //   title: "Co-working Space",
    //   desc: "Flexible co-working space for startups.",
    //   img: coworking,
    //   link: "https://example.com/coworking",
    // },
    // {
    //   title: "Industrial Warehouse",
    //   desc: "Spacious warehouse with logistics support.",
    //   img: Warehouse,
    //   link: "https://example.com/warehouse",
    // },
    // {
    //   title: "Tech Hub",
    //   desc: "Innovation hub for tech companies.",
    //   img: techhub,
    //   link: "https://example.com/techhub",
    // },
  ];

  const clients = [
    {
      name: "HDFC Bank",
      desc: "India's leading private sector bank, offering innovative financial solutions, trusted services, and a strong digital presence to individuals and businesses nationwide.",
      logo: hdfc, // Add the path to HDFC's logo image
      link: "https://hdfcbank.com", // Link to HDFC Bank's website
    },
    {
      name: "The Beauty Bar",
      desc: "A premier cosmetology clinic led by Dr. Rashi Uike and Dr. Swati Sikarwar, offering safe, personalized skin, hair, and aesthetic treatments.",
      logo:  beauty,
      link: "https://www.instagram.com/thebeautybar_raipur/reels/", // Link to their website
    },
    {
      name: "The Bone Clinic",
      desc: "An experienced Orthopedic Surgeon in Raipur, specializing in treating bone, joint, and spine conditions with advanced techniques.",
      logo:  Bone , 
     
    },
    {
      name: "Dr. Dhiraj Premchandani",
      desc: "Consultant Gastro and Laparoscopic Surgeon at Ramkrishna Care Hospital, Raipur, with expertise in advanced GI and HPB surgery.",
      logo: dr , 
      link: "https://drdhirajpremchandani.com", // Link to his website
    },
    {
      name: "Sheesh Mahal",
      desc: "A pure-vegetarian fine-dining restaurant and party venue in Navboadh Tower, Shankar Nagar, Raipur, offering multi-cuisine dishes and event hosting.",
      logo: mahal , 
      link: "https://www.instagram.com/sheeshmahalraipur/#", // Link to their website
    },
    {
      name: "Anand Health & Beauty Care",
      desc: "Clinics in Raipur and Bilaspur offering cosmetic and medical services like hair transplants, skin care, and obstetric treatments.",
      logo: Anand,
      link: "https://www.instagram.com/anand_health_and_beauty_/", // Link to their website
    },
  ];

  return (
    <Container>
      <Title>Our Projects(sister concern)</Title>

      {/* Animated Character */}
      <AnimatedCharacter
        animate={characterAnimation.animate}
        transition={characterAnimation.transition}
      />

      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            variants={cardVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
          >
            <ProjectImage src={project.img} alt={project.title} />
            <ProjectContent>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDesc>{project.desc}</ProjectDesc>
              <VisitButton
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Project
              </VisitButton>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectsGrid>

      {/* Clients Section */}
      <ClientsSection>
        <Title>Our Clients</Title>

        <ClientsGrid>
          {clients.map((client, index) => (
            <ClientCard key={index} href={client.link} target="_blank" rel="noopener noreferrer">
              <ClientLogo src={client.logo} alt={client.name} />
              <ClientName>{client.name}</ClientName>
              <ClientDesc>{client.desc}</ClientDesc>
            </ClientCard>
          ))}
        </ClientsGrid>
      </ClientsSection>

      {/* Spacer for gap */}
      <Spacer />

      {/* Footer */}
      <Footer />
    </Container>
  );
};

export default Projects;
