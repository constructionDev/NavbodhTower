import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

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
  height: 180px;
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

// ================= ANIMATED CHARACTER =================
const AnimatedCharacter = styled(motion.div)`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #4f46e5, #6366f1);
  border-radius: 50%;
  margin: 2rem auto;
`;

// ================= SPACER =================
const Spacer = styled.div`
  height: 4rem;
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
      title: "Premium Office Space",
      desc: "Modern office with high-end amenities.",
      img: "https://picsum.photos/400/200?random=1",
      link: "https://example.com/office",
    },
    {
      title: "Retail Showroom",
      desc: "High visibility retail location in city center.",
      img: "https://picsum.photos/400/200?random=2",
      link: "https://example.com/retail",
    },
    {
      title: "Corporate Tower",
      desc: "Luxury corporate building with multiple floors.",
      img: "https://picsum.photos/400/200?random=3",
      link: "https://example.com/corporate",
    },
    {
      title: "Co-working Space",
      desc: "Flexible co-working space for startups.",
      img: "https://picsum.photos/400/200?random=4",
      link: "https://example.com/coworking",
    },
    {
      title: "Industrial Warehouse",
      desc: "Spacious warehouse with logistics support.",
      img: "https://picsum.photos/400/200?random=5",
      link: "https://example.com/warehouse",
    },
    {
      title: "Tech Hub",
      desc: "Innovation hub for tech companies.",
      img: "https://picsum.photos/400/200?random=6",
      link: "https://example.com/techhub",
    },
  ];

  return (
    <Container>
      <Title>Our Projects</Title>

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

      {/* Spacer for gap */}
      <Spacer />

      {/* Footer */}
      <Footer />
    </Container>
  );
};

export default Projects;
