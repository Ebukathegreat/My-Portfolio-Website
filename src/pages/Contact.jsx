"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//import { Mail, Phone, MapPin } from "lucide-react";
import styles from "./contact.module.css";
import {
  faEnvelope,
  faLocationDot,
  faMapLocation,
  faMapLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function ContactPage() {
  return (
    <div className={styles.contactPage}>
      <div className={styles.container}>
        {/* Header Section */}
        <div className={styles.header}>
          <h1>Get In Touch</h1>{" "}
          <p>
            Have a project in mind, want to collaborate, or just say hello? I'd
            love to hear from you. Fill out the form below or reach me directly
            via email and social media.
          </p>
        </div>

        {/* Main Content */}
        <div className={styles.mainContent}>
          {/* Contact Form */}
          <form
            action="https://getform.io/f/bpjnjyxb"
            method="POST"
            className={styles.form}
          >
            <div className={styles.formGroup}>
              <label>Name</label>
              <input type="text" name="name" placeholder="Your Name" required />
            </div>

            <div className={styles.formGroup}>
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label>Subject</label>
              <input
                type="text"
                name="subject"
                placeholder="What’s this about?"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label>Message</label>
              <textarea
                name="message"
                rows="4"
                placeholder="Type your message here..."
                required
              ></textarea>
            </div>

            <button type="submit" className={styles.sendBtn}>
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className={styles.info}>
            <div className={styles.infoItem}>
              <FontAwesomeIcon icon={faEnvelope} size="2x" />
              <span>support@notarealemail.com</span>
            </div>

            <div className={styles.socials}>
              <h3>Follow Me</h3>
              <div className={styles.socialLinks}>
                <a href="#">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faTwitter} />{" "}
                </a>
              </div>
            </div>

            <div className={styles.businessHours}>
              <h3>Business Hours</h3>
              <p>
                I&apos;m here for you{" "}
                <span className={styles.pulseText}>24/7</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
