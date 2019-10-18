import React, {Component } from 'react';
import Progress            from '../../Progress';
import avatarImg4          from '../../../assets/images/avatar-4.png';
import './Resume.css';


class Resume extends Component {
  render(){
    return (
      <div className="resume-page container-fluid">
        <div className="row">
          <div className="col-lg-4 resume-left">
            <figure>
              <img
                src={avatarImg4}
                alt="avatar"
              />
            </figure>

            <h2 className="fancy-h2">David Codina</h2>

            <h4 className="fancy-h4">Programmer</h4>

            <hr className="fancy-hr" />

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu ipsum lorem.
            Pellentesque viverra placerat eros, nec ultrices tellus maximus at.
            In at felis egestas lacus eleifend vestibulum nec quis ligula.
            Cras eu viverra lorem. Praesent mollis felis non tincidunt sagittis.
            Morbi et urna magna. Curabitur dui tortor, interdum ac libero at, commodo ultricies tortor.</p>

            <hr className="fancy-hr" />

            <h5 className="fancy-h5">Address:</h5>
            <p>123 Fake ST Hackersville Washington, 98004</p>

            <h5 className="fancy-h5">Phone:</h5>
            <p>(123) 456-7890</p>

            <h5 className="fancy-h5">Email:</h5>
            <p>davidmcodina@gwhoops.com</p>

            <h5 className="fancy-h5">Web:</h5>
            <p>mywebsite.com</p>
          </div>

          <div className="col-lg-8 resume-right">
            <h2 className="fancy-h2">Education:</h2>

            <div className="flex-container">
              <div>
                <h5 className="fancy-h5"> 2002 - 2006 </h5>
              </div>
              <div>
                <h4 className="fancy-h4">1st University</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu ipsum lorem.
                Pellentesque viverra placerat eros, nec ultrices tellus maximus at.</p>
              </div>
            </div>

            <div className="flex-container">
              <div>
                <h5 className="fancy-h5"> 2016 - 2018 </h5>
              </div>
              <div>
                <h4 className="fancy-h4">2nd University</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu ipsum lorem.
                Pellentesque viverra placerat eros, nec ultrices tellus maximus at.</p>
              </div>
            </div>


            <hr className="fancy-hr"/>


            <h2 className="fancy-h2">Experience:</h2>

            <div className="flex-container">
              <div>
                <h5 className="fancy-h5"> 2006 - 2010 </h5>
              </div>
              <div>
                <h4 className="fancy-h4">Employment 1</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu ipsum lorem.
                Pellentesque viverra placerat eros, nec ultrices tellus maximus at.</p>
              </div>
            </div>

            <div className="flex-container">
              <div>
                <h5 className="fancy-h5"> 2010 - 2016 </h5>
              </div>
              <div>
                <h4 className="fancy-h4">Employment 2</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu ipsum lorem.
                Pellentesque viverra placerat eros, nec ultrices tellus maximus at.</p>
              </div>
            </div>

            <hr className="fancy-hr" />

            <h2 className="fancy-h2">Skills:</h2>

            <Progress classes="html"       skill="HTML"       value={100} />
            <Progress classes="css"        skill="CSS"        value={100} />
            <Progress classes="sass"       skill="Sass"       value={80}  />
            <Progress classes="bootstrap"  skill="Bootstrap"  value={95}  />
            <Progress classes="javascript" skill="Javascript" value={100} />
            <Progress classes="jquery"     skill="jQuery"     value={85}  />
            <Progress classes="react"      skill="React"      value={90}  />
            <Progress classes="php"        skill="PHP"        value={75}  />
            <Progress classes="node"       skill="Node"       value={70}  />
            <Progress classes="sql"        skill="SQL"        value={100} />
            <Progress classes="mongo"      skill="Mongo"      value={80}  />
            <Progress classes="firebase"   skill="Firebase"   value={50}  />
            <Progress classes="github"     skill="GitHub"     value={100} />
          </div>
        </div>
      </div>
    );
  }
}


export default Resume;
