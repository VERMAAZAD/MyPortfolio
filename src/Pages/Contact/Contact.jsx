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
          <CgMail style={{ fontSize: "45px", color: "white" }} />
          Azadkumar@gmail.com
        </p>
        <p>
          <FaPhoneAlt style={{ fontSize: "40px", color: "white" }} />
          Azadkumar@gmail.com
        </p>
        <p>
          <FaLocationDot style={{ fontSize: "40px", color: "white" }} />
          Azadkumar@gmail.com
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
