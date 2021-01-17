/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useEffect } from "react";
import "./Header.scss";
import HeaderIcon from '../../img/baseline_menu_white_18dp.png';
import { Link } from 'react-router-dom';
import { CSSTransition } from "react-transition-group";

export default function Header() {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 100vw)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = (mediaQuery: any) => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  //  addEventListener(type: "keydown", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  return (
    <header className="Header">
      <h3 className="navbar-heading">
          <Link 
            to={"/"}
            style={{ textDecoration: 'none' }}
          >
            D3, React and TypeScript
          </Link>
        </h3>
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit
      >
        <nav className="Nav">
            <Link 
                to={"/"}
                style={{ textDecoration: 'none' }}
                onClick={toggleNav}
            >
                Basic React Wrapper Example
            </Link>
            <Link 
                to={"/bar-chart"}
                style={{ textDecoration: 'none' }}
                onClick={toggleNav}
            >
                Updating Bar Chart Example
            </Link>
            <Link 
                to={"/scatter-graph"}
                style={{ textDecoration: 'none' }}
                onClick={toggleNav}
            >
                Scatter Graph Example
            </Link>
            <Link 
                to={"/column-range"}
                style={{ textDecoration: 'none' }}
                onClick={toggleNav}
            >
                Column Range Chart Example
            </Link>
        </nav>
      </CSSTransition>
      <button onClick={toggleNav} className="header-button">
        <img 
            src={HeaderIcon} 
            alt="HeaderIcon"
        />
      </button>
    </header>
  );
}