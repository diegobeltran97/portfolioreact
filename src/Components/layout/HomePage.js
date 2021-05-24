import React, { Component } from "react";
import "../../Utilities/css/homepage.css";
import Typed from "react-typed";
import About from "./About";
import Contacthome from './Contacthome'
import Projects from "./Projects";
import Logo from "../../Utilities/img/logof2.png";
class HomePage extends Component {
  render() {
    const about = {
      title: "Acerca",
      logo: Logo,
      description:
        "Mi nombre es Diego Sastoque, desarrollador especializado en tecnologias web, colaborando en diferentes proyectos y emprendimientos. Durante este proceso he aprendido.."
    };
    return (
      <div>
        <section className="container-home" >
          <div className="fondo"></div>
          <div className="title">
            <div className="box">
              <h1>Diego Sastoque</h1>
              <h2>
                <Typed
                  strings={["Desarrollador", "Freelancer", "Autodidacta"]}
                  typeSpeed={50}
                  loop
                />
              </h2>
            </div>
          </div>
        </section>

        <About
          className="about"
          titulo={about.title}
          imagen={about.logo}
          descripcion={about.description}
        />
        <Projects className="projects" />
        <Contacthome/>
      </div>
    );
  }
}

export default HomePage;
