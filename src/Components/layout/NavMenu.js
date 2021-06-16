import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Link
} from 'react-router-dom';
import "../../Utilities/css/menusection.css";
import "../../Utilities/js/menusection.js";
import i18n from '../../i18n';

class NavMenu extends Component {
  state = {
    off: true
  };
  setToggleClass = () => {
    this.setState({
      off: !this.state.off
    });
  };

  hideMenu = () => {
    if ( this.state.off != true ) {
      this.setState({
        off: !this.state.off
      });
    }
   
  }


  changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }


 

  render() {
    const { links } = this.props;
    return (
      <div   className={this.state.off ? "menu-section" : "menu-section on"}>
        <div
          onClick={this.setToggleClass}
          className={this.state.off ? "menu-toggle" : "menu-toggle on"}
        >
          <div className="one" />
          <div className="two" />
          <div className="three" />
        </div>

        <nav>
          <ul className={this.state.off ? "hidden" : "m"}>
            {links.map((link, index) => (
              <li key={"mykey" + index}  onClick={this.hideMenu} >
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
            <li>
              <a href="#">Lan</a>
              <ul className="dropdown">
                <li onClick={() => this.changeLanguage('en')}><a href="#">Eng</a></li>
                <li onClick={() => this.changeLanguage('es')}><a href="#">Spa</a></li> 
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default NavMenu;
