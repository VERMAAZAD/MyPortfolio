import styles from "./Projects.module.css";
import React from "react";

const Projects = () => {
  return (
    <div id="projects" className={styles["projectSection"]}>
      <h1>Projects</h1>
      <div className={styles["allproject"]}>
        <div className={styles["project"]}>
          <img
            src="./pexels-pixabay-220053.jpg"
            alt=""
            height={200}
            width={300}
          />
          <div className={styles["aboutProject"]}>
            <h2>Project Name</h2>
          </div>
        </div>

        <div className={styles["project"]}>
          <img
            src="./pexels-cottonbro-3944377.jpg"
            alt=""
            height={200}
            width={300}
          />
        <div className={styles["aboutProject"]}>
          <h2>Project Name</h2>
        </div>
        </div>
        <div className={styles["project"]}>
          <img
            src="./pexels-n-voitkevich-6214471.jpg"
            alt=""
            height={200}
            width={300}
          />
        <div className={styles["aboutProject"]}>
          <h2>Project Name</h2>
        </div>
        </div>
        <div className={styles["project"]}>
          <img
            src="./pexels-breakingpic-3299.jpg"
            alt=""
            height={200}
            width={300}
          />
        <div className={styles["aboutProject"]}>
          <h2>Project Name</h2>
        </div>
        </div>
        <div className={styles["project"]}>
          <img
            src="./pexels-polina-tankilevitch-6927334.jpg"
            alt=""
            height={200}
            width={300}
          />
        <div className={styles["aboutProject"]}>
          <h2>Project Name</h2>
        </div>
        </div>
        <div className={styles["project"]}>
          <img
            src="./pexels-n-voitkevich-6214471.jpg"
            alt=""
            height={200}
            width={300}
          />
        <div className={styles["aboutProject"]}>
          <h2>Project Name</h2>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
