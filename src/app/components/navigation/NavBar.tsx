"use client";

import Link from "next/link";

import { useState, useEffect } from "react";

import classes from "./NavBar.module.css";

const NavBar = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize(); // Set initial window width
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const linkContents =
    windowWidth >= 620 ? (
      <ul className={classes.linkContainer}>
        <li>
          <Link href="/">Home</Link>
        </li>

        <li>
          <Link href="/game-sessions">My Game Sessions</Link>
        </li>

        <li>
          <Link href="/spirits">Spirits</Link>
        </li>

        <li>
          <Link href="/adversaries">Adversaries</Link>
        </li>
      </ul>
    ) : (
      <>
        <button className={classes.burgerMenu} onClick={toggleMenu}>
          <div className={classes.bar}></div>
          <div className={classes.bar}></div>
          <div className={classes.bar}></div>
        </button>
      </>
    );

  return (
    <nav className={classes.nav}>
      <div className={classes.contents}>
        <div className={classes.logoContainer}>
          <Link href="/">SI Tracker</Link>
        </div>

        {linkContents}
      </div>

      <div
        className={` ${
          isMenuOpen ? classes.modal : `${classes.modal} ${classes.close}` //: classes.modal
        }`}
      >
        <ul className={classes.modal__linkContainer}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/game-sessions">My Game Sessions</Link>
          </li>
          <li>
            <Link href="/spirits">Spirits</Link>
          </li>
          <li>
            <Link href="/adversaries">Adversaries</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
