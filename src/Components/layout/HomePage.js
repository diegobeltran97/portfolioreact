import React, { Component } from 'react';
import '../../Utilities/css/homepage.css';
import Typed from 'react-typed';
import About from './About';
import Contacthome from './Contacthome';
import Projects from './Projects';
import Logo from '../../Utilities/img/logof2.png';
import { withTranslation } from 'react-i18next';
class HomePage extends Component {
  render() {
    const { t } = this.props;
    const about = {
      title: 'Acerca',
      logo: Logo,
      description: t(
        'Soy un desarrollador web vivendo en panamá con conocimientos en programación y marketing. He trabajado en diferentes proyectos y emprendimientos. Durante este proceso realice diferentes colaboraciones en desarollo y ventas,lo cual me ha permitido entender los difentes entornos que pueden llegar a la hora de crear un producto o servicio.'
      ),
    };
    const subTitle = [t('Desarrollador'), t('Freelancer'), t('Autodidacta')];
    return (
      <div>
        <section className='container-home'>
          <div className='fondo'></div>
          <div className='title'>
            <div className='box'>
              <h1>Diego Sastoque</h1>
              <h2>
                <Typed strings={subTitle} typeSpeed={50} loop />
              </h2>
            </div>
          </div>
        </section>

        <About
          className='about'
          titulo={about.title}
          imagen={about.logo}
          descripcion={about.description}
        />
        <Projects className='projects' />
        <Contacthome />
      </div>
    );
  }
}

export default withTranslation()(HomePage);
