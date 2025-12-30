import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import map from "../assets/map2.png";
import AboutRowAnimated from "../components/AboutRowAnimated";
import Footer from "../components/Footer";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaPhoneAlt,
} from "react-icons/fa";

import tower from "../assets/banner.jpeg";
import img1 from "../assets/1.jpeg";
import img2 from "../assets/2.jpeg";
import img3 from "../assets/3.jpeg";
import img4 from "../assets/4.jpeg";
import Lottie from "lottie-react";
import HeroCarousel from "../components/HeroCarousel";
import requirementAnimation from "../assets/lottie/requirement.json";
import shortlistAnimation from "../assets/lottie/shortlist.json";
import siteVisitAnimation from "../assets/lottie/site-visit3.json";
import documentationAnimation from "../assets/lottie/documentation.json";
import testimonialAnimation from "../assets/lottie/profile.json";
import ctaAnimation from "../assets/lottie/Customer Support.json";
import sq3000 from "../assets/3000SQ.jpg";
import P15 from "../assets/NT/P15.jpeg";
import P3000 from "../assets/NT/P2.jpeg";
/* ================= ANIMATIONS ================= */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

const slideInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
};

/* ================= CONTAINER ================= */
const Container = styled.div``;

/* ================= SECTION ================= */
const Section = styled.section`
  margin: 5rem 1.5rem;

  @media (max-width: 600px) {
    margin: 3rem 1rem;
  }
`;

/* ================= SECTION TITLE ================= */
const SectionTitle = styled(motion.h2)`
  text-align: center;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 2.5rem;
  font-size: clamp(2rem, 4vw, 2.8rem);
  font-weight: 800;
  letter-spacing: 1px;
`;

/* ================= SPACER ================= */
const Spacer = styled.div`
  height: 4rem;

  @media (max-width: 600px) {
    height: 3rem;
  }
`;

/* ================= HERO VIDEO ================= */
const HeroVideoWrapper = styled.section`
  position: relative;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;

  @media (max-width: 768px) {
    min-height: 55vh;
  }
`;

const HeroVideo = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  background: url(${tower}) center/contain no-repeat;
  filter: brightness(0.65);
`;

const HeroContent = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 1.5rem;
  z-index: 2;
`;

const HeroInner = styled.div`
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const HeroTitle = styled(motion.h1)`
  font-size: clamp(2.6rem, 5vw, 3.8rem);
  color: #f5b301;
  font-weight: 800;
  letter-spacing: 1px;
  margin-bottom: 1rem;
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.1rem;
  color: #e0d09c;
  margin: 1rem 0;
  text-align: center;

  @media (max-width: 900px) {
    margin: 1rem auto;
  }
`;

const HeroButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const Button = styled(motion.button)`
  padding: 0.9rem 1.8rem;
  border-radius: 30px;
  border: none;
  cursor: pointer;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  justify-content: center;
  font-size: 1.2rem;
  background: ${({ primary }) =>
    primary ? "linear-gradient(135deg, #f5b301, #d99a00)" : "#e5e7eb"};
  color: ${({ primary }) => (primary ? "#0e1a42" : "#111")};
  box-shadow: ${({ primary }) =>
    primary ? "0 12px 30px rgba(245,179,1,0.35)" : "none"};
`;

/* ================= SEARCH ================= */
const SearchBox = styled(motion.section)`
  background: ${({ theme }) => theme.cardBackground};
  padding: 1.5rem;
  border-radius: 20px;
  margin: 4rem auto;
  max-width: 1200px;
  border: 2px solid yellow;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 1rem;

  @media (max-width: 600px) {
    margin: 2rem 1rem;
    grid-template-columns: 1fr;
  }
`;

const Select = styled.select`
  padding: 0.8rem;
  border-radius: 12px;
  border: 1px solid #ddd;
  font-size: 1rem;
`;

/* ================= ABOUT NAVBODH TOWER ================= */
const AboutImage = styled(motion.div)`
  img {
    width: 100%;
    max-width: 550px;
    border-radius: 20px;
    object-fit: cover;
    height: auto;
  }

  @media (max-width: 900px) {
    margin-top: 1rem;
  }
`;

const AboutText = styled(motion.div)`
  h2 {
    color: ${({ theme }) => theme.primary};
    font-size: clamp(1.8rem, 2.5vw, 2.5rem);
    margin-bottom: 1rem;
  }

  p {
    color: ${({ theme }) => theme.text};
    line-height: 1.6;
    font-size: 1rem;
  }

  @media (max-width: 900px) {
    text-align: center;
  }
`;

const AboutSection = styled(motion.section)`
  max-width: 1300px;
  margin: 5rem auto;
  display: flex;
  flex-direction: column;
  gap: 4rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const AboutRow = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  gap: 2rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

/* ================= CARDS ================= */
const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
  max-width: 1300px;
  margin: 0 auto 5rem auto;
`;

const Card = styled(motion.div)`
  background: ${({ theme }) => theme.cardBackground};
  padding: 1.8rem;
  border-radius: 22px;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.35);
  overflow: hidden;
  cursor: pointer;
  border: 2px solid yellow;

  @media (max-width: 600px) {
    padding: 1.5rem;
  }
`;

const CardImage = styled.img`
  width: 100%;
  border-radius: 15px;
  margin-bottom: 1rem;
  transition: transform 0.4s ease;
  height: 350px;
  ${Card}:hover & {
    transform: scale(1.08);
  }
`;

const CardTitle = styled.h3`
  color: ${({ theme }) => theme.primary};
  font-weight: 700;
`;

const CardDesc = styled.p`
  color: ${({ theme }) => theme.text};
  font-size: 0.95rem;
`;

/* ================= PROCESS ================= */
const Process = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
  text-align: center;
  padding: 2rem 1rem;
  max-width: 1300px;
  margin: 0 auto 5rem auto;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const ProcessCard = styled(motion.div)`
  background: ${({ theme }) => theme.cardBackground};
  padding: 2rem 1rem;
  border-radius: 18px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid yellow;

  &:hover {
    transform: translateY(-6px);
  }

  h4 {
    margin-top: 1rem;
    font-size: clamp(1rem, 2vw, 1.2rem);
    color: ${({ theme }) => theme.primary};
  }

  p {
    font-size: clamp(0.85rem, 1.5vw, 1rem);
    margin-top: 0.5rem;
    color: ${({ theme }) => theme.text};
  }
`;

/* ================= TESTIMONIALS ================= */
const TestimonialSection = styled(Section)`
  background: ${({ theme }) => theme.cardBackground};
  padding: 3rem 2rem;
  border-radius: 20px;
  max-width: 1300px;
  margin: 0 auto 5rem auto;
`;

const TestimonialCard = styled(motion.div)`
  background: ${({ theme }) => theme.background};
  padding: 1.5rem;
  border-radius: 15px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
  border: 2px solid yellow;
`;

const TestimonialLottie = styled.div`
  width: 110px;
  height: 110px;
  margin: 0 auto 1rem;
`;

/* ================= CTA ================= */
const CTA = styled(motion.section)`
  background: linear-gradient(135deg, #0e1a42, #061341);
  color: white;
  padding: 4rem 2rem;
  border-radius: 30px;
  text-align: center;
  border: 2px solid #f5b301;
  max-width: 800px;
  margin: 0 auto 6rem auto;
`;

const CTALottie = styled.div`
  width: 220px;
  height: 220px;
  margin: 0 auto 1.5rem;
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
    color: ${({ theme }) => theme.primary};
    font-size: 1rem;
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

const aboutContent = [
  {
    title: "About Navbodh Tower",
    text: "Navbodh Tower offers premium commercial spaces in the heart of Shankar Nagar, Raipur, thoughtfully designed to support modern businesses and professionals. Combining a strategic location with contemporary infrastructure and business-friendly planning, it provides a prestigious and functional environment for enterprises to thrive. With flexible layouts, modern amenities, and excellent connectivity, Navbodh Tower is the ideal destination for businesses seeking growth, visibility, and long-term success.",
    image: img1,
  },
  {
    title: "Prime Location",
    text: "Navbodh Tower is strategically positioned in the heart of Shankar Nagar’s prominent commercial hub, one of Raipur’s most sought-after business districts. The location offers excellent road connectivity, high visibility, and easy accessibility, making it ideal for offices, retail outlets, and corporate establishments. Surrounded by established businesses, residential areas, and key city landmarks, Navbodh Tower ensures strong footfall, enhanced brand exposure, and long-term commercial value for growing and established enterprises alike.",
    image: img2,
  },
  {
    title: "Modern Facilities",
    text: "Navbodh Tower is equipped with state-of-the-art facilities designed to ensure convenience, safety, and efficiency for businesses. The building features high-speed elevators for smooth vertical movement, 24/7 security with CCTV surveillance for a safe working environment, and ample parking spaces for tenants and visitors. These modern amenities enhance day-to-day operations while providing comfort and reliability for all occupants.",
    image: img3,
  },
  {
    title: "Flexible Spaces",
    text: "Navbodh Tower offers a wide range of office, retail, and corporate spaces with flexible layouts that can be customized to suit diverse business requirements. Designed to adapt to your operational needs, these spaces allow businesses to optimize functionality, branding, and growth, making them ideal for startups, established enterprises, and expanding organizations alike.",
    image: img4,
  },
];


const properties = [
  {
    title: "Commercial Office Space – 1500 Sq. Ft.",
    image: P15,
    text: "Government-approved commercial space on the 1st floor...",
  },
  {
    title: "Commercial Office Space – 3100 Sq. Ft.",
    image: P3000,
    text: "Spacious commercial area on the 2nd floor...",
  },
  {
    title: "Multipurpose Commercial Space",
    image: map,
    text: "Flexible commercial space designed for showrooms, professional offices...",
  },
];

const processSteps = [
  {
    title: "Requirement",
    description: "Understanding your business needs and space requirements.",
    animation: requirementAnimation,
  },
  {
    title: "Shortlist",
    description: "Selecting the most suitable commercial options for you.",
    animation: shortlistAnimation,
  },
  {
    title: "Site Visit",
    description: "Guided visit to the shortlisted commercial spaces.",
    animation: siteVisitAnimation,
  },
  {
    title: "Documentation",
    description: "Smooth and transparent documentation process.",
    animation: documentationAnimation,
  },
];

const testimonials = [
  {
    name: "TheBeautyBar",
    feedback: "Navbodh Tower provided the perfect salon space with elegant interiors and a relaxing ambiance. Our clients love visiting, and our team enjoys working here every day!",
  },
  {
    name: "HDFC",
    feedback: "Setting up our bank branch at Navbodh Tower was effortless. The professional environment and prime location make it ideal for serving our customers efficiently.",
  },
  {
    name: "SheeshMahal",
    feedback: "Navbodh Tower is perfect for our vegetarian restaurant. The spacious layout, great foot traffic, and supportive management have helped us create a wonderful dining experience for our guests!",
  },
];




/* ================= MAIN COMPONENT ================= */

const ClientName = styled.p`
  font-weight: 700;
  color: ${({ theme }) => theme.primary};
  margin-top: 0.5rem;
`;

const Home = () => {
  return (
    <Container>
      {/* HERO */}
      <HeroVideoWrapper>
       <HeroCarousel />

        {/* <VideoOverlay /> */}
        <HeroContent>
          <HeroInner>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ duration: 1 }}
            >
              {/* <HeroTitle>Welcome to Navbodh Tower</HeroTitle>
              <HeroSubtitle>
                Premium Commercial Spaces in Shankar Nagar, Raipur
              </HeroSubtitle> */}
              <HeroButtons style={{ marginTop: "34rem", justifyContent: "center" }}>
                <Button
                  primary
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
           <a href="/contact">Contact Us</a>
                </Button>
                <Button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  Explore Properties
                </Button>
              </HeroButtons>
            </motion.div>
          </HeroInner>
        </HeroContent>
      </HeroVideoWrapper>

      {/* SEARCH */}
      <SearchBox
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <Select aria-label="Select Property Type">
          <option>Commercial Office</option>
          <option>Retail Showroom</option>
          <option>Corporate Space</option>
        </Select>
        <Select aria-label="Select Floor">
          <option>Ground Floor</option>
          <option>First Floor</option>
          <option>Second Floor</option>
        </Select>
        <Select aria-label="Select Size">
          <option>1000-2000 Sq. Ft.</option>
          <option>2000-3200 Sq. Ft.</option>
          
        </Select>
        <Button primary
           whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
        >Search</Button>
      </SearchBox>

      {/* ABOUT NAVBODH TOWER */}
<AboutSection>
  {aboutContent.map(({ title, text, image }, i) => (
    <AboutRow
      key={i}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1 }}
    >
      {i % 2 === 0 ? (
        <>
          <AboutText variants={slideInLeft}>
            <h2>{title}</h2>
            <p>{text}</p>
          </AboutText>
          <AboutImage variants={slideInRight}>
            <img src={image} alt={title} />
          </AboutImage>
        </>
      ) : (
        <>
          <AboutImage variants={slideInLeft}>
            <img src={image} alt={title} />
          </AboutImage>
          <AboutText variants={slideInRight}>
            <h2>{title}</h2>
            <p>{text}</p>
          </AboutText>
        </>
      )}
    </AboutRow>
  ))}
</AboutSection>

      {/* PROPERTIES */}
      <Section id="properties">
        <SectionTitle>Available Properties</SectionTitle>

        <CardsContainer>
          {properties.map(({ title, image, text }, i) => (
            <Card
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              whileHover={{ scale: 1.03 }}
            >
              <CardImage src={image} alt={title} />
              <CardTitle>{title}</CardTitle>
              <CardDesc>{text}</CardDesc>
            </Card>
          ))}
        </CardsContainer>
      </Section>

      {/* PROCESS */}
      <Section id="process">
        <SectionTitle>Our Process</SectionTitle>

        <Process>
          {processSteps.map(({ title, description, animation }, i) => (
            <ProcessCard
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              whileHover={{ scale: 1.05 }}
            >
              <Lottie
                animationData={animation}
                loop
                style={{ width: 120, height: 120 }}
              />
              <h4>{title}</h4>
              <p>{description}</p>
            </ProcessCard>
          ))}
        </Process>
      </Section>

      {/* TESTIMONIALS */}
      <TestimonialSection id="testimonials">
        <SectionTitle>What Our Clients Say</SectionTitle>

        <CardsContainer>
          {testimonials.map(({ name, feedback }, i) => (
            <TestimonialCard
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <TestimonialLottie>
                <Lottie
                  animationData={testimonialAnimation}
                  loop
                  style={{ width: "100%", height: "100%" }}
                />
              </TestimonialLottie>
              <p>{feedback}</p>
              <ClientName>- {name}</ClientName>
            </TestimonialCard>
          ))}
        </CardsContainer>
      </TestimonialSection>

      {/* CTA */}
<CTA
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={fadeUp}
>
  <CTALottie>
    <Lottie animationData={ctaAnimation} loop />
  </CTALottie>
  <h2>Ready to Elevate Your Business?</h2>
  <p>
    Contact Navbodh Tower today for premium commercial spaces tailored to
    your needs.
  </p>
  
  <a href="tel:75910-66666" style={{ textDecoration: "none" }}>
    <Button
      primary
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      style={{ marginTop: "1.5rem" }}
    >
      Get in Touch
    </Button>
  </a>
</CTA>


      {/* FOOTER */}
      <Footer />
    </Container>
  );
};

export default Home;
