import React, { Component } from "react";
import "../../Utilities/css/card.css";

export default class Card extends Component {
  render() {
    return (
      <div className="card">
        <span className="card-header">
          <img className="imagen" src={this.props.imagen} alt="funciona" />
          <span className="card-title">
            <h3>{this.props.titulo}</h3>
          </span>
        </span>
        <span className="card-summary">{this.props.descripcion}</span>
        <span className="card-meta">Published: June 18th, 2015</span>
      </div>
    );
  }
}
