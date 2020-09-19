import React, { Component } from "react";
import Typed from "react-typed";
import Logo from "../../Utilities/img/logof2.png";
import "../../Utilities/css/construcion.css";

export default class Uconstruction extends Component {
  render() {
    return (
      <div>
        <section className="bg-construction">
          <img src={Logo} alt="" width="80px" height="56px"/>
          <h3>
            {" "}
            <Typed
              strings={[
                "En construción",
                "Trabajando",
                "Getting the S#@ done"
              ]}
              typeSpeed={50}
              loop
            />
          </h3>
        </section>
      </div>
    );
  }
}
