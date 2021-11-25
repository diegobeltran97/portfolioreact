import React, { Component } from 'react';
import '../../Utilities/css/Projects.css';

export default class Project extends Component {
  render() {
    return (
      <div>
        <div
          className='container-page-project'
          style={{ backgroundColor: this.props.color }}
        >
          <div className='project_image'>
            <img src={this.props.image} alt='imagen'></img>
          </div>

          <div className='project_description'>
            <p className='titulo'>{this.props.titulo}</p>

            <p className='description'>{this.props.tecnologia}</p>

            <p className='description'>{this.props.description}</p>
            <ul className='description'>
              <li>
                <span>Project:</span>
                {this.props.titulo}
              </li>
              <li>
                <span>Role:</span>
                {this.props.role}
              </li>
              <li>
                <span>Demo</span>
                <a href={this.props.link}>{this.props.titulo}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
