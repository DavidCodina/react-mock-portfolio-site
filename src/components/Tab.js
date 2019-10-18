import React from 'react';
import Card  from './Card';


const Tab = (props) => {
  return (
    <div className={(props.activeNavLink === props.index) ? 'tab-pane fade show active' : 'tab-pane fade'}>
      <h1 className="fancy-h1 text-center">{props.title}</h1>

      <div className="container-fluid">
        <div className="row">
          <div className="card-container col p-0">
            {
              props.data.map(
                (object) => {
                  return (
                    <Card
                      key={object.id}
                      imageUrl={object.imageUrl}
                      title={object.title}
                      text={object.text}
                      url={object.url}
                    />
                  );
                }
              )
            }
          </div>
         </div>
      </div>
    </div>
  );
};


export default Tab;
