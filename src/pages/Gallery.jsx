import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import brochure from "../assets/brochure.pdf";
import Footer from "../components/Footer";

// Images
import tower from "../assets/NT/tower.jpeg";
import tower2 from "../assets/NT/tower2.png";
import B1 from "../assets/NT/b1.jpeg";
import B2 from "../assets/NT/b2.jpeg";
import B3 from "../assets/NT/b3.jpeg";
import B4 from "../assets/NT/b4.jpeg";
import B5 from "../assets/NT/b5.jpeg";
import B6 from "../assets/NT/b6.jpeg";
import E1 from "../assets/NT/E1.jpeg";
import E2 from "../assets/NT/E2.jpeg";
import E3 from "../assets/NT/E3.jpeg";
import E4 from "../assets/NT/E4.jpeg";
import I1 from "../assets/NT/I1.jpeg";
import L1 from "../assets/NT/L1.jpeg";
import L2 from "../assets/NT/L2.jpeg";
import P1 from "../assets/NT/P1.jpeg";
import s1 from "../assets/NT/s1.png";
// Videos
import V1 from "../assets/NT/V1.mp4";
import V2 from "../assets/NT/V2.mp4";
import V3 from "../assets/NT/V3.mp4";
import V4 from "../assets/NT/V4.mp4";
import V5 from "../assets/NT/V5.mp4";
import V6 from "../assets/NT/V6.mp4";

// ================= STYLES =================

const Hero = styled.section`
  height: 60vh;
  background: linear-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url(${P1}) center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
`;

const HeroSubtitle = styled.p`
  margin-top: 1rem;
  font-size: 1.2rem;
  opacity: 0.9;
`;

const Container = styled.div`
  padding: 4rem 5%;
`;

const Title = styled.h2`
  font-size: 2.4rem;
  color: ${({ theme }) => theme.primary};
  text-align: center;
  margin-bottom: 2rem;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
`;

const FilterButton = styled.button`
  padding: 0.7rem 1.8rem;
  border-radius: 30px;
  border: 1px solid ${({ theme }) => theme.primary};
  background: ${({ active, theme }) =>
    active ? theme.primary : "transparent"};
  color: ${({ active, theme }) =>
    active ? "#fff" : theme.primary};
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: ${({ theme }) => theme.primary};
    color: #fff;
  }
`;

const GalleryGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
`;

const Card = styled(motion.div)`
  position: relative;
  overflow: hidden;
  border-radius: 18px;
  cursor: pointer;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);

  img,
  video {
    width: 100%;
    height: 220px;
    object-fit: cover;
    transition: transform 0.6s ease;
  }

  &:hover img,
  &:hover video {
    transform: scale(1.08);
  }

  &:hover div {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 1rem;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.8),
    rgba(0, 0, 0, 0)
  );
  color: #fff;
  font-size: 1rem;
  opacity: 0;
  transform: translateY(10px);
  transition: 0.4s ease;
`;

const CTASection = styled.div`
  margin-top: 5rem;
  padding: 3rem 1rem;
  background: #f8f8f8;
  border-radius: 20px;
  text-align: center;
`;

const CTAText = styled.p`
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  color: #555;
`;

const DownloadButton = styled.a`
  display: inline-block;
  background: ${({ theme }) => theme.primary};
  color: #fff;
  padding: 0.9rem 2.5rem;
  border-radius: 30px;
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
  transition: 0.3s;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.25);
  }
`;

// ================= ANIMATION =================

const cardVariants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

// ================= COMPONENT =================

const Gallery = () => {
  const [filter, setFilter] = useState("All");

  const items = [
    { src: E4, type: "image", title: "" },
    { src: tower, type: "image", title: "" },
    { src: B1, type: "image", title: "" },
    { src: L2, type: "image", title: "" },
    { src: B2, type: "image", title: "" },
    { src: tower2, type: "image", title: "" },
    { src: B3, type: "image", title: "" },
    { src: E3, type: "image", title: "" },
    { src: B4, type: "image", title: "" },
    { src: B5, type: "image", title: "" },
    { src: B6, type: "image", title: "" },
    { src: E1, type: "image", title: "" },
    { src: E2, type: "image", title: "" },
    { src: I1, type: "image", title: "" },
    { src: L1, type: "image", title: ""},
    { src: P1, type: "image", title: "" },
    { src: V6, type: "video", title: "" },
    { src: V1, type: "video", title: "" },
    { src: V2, type: "video", title: "" },
    { src: V3, type: "video", title: "" },
    { src: V4, type: "video", title: "" },
    { src: V5, type: "video", title: "" },
  ];

  const filteredItems =
    filter === "All"
      ? items
      : items.filter((item) => item.type === filter.toLowerCase());

  return (
    <>
      <Hero>
        <div>
          <HeroTitle>Premium Commercial Spaces</HeroTitle>
          <HeroSubtitle>Offices • Retail • Business Hubs</HeroSubtitle>
        </div>
      </Hero>

      <Container>
        <Title>Project Gallery</Title>

        <FilterContainer>
          {["All", "Image", "Video"].map((btn) => (
            <FilterButton
              key={btn}
              active={filter === btn}
              onClick={() => setFilter(btn)}
            >
              {btn}
            </FilterButton>
          ))}
        </FilterContainer>

        <GalleryGrid>
          {filteredItems.map((item, index) => (
            <Card
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {item.type === "image" ? (
                <img src={item.src} alt={item.title} />
              ) : (
                <video
                  src={item.src}
                  autoPlay
                  muted
                  loop
                  controls
                  playsInline
                  onLoadedMetadata={(e) => {
                    e.currentTarget.playbackRate = 0.75;
                  }}
                />
              )}
              <Overlay>{item.title}</Overlay>
            </Card>
          ))}
        </GalleryGrid>

        <CTASection>
          <CTAText>
            Explore floor plans, amenities, pricing & investment opportunities
          </CTAText>
          <DownloadButton href={brochure} download>
            Download Brochure
          </DownloadButton>
        </CTASection>
      </Container>

      <Footer />
    </>
  );
};

export default Gallery;
