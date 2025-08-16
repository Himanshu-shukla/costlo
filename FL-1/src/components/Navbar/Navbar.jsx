import "./Navbar.scss";
import { logo } from "../../assets/index";
import { Link, scroller } from "react-scroll";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { links } from "../../constants";

const Navbar = () => {
  const [clicked, setClicked] = useState("");
  const [navBackground, setNavBackground] = useState(false);

  const navbarVariants = {
    navbar: {
      initial: {
        height: 0,
      },
      animate: {
        height: 80,
        transition: {
          duration: 0.6,
        },
      },
    },
    list: {
      initial: {
        opacity: 0,
      },
      animate: {
        opacity: 1,
        transition: {
          duration: 2,
          staggerChildren: 0.4,
        },
      },
    },
    btn: {
      initial: {
        scale: 0,
      },
      animate: {
        scale: 1,
        transition: {
          duration: 1.5,
        },
      },
    },
  };

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementsByClassName("hero")[0];
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        if (heroBottom <= 0) {
          setNavBackground(true);
        } else {
          setNavBackground(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = (l) => {
    setClicked(l);
    console.log(l);
  };
  return (
    <>
      <motion.div
        variants={navbarVariants.navbar}
        initial="initial"
        animate="animate"
        className={`navbar ${navBackground ? "scrolled" : ""}`}
      >
        <div className="navbar_logo">
          <img src={logo} alt="" />
        </div> 
        <motion.div
          variants={navbarVariants.list}
          initial="initial"
          animate="animate"
          className="navbar_list"
        >
          {links.map((l, i) => (
            <motion.li variants={navbarVariants.list} key={i}>
              <Link
                to={l}
                smooth={true}
                duration={500}
                onClick={() => handleLinkClick(l)}
                className={clicked === l ? "active" : ""}
              >
                {l}
              </Link>
            </motion.li>
          ))}
        </motion.div>
        <div className="navbar_btn">
          <motion.button
            variants={navbarVariants.btn}
            initial="initial"
            animate="animate"
            onClick={() => {
              scroller.scrollTo("contact", {
                smooth: true,
                duration: 500,
              });
            }}
          >
            Contact
          </motion.button>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
