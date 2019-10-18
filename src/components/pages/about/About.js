import React, { Component } from 'react';
import avatarImg3           from '../../../assets/images/avatar-3.png';
import './About.css';


class About extends Component {
  render(){
    return (
      <div className="about-page container-fluid">
        <div className="row">
          <div className="col">
            <h2 className="fancy-h2">About this guy:</h2>

            <div>
              <img id="avatar-img" src={avatarImg3} alt="avatar"/>

              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu ipsum lorem.
              Pellentesque viverra placerat eros, nec ultrices tellus maximus at.
              In at felis egestas lacus eleifend vestibulum nec quis ligula.
              Cras eu viverra lorem. Praesent mollis felis non tincidunt sagittis.
              Morbi et urna magna. Curabitur dui tortor, interdum ac libero at, commodo ultricies tortor.</p>

              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu ipsum lorem.
              Pellentesque viverra placerat eros, nec ultrices tellus maximus at.
              In at felis egestas lacus eleifend vestibulum nec quis ligula.
              Cras eu viverra lorem. Praesent mollis felis non tincidunt sagittis.
              Morbi et urna magna. Curabitur dui tortor, interdum ac libero at, commodo ultricies tortor.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default About;
