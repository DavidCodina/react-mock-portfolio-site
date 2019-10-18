import React, { Component } from 'react';
import './Contact.css';
import avatarImg2 from '../../../assets/images/avatar-2.png';


class Contact extends Component {
  render(){
    return (
      <div className="contact-page container-fluid">
      <div className="row">
        <div class="vertical-line"></div>

        <div className="col-md">
          <h2 className="fancy-h2">David Codina</h2>

          <img id="avatar-img" src={avatarImg2} alt="avatar"/>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu ipsum lorem.
          Pellentesque viverra placerat eros, nec ultrices tellus maximus at.
          In at felis egestas lacus eleifend vestibulum nec quis ligula.
          Cras eu viverra lorem. Praesent mollis felis non tincidunt sagittis.
          Morbi et urna magna. Curabitur dui tortor, interdum ac libero at, commodo ultricies tortor.</p>
        </div>

        <div className="col-md">
          <h2 className="fancy-h2">Contact Me</h2>
          <hr className="fancy-hr" />

          <ul className="list-group list-group-flush">
            <li className="list-group-item border-top-0">
              <i className="fas fa-phone-square"></i> (123) 456-7890
            </li>

            <li className="list-group-item">
              <i class="fas fa-envelope"></i> davidmcodina@gwhoops.com
            </li>

            <li className="list-group-item">
              <i className="fab fa-skype"></i> <em>skype_Id</em>
            </li>

            <li className="list-group-item">
              <i className="fas fa-fax"></i> (123) 456-7890
            </li>
          </ul>
        </div>
      </div>
      </div>
    );
  }
}


export default Contact;
