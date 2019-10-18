import React from 'react';

////////////////////////////////////////////////////////////////////////////////
//
// One could use the Bootstrap implementation:
//
//        <div className="progress-container">
//          <h5 className="fancy-h5">Javascript</h5>
//
//          <div className="progress bg-white">
//            <div className="progress-bar progress-bar-striped" style={{width: '25%'}}>25%</div>
//          </div>
//        </div>
//
//
//  But I wanted to do it, more or less, from scratch...
//  That said, <progress> has little or no support in IE.
//
////////////////////////////////////////////////////////////////////////////////


const Progress = (props) => {
  const paddingLeftValue = `${(props.value / 2) - 3}%`  ;
  return (
    <div className="progress-container">
      <div className="progress-title-container">
        <h5 className="fancy-h5">{props.skill}</h5>
      </div>

      <div className="progress-bar-container">
        <progress className={props.classes} max="100" value={props.value}></progress>
        <div
          className="progress-value-div"
          style={{
            paddingLeft: paddingLeftValue
          }}
        >{props.value}%</div>
      </div>
    </div>
  );
}

export default Progress;
