import React from "react";
import styles from "./Home.module.css";
import { ReactTyped } from "react-typed";

const Home = () => {
  return (
    <section class={styles["about"]} id="home">
      <div className={styles["HomeSection"]}>
        <div className={styles["intro"]}>
          <h1> I'M <span>Azad Kumar</span></h1>
          <p>
            <ReactTyped
              strings={["Frontend Developer , MERN Developer"]}
              typeSpeed={100}
              backSpeed={100}
              loop
            />
          </p>
          <button>Contact Me</button>
        </div>
      </div>
    </section>
  );
};

export default Home;
