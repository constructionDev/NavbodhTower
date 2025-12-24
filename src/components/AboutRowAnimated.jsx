import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import styled from "styled-components";

const AboutRowAnimated = ({ title, text, image, reverse }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: false, // important: allow multiple triggers
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden"); // reset when out of view
    }
  }, [inView, controls]);

  const textVariants = {
    hidden: { opacity: 0, x: reverse ? 100 : -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: reverse ? -100 : 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <AboutRow ref={ref}>
      {reverse ? (
        <>
          <AboutImage
            as={motion.div}
            variants={imageVariants}
            initial="hidden"
            animate={controls}
          >
            <img src={image} alt={title} />
          </AboutImage>
          <AboutText
            as={motion.div}
            variants={textVariants}
            initial="hidden"
            animate={controls}
          >
            <h2>{title}</h2>
            <p>{text}</p>
          </AboutText>
        </>
      ) : (
        <>
          <AboutText
            as={motion.div}
            variants={textVariants}
            initial="hidden"
            animate={controls}
          >
            <h2>{title}</h2>
            <p>{text}</p>
          </AboutText>
          <AboutImage
            as={motion.div}
            variants={imageVariants}
            initial="hidden"
            animate={controls}
          >
            <img src={image} alt={title} />
          </AboutImage>
        </>
      )}
    </AboutRow>
  );
};

/* ===== Styled Components ===== */
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

export default AboutRowAnimated;
