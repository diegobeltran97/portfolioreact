import React, { Component } from "react";
import NavMenu from "./NavMenu";
import logo from "../../Utilities/img/logof2.png";
import "../../Utilities/css/header.css";
import { withTranslation } from 'react-i18next';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class Header extends Component {
  render() {
    const { t , title } = this.props;
  
    const Links = [
      { label: t('Inicio'), to: "/" },
      { label: t('Acerca'), to: "/about" },
      { label: t('Proyectos'), to: "/projects" },
      { label: t('Blog'), to: "/Blog" }
    ];
    return (
        <div>
          <header className="heade ">
            <div>
              <div className="logo">
              <Link to="/" > <img src={logo} width="80px" alt="" /> </Link>
              </div>
            </div>
            <NavMenu links={Links} />
           
          </header>
        </div>
        
    );
  }
}

Header.defaultProps = {
  title: "Diego Sastoque"
};
export default withTranslation()(Header);
