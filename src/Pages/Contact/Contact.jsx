import React from "react";
import styles from "./Contact.module.css";
import { CgMail } from "react-icons/cg";
import { FaPhoneAlt, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { FaLocationDot, FaLinkedinIn } from "react-icons/fa6";
import { CiTwitter } from "react-icons/ci";

const Contact = () => {
  return (
    <div id="contact" className={styles["ContactSection"]}>
      <fieldset>
        <legend>Contact Me</legend>
      </fieldset>
      <div className={styles["contact_type"]}>
        <p>
          <CgMail  />
          Azadkumar@gmail.com
        </p>
        <p>
          <FaPhoneAlt />
          +91-9729791096
        </p>
        <p>
          <FaLocationDot  />
          Sirsa, Haryana
        </p>
      </div>
      <fieldset>
        <legend className={styles["contact_icons"]}>
          <a href="">
            {" "}
            <FaWhatsapp />
          </a>

          <a href="">
            <CiTwitter />
          </a>
          <a href="">
            <FaLinkedinIn />
          </a>
          <a href="">
            <FaInstagram />
          </a>
        </legend>
      </fieldset>
    </div>
  );
};

export default Contact;
