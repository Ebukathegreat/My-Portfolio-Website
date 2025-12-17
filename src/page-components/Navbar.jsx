import { Link, useNavigate } from "react-router-dom";
import styles from "./navbar.module.css";
export default function Navbar() {
  const navigate = useNavigate();

  function scrollToSection(id) {
    navigate("/");

    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  }
  return (
    <nav className={styles.navbar}>
      <Link to="/">Home</Link>
      <a
        href="#projects"
        onClick={(e) => {
          e.preventDefault();
          scrollToSection("certifications");
        }}
      >
        Certifications
      </a>
      <a
        href="#about"
        onClick={(e) => {
          e.preventDefault();
          scrollToSection("about");
        }}
      >
        About
      </a>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}
