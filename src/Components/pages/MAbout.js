import React, { Component } from "react";
import Logo from "../../Utilities/img/logof2.png";
import foto from "../../Utilities/img/about.jpg";
import "../../Utilities/css/Mabout.css";
import { withTranslation } from 'react-i18next';

class MAbout extends Component {
  render() {
    const { t } = this.props;
    return (
      <div>
        <section className="container">
          <div className="c-description">
            <img src={foto} alt="" width="300px" height="400px" />
            <div className="description">
              <h2>{t('Acerca')}</h2>
              <p>
                { t('Soy un desarrollador web vivendo en panamá con conocimientos en programación y marketing. He trabajado en diferentes proyectos y emprendimientos. Durante este proceso realice diferentes colaboraciones en desarollo y ventas,lo cual me ha permitido entender los difentes entornos que pueden llegar a la hora de crear un producto o servicio.')}</p>
              <p>  
                { t('Mi objetivo es brindar soluciones tecnológicas a los diferentes problemas que pueda tener una empresa. Mis otros intereses son el bussiness intelligence, growth Hacking y diferentes temas que involucran el crecimiento de una empresa para el éxito.')}
              </p>

              <p>
               { t('Además de ser un desarrollador , disfruto de mi tiempo, viajando,haciendo deporte,   conociendo otras culturas,leyendo y creando networking.') }
              </p>
             
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default withTranslation() (MAbout);
