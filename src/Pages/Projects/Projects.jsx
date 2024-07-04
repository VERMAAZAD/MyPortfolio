import styles from "./Projects.module.css";
import React from "react";

const Projects = () => {
  return (
    <div id="projects" className={styles["projectSection"]}>
      <h1>Projects</h1>
      <div className={styles["allproject"]}>
      <div className={styles["project"]}>
        <h2>Kodu Site</h2>
          <img
            src="./kodu.png"
            alt=""
            height={200}
            width={300}
          />
        <div className={styles["aboutProject"]}>
          
          <button>About</button>
            <button>View</button>
        </div>
        </div>
        <div className={styles["project"]}>
        <h2>News Site</h2>
          <img
            src="./newsProject.png"
            alt=""
            height={200}
            width={300}
          />
          <div className={styles["aboutProject"]}>
            <button>About</button>
            <button>View</button>
            
          </div>
        </div>
        <div className={styles["project"]}>
        <h2>Ecommerce Site</h2>
          <img
            src="./ecommerce.png"
            alt=""
            height={200}
            width={300}
          />
        <div className={styles["aboutProject"]}>
        <button>About</button>
        <button>View</button>
        </div>
        </div>
        <div className={styles["project"]}>
        <h2>Tic-Toc-Toe Game</h2>
          <img
            src="./tictoctoe.jpg"
            alt=""
            height={200}
            width={300}
          />
        <div className={styles["aboutProject"]}>
        <button>About</button>
        <button>View</button>
        </div>
        </div>
        <div className={styles["project"]}>
        <h2>Todo List</h2>
          <img
            src="./todo.jpg"
            alt=""
            height={200}
            width={300}
          />
        <div className={styles["aboutProject"]}>
        <button>About</button>
        <button>View</button>
        </div>
        </div>
        <div className={styles["project"]}>
        <h2>Calculator</h2>
          <img
            src="./calculator.jpg"
            alt=""
            height={200}
            width={300}
          />
        <div className={styles["aboutProject"]}>
        <button>About</button>
        <button>View</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
