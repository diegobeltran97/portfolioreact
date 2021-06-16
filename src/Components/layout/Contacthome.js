import React, { Component } from "react";
import "../../Utilities/css/Contacthome.css";
import "../../Utilities/fonts/style.css";
import Logo from "../../Utilities/img/logof2.png";
import { withTranslation } from 'react-i18next';

 class Contacthome extends Component {
  render() {
    const { t } = this.props;
    return (
      <div>
        <section className="contacthome">

        <h2>{t("Interesado en un Proyecto?")}</h2>
          <h2 className="correo">diegosastoque97@gmail.com</h2>
          <ul className="icons">
            <li>
              <a href="https://github.com/diegobeltran97" className="icon-github" />
            </li>
            <li>
              <a href="https://instagram.com/sastoque_diego?igshid=7ecdwfzvpamc" className="icon-instagram" />
            </li>
            <li>
              <a href="https://www.linkedin.com/in/diego-sastoque-747b93127/" className="icon-linkedin" />
              </li>
          </ul>
          <img src={Logo} alt="logo" width="75px" height="50px" />
        </section>
      </div>
    );
  }
}

export default withTranslation() (Contacthome);
