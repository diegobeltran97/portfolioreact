import React, { Component } from 'react';
import Project from '../models/Project';
import doctors from "../../Utilities/img/doctorsathome2.png";
import simpleCompany from "../../Utilities/img/simplecompanypro.jpg";
import facturacion from "../../Utilities/img/app.jpg";
import { withTranslation } from 'react-i18next';


class Projectpage extends Component {
    render() {
      const { t } = this.props;
        const projects = [
          
            {
              title: "Doctors at Home",
              image: doctors,
              descripcion: t("Desarrollo de la aplicación móvil híbrida y sistema de administración."),
              tecnologia: 'React Native | Node js | Php | HTML | CSS',
              link: "https://www.doctorsathome.com/",
              color: "#fff"
            },
            {
              title: "Simple Company",
              image: simpleCompany,
              descripcion: t("Pagina para  un grupo de apasionados emprendedores, programadores y diseñadores"),
              tecnologia: 'Wordpress | js | Google Analytics',
              link: "https://simplecompany.io/",
              color: "#fff"
            },
            {
              title: "Bill A&e",
              image: facturacion,
              descripcion:
                t("Bill A&E es una facturacion virtual para almacenamiento de datos y reportes mensuales"),
              tecnologia: 'Node js | Materialize | HTML | CSS',
              client: "Bills A&E",
              link: "https://productsae.herokuapp.com/",
              color: "#fff"
              
            }
          ];
        
        return (
            <div>
        {projects.map((project, i) => (
            <Project
              key={i}
              titulo={project.title}
              tecnologia={project.tecnologia}
              image={project.image}
              description={project.descripcion}
              color={project.color}
              link={project.link}
              
            />
          ))}
            </div>
        )
    }
}


export default withTranslation() (Projectpage)
