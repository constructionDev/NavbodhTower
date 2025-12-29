import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import premiumspace from "../assets/Shivayan.jpeg";
import RetailShowroom from "../assets/lalchand.jpeg";
import tower from "../assets/yt.jpeg";
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

const VisitButton = styled.button`
  display: inline-block;
  padding: 0.5rem 1.2rem;
  background: ${({ theme }) => theme.primary};
  color: #fff;
  border-radius: 8px;
  font-weight: 500;
  border: none;
  cursor: pointer;
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
  text-decoration: none;
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
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Shivayan Health Care Hospital",
      img: premiumspace,
      desc: `50-Bed Multi-Specialty Hospital – Under Construction
📍 Nardaha, Raipur, Chhattisgarh

Shivayan Health Care Hospital is a 50-bed multi-specialty hospital under construction in Nardaha, Raipur. The hospital is being developed with modern infrastructure and advanced medical facilities to provide affordable, quality healthcare services to the community.

Upon completion, the hospital will offer emergency care, OPD services, inpatient facilities, ICU, maternity care, and diagnostic services under one roof.`,
    },
    {
      title: "Lalchand Heights",
      img: RetailShowroom,
      desc: `Commercial Complex – Geetanagar

Lalchand Heights is a premium commercial complex located in the heart of Geetanagar, offering thoughtfully designed retail and office spaces. With modern architecture, quality construction, and excellent connectivity, the project provides an ideal environment for businesses to grow and thrive.

Designed for visibility, convenience, and long-term value, Lalchand Heights sets a new benchmark for commercial spaces in the area.`,
    },
    {
      title: "Yugbodh Tower",
      img: tower,
      desc: `Commercial Building – Geeta Nagar Main Road, Raipur

Yugbodh Tower is an upcoming commercial landmark on Geeta Nagar Main Road, Raipur, right next to Pantaloons. The building is designed to offer modern retail and office spaces with maximum visibility and easy access, making it an ideal destination for businesses.

Featuring contemporary architecture, superior construction quality, and smartly planned layouts, Yugbodh Tower provides a professional and vibrant environment for retailers, offices, and service-based businesses seeking a presence in Raipur’s bustling commercial corridor.`,
    },
  ];

  const clients = [
    {
      name: "HDFC Bank",
      desc: "India's leading private sector bank, offering innovative financial solutions, trusted services, and a strong digital presence to individuals and businesses nationwide.",
      logo: hdfc,
      link: "https://hdfcbank.com",
    },
    {
      name: "The Beauty Bar",
      desc: "A premier cosmetology clinic led by Dr. Rashi Uike and Dr. Swati Sikarwar, offering safe, personalized skin, hair, and aesthetic treatments.",
      logo: beauty,
      link: "https://www.instagram.com/thebeautybar_raipur/reels/",
    },
    {
      name: "The Bone Clinic",
      desc: "An experienced Orthopedic Surgeon in Raipur, specializing in treating bone, joint, and spine conditions with advanced techniques.",
      logo: Bone,
    },
    {
      name: "Dr. Dhiraj Premchandani",
      desc: "Consultant Gastro and Laparoscopic Surgeon at Ramkrishna Care Hospital, Raipur, with expertise in advanced GI and HPB surgery.",
      logo: dr,
      link: "https://drdhirajpremchandani.com",
    },
    {
      name: "Sheesh Mahal",
      desc: "A pure-vegetarian fine-dining restaurant and party venue in Navboadh Tower, Shankar Nagar, Raipur, offering multi-cuisine dishes and event hosting.",
      logo: mahal,
      link: "https://www.instagram.com/sheeshmahalraipur/#",
    },
    {
      name: "Anand Health & Beauty Care",
      desc: "Clinics in Raipur and Bilaspur offering cosmetic and medical services like hair transplants, skin care, and obstetric treatments.",
      logo: Anand,
      link: "https://www.instagram.com/anand_health_and_beauty_/",
    },
  ];

  return (
    <Container>
      <Title>Our Projects (sister concern)</Title>

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
              <VisitButton onClick={() => setSelectedProject(project)}>
                Know More
              </VisitButton>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectsGrid>

      {/* Modal */}
      {selectedProject && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
          onClick={() => setSelectedProject(null)}
        >
          <div
            style={{
              background: "#fff",
              padding: "2rem",
              borderRadius: "15px",
              maxWidth: "600px",
              width: "90%",
              maxHeight: "90%",
              overflowY: "auto",
              position: "relative",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              style={{
                position: "absolute",
                top: "1rem",
                right: "1rem",
                background: "#dd0808ff",
                color: "#fff",
                border: "none",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                fontWeight: "bold",
                cursor: "pointer",
                fontSize:"2.2em"
              }}
            >
              ×
            </button>

            <h2 style={{ color: "black" , textAlign:"center" }}>{selectedProject.title}</h2>
            <img
              src={selectedProject.img}
              alt={selectedProject.title}
              style={{
                width: "100%",
                borderRadius: "10px",
                marginBottom: "1rem",
              }}
            />
            <p style={{ whiteSpace: "pre-line" ,color: "black"  }}>{selectedProject.desc}</p>
               <p style={{ color: "red", fontSize: "1rem", marginTop: "0.5rem" }}>
        Note: The image shown is AI-generated and may not reflect the real project.
      </p>
          </div>
        </div>
      )}

      {/* Clients Section */}
      <ClientsSection>
        <Title>Our Clients</Title>
        <ClientsGrid>
          {clients.map((client, index) => (
            <ClientCard
              key={index}
              href={client.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ClientLogo src={client.logo} alt={client.name} />
              <ClientName>{client.name}</ClientName>
              <ClientDesc>{client.desc}</ClientDesc>
            </ClientCard>
          ))}
        </ClientsGrid>
      </ClientsSection>

      {/* Spacer */}
      <Spacer />

      {/* Footer */}
      <Footer />
    </Container>
  );
};

export default Projects;
