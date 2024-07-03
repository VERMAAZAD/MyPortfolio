import React from "react";
import styles from "./About.module.css";
import { FaHtml5 } from "react-icons/fa6";

const About = () => {
  return (
    <div
      id="about"
      className={styles["aboutSection"]}
      style={{ color: "white" }}
    >
      
      <div className={styles["content"]}>
        <h1>About</h1>
        <p>
          As a fresher full stack developer, I bring a blend of enthusiasm and
          foundational skills to tackle both front-end and back-end challenges.
          Equipped with knowledge in languages like <span> HTML, CSS, JavaScript, Php, C,</span> and
          proficiency in frameworks such as <span> React, Node.js and Express,js</span> I am eager to
          contribute innovative solutions and collaborate effectively within
          teams. My adaptability and passion for learning drive me to stay
          updated with industry trends and best practices, ensuring I deliver
          robust and user-friendly applications. With a commitment to quality
          and a proactive approach to problem-solving, I am poised to make
          meaningful contributions and grow professionally in this dynamic
          field.
        </p>
      </div>
      <center>
        <h2>My Skills</h2>
      </center>
      <div className={styles["skills"]}>
        <div className={styles["language"]}>
          <img src="./images/html.png" alt="" />
          <p>HTML</p>
        </div>
        <div className={styles["language"]}>
          <img src="./images/css-3.png" alt="" />
          <p>CSS</p>
        </div>
        <div className={styles["language"]}>
          <img src="./images/js.png" alt="" />
          <p>JAVASCRIPT</p>
        </div>
        <div className={styles["language"]}>
          <img src="./images/physics.png" alt="" />
          <p>REACT.JS</p>
        </div>
      </div>
      <div className={styles["skills"]}>
        <div className={styles["language"]}>
          <img src="./images/nodejs.png" alt="" />
          <p>NODE.JS</p>
        </div>
        <div className={styles["language"]}>
          <img src="./images/database.png" alt="" />
          <p>MONGODB</p>
        </div>
        <div className={styles["language"]}>
          <img src="./images/php.png" alt="" />
          <p>PHP</p>
        </div>
       
      </div>
      <div className={styles["skills"]}>
        <div className={styles["language"]}>
          <img src="./images/example.png" alt="" style={{background: "yellow"}} />
          <p>EXPRESS</p>
        </div>
        <div className={styles["language"]}>
          <img src="./images/bootstrap.png" alt="" />
          <p>BOOTSTRAP</p>
        </div>
        <div className={styles["language"]}>
          <img src="./images/wordpress.png" alt="" />
          <p>WORDPRESS</p>
        </div>
        <div className={styles["language"]}>
          <img src="./images/letter-c.png" alt="" />
          <p>C</p>
        </div>
      </div>
    </div>
  );
};

export default About;
