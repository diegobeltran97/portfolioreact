import React, { Component } from "react";
import Logo from "../../Utilities/img/logof2.png";
import foto from "../../Utilities/img/about.jpg";
import "../../Utilities/css/Mabout.css";

export default class MAbout extends Component {
  render() {
    return (
      <div>
        <section className="container">
          <div className="c-description">
            <img src={foto} alt="" width="300px" height="400px" />
            <div className="description">
              <h2>Acerca</h2>
              <p>
                Soy un desarrollador web vivendo en panamá con conocimientos en
                programación y marketing. Mis objetivos es comprender como las
                compañias trabajan y como se puede inovar con diferentes
                tecnologias.
                Además de ser un desarrollador , disfruto la mayor parte de
                mi tiempo tomando cursos, leyendo y sobretodo creando networking.  
              </p>
              <p>
                Mis otro intereses  son el marketing, bussiness
                intelligence, growth Hacking y diferentes temas que involucran
                el crecimiento de una empresa para el éxito. trabajar en entornos que a la gente le
                guste crecer en sí mismos y tenga diferentes sueños sobre su
                compañía, para mí esto es lo más importante en una empresa,
                crear valor y creer en ello.
              </p>
             
            </div>
          </div>
        </section>
      </div>
    );
  }
}
