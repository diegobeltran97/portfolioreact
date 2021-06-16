import React, { Component } from "react";
import {
  Link
} from 'react-router-dom';
import "../../Utilities/css/About.css";

export default class About extends Component {
  render() {
    const { titulo, descripcion, imagen } = this.props;
    return (
      <div>
        <section className="about container">
          <img src={imagen} alt="logo" width="75px" height="50px" />
          <div className="subtitle">
            <h2>{titulo}</h2>
          </div>
          <p className="description">
            {descripcion} <Link to="/about">...leer más</Link>
          </p>
        </section>
      </div>
    );
  }
}
