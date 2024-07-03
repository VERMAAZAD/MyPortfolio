import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import HeaderComponet, { Burger } from "./HeaderComponent";
import { Link } from "react-scroll";
import { CiMenuFries } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
const Header = () => {
  const [sticky, setSticky] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
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
        <h2 className={styles["menuBar"]} onClick={() => setShowSidebar(true)}>
          <CiMenuFries />
        </h2>
      </div>
      <div
        className={styles["sticky"]}
        style={showSidebar ? { display: "block" } : { display: "none" }}
      >
        <div className={styles["slidebar"]}>
          <ul>
            {Burger.map(({ title, id, link, iClass }) => {
              return (
                <li key={id}>
                  <Link
                    onClick={() => setShowSidebar(false)}
                    activeClass="active"
                    to={link}
                    spy={true}
                    smooth={true}
                    offset={-110}
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
            <h3
              className={styles["hideSidebar"]}
              onClick={() => {
                setShowSidebar(false);
              }}
            >
              <RxCross2 />
            </h3>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
