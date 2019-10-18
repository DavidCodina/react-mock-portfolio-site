import React, { Component } from 'react';
import Tabs                 from '../../Tabs';
import './Projects.css';


class Projects extends Component {
  render(){
    return (
      <div className="projects-page container-fluid">
        <div className="row">
          <div className="col">
            <Tabs />
          </div>
        </div>
      </div>
    );
  }
}


export default Projects;
