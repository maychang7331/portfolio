import { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import { List, X } from "@phosphor-icons/react";

function NavItem({
  activeSection,
  to,
  setActiveSection,
  label,
  closeMobileNav,
}) {
  return (
    <li className={`main__nav--item ${activeSection === to ? "active" : ""}`}>
      <Link
        to={to}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        onSetActive={() => setActiveSection(to)}
        onClick={closeMobileNav}
      >
        {label}
      </Link>
    </li>
  );
}

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const prevScrollPos = useRef(0);

  const handleMobileClick = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const closeMobileNav = () => {
    setIsMobileNavOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      const sections = document.querySelectorAll("section");

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 70;
        const sectionHeight = section.offsetHeight;
        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleNavScroll = () => {
      const nav = document.querySelector("nav");
      const navHeight = getComputedStyle(nav).getPropertyValue("height").trim();

      const scrollPosition = window.pageYOffset || window.scrollY;

      if (scrollPosition > prevScrollPos.current) {
        // scroll down
        nav.style.transform = `translateY(-${navHeight})`;
      } else {
        // scroll up
        nav.style.transform = "translateY(0)";
      }

      prevScrollPos.current = scrollPosition;
    };

    window.addEventListener("scroll", handleNavScroll);

    return () => {
      window.removeEventListener("scroll", handleNavScroll);
    };
  }, []);

  return (
    <nav className={`nav ${isMobileNavOpen ? "open" : ""}`}>
      <a className="logo" href="./">
        May
      </a>
      <div className="main__nav">
        <ul className="main__nav--list">
          <NavItem
            activeSection={activeSection}
            setActiveSection={setActiveSection}
            to="about"
            label="About"
            closeMobileNav={closeMobileNav}
          />
          <NavItem
            activeSection={activeSection}
            setActiveSection={setActiveSection}
            to="experience"
            label="Experience"
            closeMobileNav={closeMobileNav}
          />
          <NavItem
            activeSection={activeSection}
            setActiveSection={setActiveSection}
            to="project"
            label="Project"
            closeMobileNav={closeMobileNav}
          />
          <NavItem
            activeSection={activeSection}
            setActiveSection={setActiveSection}
            to="contact"
            label="Contact"
            closeMobileNav={closeMobileNav}
          />
          <li className="link link--border-oval link--fill-hover main__nav--resume">
            <a
              href="./May_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
      <div className="mobile__nav--overlay"></div>
      <button className="btn mobile__nav--btn" onClick={handleMobileClick}>
        {isMobileNavOpen ? <X /> : <List />}
      </button>
    </nav>
  );
};

export default Navbar;
