import { Link } from "react-router-dom";
import styles from "./home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAirbnb,
  faCss3,
  faHtml5,
  faJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <div>
      <section className={styles.sect1}>
        <div className={styles.intro}>
          <h1>
            SOFTWARE <br />
            <span>DEVELOPER</span>
          </h1>
          <h3>
            <p>
              Hi, I'm <strong>Ebuka</strong>, a self-taught software developer
              specializing in building modern, full-stack web applications. I
              create interactive and visually appealing websites using{" "}
              <strong>React, Next.js, Tailwind CSS, TypeScript</strong>, and
              integrate robust backend functionality with{" "}
              <strong>Supabase</strong> and <strong>Golang</strong>. My projects
              demonstrate real-world problem-solving, from dynamic data fetching
              and secure user authentication to responsive design and smooth UI
              interactions. I'm passionate about turning ideas into scalable,
              high-quality applications and am eager to contribute to projects
              that challenge me and help me grow as a full-stack developer.
            </p>
          </h3>
          <a href="#projects">Explore my Projects</a>
        </div>

        <div className={styles.myImageDiv}></div>
      </section>

      <section className={styles.sect2} data-aos="fade-up">
        <h1>Tools/Skillset</h1>
        <div className={styles.iconsDiv}>
          <FontAwesomeIcon icon={faHtml5} color="#e44d26" />
          <FontAwesomeIcon icon={faCss3} color="#1572b6" />
          <FontAwesomeIcon icon={faJs} color="#f7df1e" />
          <FontAwesomeIcon icon={faReact} color="#61dafb" />
          <img src="/next-js.svg" alt="NextJs" width={200} height={200} />
        </div>

        <h1 className={styles.projectsHdr} id="projects">
          Projects
        </h1>

        <div className={styles.projectsDiv}>
          <div className={styles.project}>
            <div className={styles.projectImgDiv}>
              <img src="/EBN Home Page Sceenshot.png" />
            </div>
            <p>
              A modern news platform built with React that fetches real-time
              stories from multiple categories using a live API. Built for
              speed, clarity, and a clean reading experience.
            </p>

            <div className={styles.projectLinkDiv}>
              <a href="https://ebnews.netlify.app">
                <h4>Ebuka News Website Link</h4>
              </a>
            </div>
          </div>

          <div className={styles.project}>
            <div className={styles.projectImgDiv}>
              <img src="/ebukart_website_screenshot.png" />
            </div>
            <p className={styles.ebukartDescription}>
              A sleek and fully functional e-commerce website built with
              Next.js, TypeScript, and Tailwind CSS. It features secure Stripe
              checkout, real-time data management with Supabase, state handling
              via Zustand, and a modern UI powered by Shadcn, all validated with
              Zod for reliability and performance.
            </p>

            <div className={styles.projectLinkDiv}>
              <a href="https://ebukart.vercel.app">
                <h4>Ebukart E-Commerce/Shopping Website Link</h4>
              </a>
            </div>
          </div>

          <div className={styles.project}>
            <div className={styles.projectImgDiv}>
              <img src="/Cinebuka Movie Explorer App Screenshot.png" />
            </div>
            <p>
              A sleek React-based movie discovery app that lets users browse
              top-rated films, view detailed information, and save favorites to
              a personal watchlist. It integrates with the OMDb API for live
              movie data and features responsive design, smooth animations, and
              a mobile-friendly sidebar navigation. The app also includes a
              Golang backend for secure user account management, allowing users
              to delete accounts safely and providing a health check endpoint to
              keep the backend responsive.
            </p>

            <div className={styles.projectLinkDiv}>
              <a href="https://cinebuka.netlify.app">
                <h4>Cinebuka Movie Explorer Web App Link</h4>
              </a>
            </div>
          </div>

          <div className={styles.project}>
            <div className={styles.projectImgDiv}>
              <img src="/Stocks-Checker-App-Screenshot.png" />
            </div>
            <p>
              A real-time stock tracking tool that displays live market data.
              Designed for quick insights with a clean, minimalist UI.
            </p>
            <div className={styles.projectLinkDiv}>
              <a href="https://mystockschecker.netlify.app">
                <h4>Stocks Checker Website Link</h4>
              </a>
            </div>
          </div>
        </div>

        <h1 className={styles.certificatesHdr} id="certifications">
          Certifications
        </h1>

        <div className={styles.certificationsDiv}>
          <div className={styles.certificationsImgDiv}>
            <img src="/Alison-Certificate1.png" />
          </div>

          <div className={styles.certificationsImgDiv}>
            <img src="/Grasshopper-ReactNative-Certificate.png" />
          </div>

          <div className={styles.certificationsImgDiv}>
            <img src="/Introduction to JavaScript_certificate(PNG-FORMAT).png" />
          </div>

          <div className={styles.certificationsImgDiv}>
            <img src="/JavaScript-Intermediate-Certificate-SoloLearn(PNG-FORMAT).png" />
          </div>

          <div className={styles.certificationsImgDiv}>
            <img src="/My-JavaScript-Certificate-From-CodeLiber.jpg" />
          </div>
        </div>
      </section>

      <section className={styles.sect3} id="about" data-aos="zoom-in">
        <div>
          <h1>About Me</h1>
          <p>
            I'm a frontend developer passionate about turning ideas into
            interactive and visually appealing web experiences. I've built
            projects using{" "}
            <strong>
              React, Next.js, TypeScript, Tailwind CSS, Zustand, Zod, Shadcn,
              Stripe,
            </strong>{" "}
            and <strong>Supabase</strong>.
          </p>

          <p>
            I started learning web development because I love seeing designs
            come to life in the browser and enjoy solving real-world problems
            through code. I'm currently improving my skills in building scalable
            Next.js applications and exploring backend integrations.
          </p>

          <p>
            I'm open to internship opportunities, freelance projects and
            collaborations that will help me grow into a full-stack developer.
            I'm eager to apply my skills to real-world challenges. When I'm not
            coding, I enjoy watching wrestling matches, football, and listening
            to music.
          </p>

          <div className={styles.workTogetherBtnDiv}>
            <Link to="/contact" className={styles.workTogetherBtn}>
              Let's Work Together
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
