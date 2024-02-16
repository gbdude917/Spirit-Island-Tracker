"use client";

import Link from "next/link";

import { useState, useEffect, useRef } from "react";

import classes from "./NavBar.module.css";

const NavBar = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const burgerButtonRef = useRef<HTMLButtonElement>(null);

  // Check window size so that nav can determine to use burger menu
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

  // Modal close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // If the click happened outside of modal and the burger button, close menu
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node) &&
        burgerButtonRef.current &&
        !burgerButtonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isNotRendering = windowWidth != 0;

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
        <button
          className={classes.burgerMenu}
          onClick={toggleMenu}
          ref={burgerButtonRef}
        >
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

        {isNotRendering && linkContents}
      </div>

      <div
        className={` ${
          isMenuOpen ? classes.modal : `${classes.modal} ${classes.close}` //: classes.modal
        }`}
        ref={modalRef}
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
