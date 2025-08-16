import "./Hero.scss";
import "../../App.scss";
import { scroller } from "react-scroll";
import { motion } from "framer-motion";
import { heroData } from "../../constants";

const heroVariants = {
  initial: {
    y: -500,
    opacity: 0.2,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 2,
      staggerChildren: 0.1,
    },
  },
};

const Hero = () => {
  return (
    <>
      <div className="hero">
        <swiper-container
          slidesPerView={1}
          loop={true}
          autoplay={{ disableOnInteraction: true }}
          speed={1000}
        >
          {heroData.map((h) => (
            <swiper-slide key={h.id}>
              <div className="hero_slide">
                <img src={h.bgImg} alt="Background" />
                <motion.div
                  className="hero_content"
                  variants={heroVariants}
                  initial="initial"
                  animate="animate"
                >
                  <motion.h1 variants={heroVariants}>{h.heading1}</motion.h1>
                  <motion.h1 variants={heroVariants}> {h.heading2}</motion.h1>
                  <motion.p variants={heroVariants}>{h.subHeading}</motion.p>
                  <motion.div variants={heroVariants} className="hero_btns">
                    <motion.button
                      className="btn"
                      onClick={() => {
                        scroller.scrollTo("contact", {
                          smooth: true,
                          duration: 500,
                        });
                      }}
                    >
                      Learn More
                    </motion.button>
                    <motion.a
                      id="download_brochure_btn"
                      className="btn"
                      href="Astrologer_Arya.pdf"
                      download={"Astrologer_Arya.pdf"}
                    >
                      Download Brochure
                    </motion.a>
                  </motion.div>
                </motion.div>
              </div>
            </swiper-slide>
          ))}
        </swiper-container>
      </div>
    </>
  );
};

export default Hero;
