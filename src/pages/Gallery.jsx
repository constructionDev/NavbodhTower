import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import brochure from "../assets/brochure.pdf";
import Footer from "../components/Footer"; // Import the footer

// Container
const Container = styled.div`
  padding: 2rem 5%;
`;

// Page Title
const Title = styled.h1`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 2rem;
  text-align: center;
`;

// Filter Buttons
const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

const FilterButton = styled.button`
  padding: 0.6rem 1.2rem;
  border-radius: 25px;
  border: none;
  background: ${({ active, theme }) => (active ? theme.primary : "#eee")};
  color: ${({ active }) => (active ? "#fff" : "#333")};
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.85;
  }
`;

// Gallery Grid
const GalleryGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
`;

// Image Card with overlay
const ImageCard = styled(motion.div)`
  position: relative;
  overflow: hidden;
  border-radius: 15px;
  cursor: pointer;

  img {
    width: 100%;
    height: 180px;
    object-fit: cover;
    transition: transform 0.4s ease, filter 0.4s ease;
    border-radius: 15px;
  }

  &:hover img {
    transform: scale(1.05);
    filter: brightness(0.8);
  }
`;

// Overlay text
const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0.5rem 1rem;
  background: rgba(0,0,0,0.6);
  color: #fff;
  font-weight: 500;
  text-align: center;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${ImageCard}:hover & {
    opacity: 1;
  }
`;

// CTA Section
const CTASection = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
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
const imageVariants = {
  offscreen: { opacity: 0, scale: 0.8 },
  onscreen: { 
    opacity: 1, 
    scale: 1,
    transition: { type: "spring", bounce: 0.3, duration: 0.8 }
  }
};

// Gallery Component
const Gallery = () => {
  const [filter, setFilter] = useState("All");

  const images = [
    { src: "https://images.unsplash.com/photo-1581091012184-7cae60a95d3a?crop=entropy&cs=tinysrgb&fit=max&w=400", title: "Office 1", category: "Office" },
    { src: "https://images.unsplash.com/photo-1599423300746-b62533397364?crop=entropy&cs=tinysrgb&fit=max&w=400", title: "Office 2", category: "Office" },
    { src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?crop=entropy&cs=tinysrgb&fit=max&w=400", title: "Retail 1", category: "Retail" },
    { src: "https://images.unsplash.com/photo-1556741533-f6acd647d2fb?crop=entropy&cs=tinysrgb&fit=max&w=400", title: "Retail 2", category: "Retail" },
    { src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?crop=entropy&cs=tinysrgb&fit=max&w=400", title: "Corporate 1", category: "Corporate" },
    { src: "https://images.unsplash.com/photo-1521791136064-7986c2920216?crop=entropy&cs=tinysrgb&fit=max&w=400", title: "Corporate 2", category: "Corporate" },
    { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&cs=tinysrgb&fit=max&w=400", title: "Office 3", category: "Office" },
    { src: "https://images.unsplash.com/photo-1581091215368-5eec8d75d64c?crop=entropy&cs=tinysrgb&fit=max&w=400", title: "Retail 3", category: "Retail" },
  ];

  const filteredImages = filter === "All" ? images : images.filter(img => img.category === filter);

  return (
    <>
      <Container>
        <Title>Gallery</Title>

        <FilterContainer>
          {["All", "Office", "Retail", "Corporate"].map((cat) => (
            <FilterButton
              key={cat}
              active={filter === cat}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </FilterButton>
          ))}
        </FilterContainer>

        <GalleryGrid>
          {filteredImages.map((img, index) => (
            <ImageCard
              key={index}
              variants={imageVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.5 }}
            >
              <img src={img.src} alt={img.title} />
              <Overlay>{img.title}</Overlay>
            </ImageCard>
          ))}
        </GalleryGrid>

        <CTASection>
          <DownloadButton href={brochure} download>
            Download Brochure
          </DownloadButton>
        </CTASection>
      </Container>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Gallery;
