import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import map from "../assets/map2.png";

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
import HeroCarousel from "../components/HeroCarousel"
import requirementAnimation from "../assets/lottie/requirement.json";
import shortlistAnimation from "../assets/lottie/shortlist.json";
import siteVisitAnimation from "../assets/lottie/site-visit3.json";
import documentationAnimation from "../assets/lottie/documentation.json";
import testimonialAnimation from "../assets/lottie/profile.json";
import ctaAnimation from "../assets/lottie/Customer Support.json";
import  sq1500 from '../assets/1500.jpg';
import sq3000  from '../assets/3000SQ.jpg';
import premiumspace from "../assets/premiumspace.jpg";
import RetailShowroom from "../assets/RetailShowroom.jpg";
import Warehouse from "../assets/Warehouse.jpg";

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
const SectionTitle = styled.h2`
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

// const VideoOverlay = styled.div`
//   position: absolute;
//   inset: 0;
//   background: linear-gradient(
//     to right,
//     rgba(11, 28, 45, 0.9),
//     rgba(11, 28, 45, 0.55)
//   );
// `;
const HeroContent = styled.div`
   position: absolute; /* ensure it overlays the video/carousel */
  inset: 0; /* top, right, bottom, left = 0 */
  display: flex;
  flex-direction: column;
  justify-content: center; /* vertical center */
  align-items: center; /* horizontal center */
  text-align: center; /* center text */
  padding: 0 1.5rem;
  z-index: 2;
`;

const HeroInner = styled.div`
    max-width: 800px; /* optional, limits text width */
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
  justify-content: center; /* center buttons horizontally */
  flex-wrap: wrap; /* wrap on small screens */
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
    font-size: 1.2rem
19.2px
;
    background: linear-gradient(135deg, #f5b301, #d99a00);
    color: #fff;
    box-shadow: 0 12px 30px rgba(245, 179, 1, 0.35);

  background: ${({ primary }) =>
    primary
      ? "linear-gradient(135deg, #f5b301, #d99a00)"
      : "#e5e7eb"};

  color: ${({ primary }) => (primary ? "#0b1c2d" : "#111")};

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

const Highlights = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1.2rem;
  margin-top: 2.5rem;
`;

const HighlightCard = styled(motion.div)`
  background: ${({ theme }) => theme.background};
  padding: 1.2rem;
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
  text-align: center;

  h4 {
    color: ${({ theme }) => theme.primary};
    font-size: 1.4rem;
    margin-bottom: 0.3rem;
  }

  p {
    font-size: 0.9rem;
  }
`;

const MissionVision = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`;

const MVCard = styled(motion.div)`
  background: ${({ theme }) => theme.cardBackground};
  padding: 1.5rem;
  border-radius: 18px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);
  text-align: left;

  h3 {
    color: ${({ theme }) => theme.primary};
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.95rem;
    line-height: 1.6;
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

const AboutContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;

  h2 {
    color: ${({ theme }) => theme.primary};
    margin-bottom: 0.5rem;
    font-size: clamp(1.8rem, 2.5vw, 2.5rem);
  }

  p {
    color: ${({ theme }) => theme.text};
    line-height: 1.6;
    font-size: 1rem;
  }

  @media (max-width: 900px) {
    text-align: center;
    padding: 0;
  }
`;

const aboutContent = [
  {
    title: "About Navbodh Tower",
    text: "Premium commercial spaces in Shankar Nagar, Raipur. Strategically located for business growth.",
    image: img1,
  },
  {
    title: "Prime Location",
    text: "Located at the bustling Shankar Nagar commercial hub.",
    image: img2,
  },
  {
    title: "Modern Facilities",
    text: "Elevators, 24/7 security, and ample parking spaces.",
    image: img3,
  },
  {
    title: "Flexible Spaces",
    text: "Offices, retail, and corporate layouts tailored to your needs.",
    image: img4,
  },
];

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





const aboutImages = [img1, img2, img3, img4];

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

  @media (max-width: 600px) {
    padding: 1.5rem;
  }
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
    grid-template-columns: 1fr; /* stack cards on small screens */
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

  @media (max-width: 600px) {
    h4 {
      margin-top: 1rem;
      font-size: 1.6rem;
      color: ${({ theme }) => theme.primary};
    }
    p {
      font-size: 1rem;
      margin-top: 0.5rem;
      color: ${({ theme }) => theme.text};
    }
  }
`;

/* ================= TESTIMONIALS ================= */
const TestimonialLottie = styled.div`
  width: 110px;
  height: 110px;
  margin: 0 auto 1rem;

  @media (max-width: 768px) {
    width: 90px;
    height: 90px;
  }
`;

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
`;

const ClientName = styled.h4`
  margin-top: 1rem;
  color: ${({ theme }) => theme.primary};
`;

/* ================= CTA ================= */

const CTALottie = styled.div`
  width: 220px;
  height: 220px;
  margin: 0 auto 1.5rem;

  @media (max-width: 768px) {
    width: 160px;
    height: 160px;
  }
`;

const CTA = styled(motion.section)`
  background: linear-gradient(135deg, #0b1c2d, #081421);
  color: white;
  padding: 4rem 2rem;
  border-radius: 30px;
  text-align: center;
  border: 2px solid #f5b301;
  max-width: 800px;
  margin: 0 auto 6rem auto;
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

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 3rem;
  }
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

const properties = [
  {
    title: "Commercial Office Space – 1500 Sq. Ft.",
    image:
      sq1500,
    text: "Government-approved commercial space on the 1st floor at Navbodh Tower, ideal for offices, clinics, and consultancies. Prime location in Shankar Nagar, Raipur.",
  },
  {
    title: "Commercial Office Space – 3100 Sq. Ft.",
    image:
      sq3000,
    text: "Spacious commercial area on the 2nd floor, suitable for corporate offices, banks, or large business setups with modern amenities and lift access.",
  },
  {
    title: "Multipurpose Commercial Space",
    image:
      map,
    text: "Flexible commercial space designed for showrooms, professional offices, or service-based businesses in a high-visibility commercial hub.",
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
    name: "Rahul Sharma",
    feedback:
      "Navbodh Tower provided us a perfect office space. Professional and responsive team!",
  },
  {
    name: "Anjali Verma",
    feedback:
      "Great experience renting a retail showroom. Prime location and easy documentation.",
  },
  {
    name: "Suresh Gupta",
    feedback:
      "Highly recommend Navbodh Tower for corporate offices. Excellent property management.",
  },
];

/* ================= FOOTER COMPONENT ================= */
const Footer = () => (
  <FooterContainer>
    <TopSection>
      <CompanyInfo>
        <h2>Navbodh Tower</h2>
        <p>
          Premium commercial spaces in Raipur. Offices, retail, and corporate
          buildings for growing businesses.
        </p>
      </CompanyInfo>

      <Links>
        <h3>Quick Links</h3>
        <a href="#properties">Properties</a>
        <a href="#process">Process</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#contact">Contact</a>
      </Links>

      <ContactInfo>
        <h3>Contact Us</h3>
        <p>
          <FaPhoneAlt /> +91 98765 43210
        </p>
        <SocialMedia>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
        </SocialMedia>
      </ContactInfo>
    </TopSection>

    <BottomSection>
      <p>© {new Date().getFullYear()} Navbodh Tower. All rights reserved.</p>
      <p>Designed with ❤️ by YourCompany</p>
    </BottomSection>
  </FooterContainer>
);

/* ================= MAIN COMPONENT ================= */
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
              <HeroTitle>Welcome to Navbodh Tower</HeroTitle>
              <HeroSubtitle>
                Premium Commercial Spaces in Shankar Nagar, Raipur
              </HeroSubtitle>
              <HeroButtons>
                <Button
                  primary
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Us
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
          <option>2000-4000 Sq. Ft.</option>
          <option>4000+ Sq. Ft.</option>
        </Select>
        <Button primary>Search</Button>
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
        <Button
          primary
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          style={{ marginTop: "1.5rem" }}
        >
          Get in Touch
        </Button>
      </CTA>

      {/* FOOTER */}
      <Footer />
    </Container>
  );
};

export default Home;
