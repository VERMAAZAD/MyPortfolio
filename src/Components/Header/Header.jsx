import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import HeaderComponet, { Burger } from "./HeaderComponent";
import { Link } from "react-scroll";
const Header = () => {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleBurgerMenu = () => {
      if (window.scrollY > 100) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleBurgerMenu);
  });
  return (
    <div className={`${sticky ? `${styles["navSection"]}` : ""}`}>
      <div className={styles["navbar"]}>
        <div className={styles["left"]}>PortFolio</div>
        <div className={styles["right"]}>
          {HeaderComponet.map(({ title, id, link }) => {
            return (
              <li key={id}>
                <Link
                  activeClass="active"
                  to={link}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  {title}
                </Link>
              </li>
            );
          })}
        </div>
      </div>
      <div className={styles["sticky"]}>
        {/* <div className={styles["slidebar"]}>
          <ul>
            {Burger.map(({ title, id, link, iClass }) => {
              return (
                <li key={id}>
                  <Link
                    activeClass="active"
                    to={link}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    <span className={styles["icon"]}>
                      <i className={iClass}></i>
                    </span>
                    <span className={styles["text"]}>{title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div> */}
      </div>
    </div>
  );
};

export default Header;
