import React, { Component } from "react";
import Card from "../models/Card";
import {
  Link
} from 'react-router-dom';
import "../../Utilities/css/Projects.css";
import doctors from "../../Utilities/img/doctorsathome.jpg";
import simpleCompany from "../../Utilities/img/simpleCompany.png";
import facturacion from "../../Utilities/img/app.jpg";
import { withTranslation } from 'react-i18next';

 class projects extends Component {
  render() {
    const { t  } = this.props;
    const projects = [
      {
        title: "Doctors at Home",
        image: doctors,
        descripcion:
          t("Desarrollo de la aplicación móvil híbrida y sistema de administración."),
        link: "/projects"
      },
      {
        title: "Simple Company",
        image: simpleCompany,
        descripcion: t("Pagina de empresa de consultoria de software"),
        link: "/projects"
      },
      {
        title: "Bill A&E",
        image: facturacion,
        descripcion: t("Sistema de reportería, generación de facturas y gestión de productos"),
        link: "/projects"
      }
    ];
    return (
      <div className="projects">
        <h2>{t('Proyectos')}</h2>
        <div className="cards">
          {projects.map((project, i) => (
          <Link key={i} style={{textDecoration: "none"}} to={project.link}>
            <Card
              key={i}
              titulo={project.title}
              imagen={project.image}
              descripcion={project.descripcion}
             
            />
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default withTranslation() (projects);
