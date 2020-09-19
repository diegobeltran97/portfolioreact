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
        "Soy desarrollador web con conocimientos en programación web y marketing. Mis objeticos son crear inovaciones en el campo de la Tecnología que brinden soluciones"
    };
    return (
      <div>
        <div className="fondo">
          <div className="title">
            <div className="box">
              <h1>Diego Sastoque</h1>
              <h2>
                <Typed
                  strings={["Desarrollador", "Freelance", "Autodidacta"]}
                  typeSpeed={50}
                  loop
                />
              </h2>
            </div>
          </div>
        </div>

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
