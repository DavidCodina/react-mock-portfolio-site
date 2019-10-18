import React, { Component } from 'react';


////////////////////////////////////////////////////////////////////////////////
//
//  One can also use the public folder as indicated here:
//
//      https://create-react-app.dev/docs/using-the-public-folder/
//
//
//  However, that's not necessarily the Create React App way...
//  Consequently, in most cases, I have used an import statement linking
//  to an image directory that exists as a child of src.
//
//  However, the <Tab /> component maps through an array of data that is used to
//  return a 'list' of <Card /> components. The array contains objects, and each
//  object has an imageUrl property with a string value that corresponds to the
//  appropriate image.
//
//  In this case, it makes more sense to store the images in the public folder.
//
////////////////////////////////////////////////////////////////////////////////

import avatarImg1 from '../../../assets/images/avatar.png';
import './Home.css';


class Home extends Component {
  render(){
    return (
      <div className="home-page container-fluid">
        <div className="row">
          <div className="col">
            <figure className="avatar-figure">
              <img className="avatar-img" src={avatarImg1} alt="male avatar" />
            </figure>

            <article className="banner-text">
              <h2 className="fancy-h2">Full Stack Web Developer</h2>

              <hr className="fancy-hr"/>

              <p className="text-center m-0 p-2">HTML | CSS/Sass | JS/jQuery/React | PHP/Node | MySQL/MongoDB/Firebase</p>

              <div className="social-links">
                <a href="https://www.google.com/?client=safari" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>

                <a href="https://www.google.com/?client=safari" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i>
                </a>

                <a href="https://www.google.com/?client=safari" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-codepen"></i>
                </a>

                <a href="https://www.google.com/?client=safari" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </article>
          </div>
        </div>
      </div>
    );
  }
}


export default Home;
