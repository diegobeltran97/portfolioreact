import React, { Component } from 'react';
import Project from '../models/Project';
import doctors from "../../Utilities/img/doctorsathome2.png";
import simpleCompany from "../../Utilities/img/simplecompanypro.jpg";
import facturacion from "../../Utilities/img/app.jpg";



export default class Projectpage extends Component {
    render() {
        const projects = [
          
            {
              title: "Doctors at Home",
              image: doctors,
              descripcion: "Desarrollo de la aplicación móvil híbrida y sistema de administración.",
              tecnologia: 'React Native | Node js | Php | HTML | CSS',
              link: "/bill",
              color: "#fff"
            },
            {
              title: "Simple Company",
              image: simpleCompany,
              descripcion: "Pagina para  un grupo de apasionados emprendedores, programadores y diseñadores",
              tecnologia: 'Wordpress | js | Google Analytics',
              link: "/bill",
              color: "#fff"
            },
            {
              title: "Bill A&e",
              image: facturacion,
              descripcion:
                "Bill A&E es una facturacion virtual para almacenamiento de datos y reportes mensuales",
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
