import React from "react";
import Inner from "../UI/Inner";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import logoimg from "../../img/logo.png";
import { MenuOutlined } from "@ant-design/icons";

const Header = () => {
  return (
    <header className={classes.header}>
      <Inner>
        <div className={classes.headerWrap}>
          <div className={classes.logo}>
            <Link to='/'>
              <img src={logoimg} alt='logo' />
            </Link>
          </div>
          <div className={classes.menubar}>
            <MenuOutlined />
          </div>
          <div className={classes.menuWrap}>
            <ul className={classes.menu}>
              <li>
                <Link to='/'>NEW</Link>
              </li>
              <li>
                <Link to='/'>BEST</Link>
              </li>
              <li>
                <Link to='/'>SHOWROOM</Link>
              </li>
              <li>
                <Link to='/'>EVENT</Link>
              </li>
              <li>
                <Link to='/'>REVIEW</Link>
              </li>
            </ul>
          </div>
        </div>
      </Inner>
    </header>
  );
};

export default Header;
