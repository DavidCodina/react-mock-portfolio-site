import React, { Component } from 'react';
import { Link }             from 'react-router-dom';
import './Navigation.css';


class Navigation extends Component {
  //////////////////////////////////////////////////////////////////////////////
  //
  //  While this implementation works well enough, it could rely more on React,
  //  rather than reaching out to the DOM.
  //  What is referred to below as collapseTargetId and targetEl exist within this component,
  //  so there's really no need to cache their DOM locations.
  //  Along those same lines, there's no need to use classList.add(), classList.remove(),
  //  classList.contains(), or style.height.
  //
  //  However, I am leaving it as is for now...
  //
  //////////////////////////////////////////////////////////////////////////////

  toggleCollapse = (e) => {
    const CLASS_SHOW       = 'show';
    const CLASS_COLLAPSE   = 'collapse';
    const CLASS_COLLAPSING = 'collapsing';
    const CLASS_COLLAPSED  = 'collapsed';
    const ANIMATION_TIME   = 350; // 0.35s
    const el               = e.currentTarget;
    const collapseTargetId = el.dataset.target || el.href || null;


    if (collapseTargetId) {
      const targetEl = document.querySelector(collapseTargetId);
      let isShown    = targetEl.classList.contains(CLASS_SHOW) || targetEl.classList.contains(CLASS_COLLAPSING);

      if(!isShown) {
        targetEl.classList.remove(CLASS_COLLAPSE);
        targetEl.classList.add(CLASS_COLLAPSING);
        targetEl.style.height = 0
        targetEl.classList.remove(CLASS_COLLAPSED);

        setTimeout(
          () => {
            targetEl.classList.remove(CLASS_COLLAPSING);
            targetEl.classList.add(CLASS_COLLAPSE, CLASS_SHOW);
            targetEl.style.height = '';
          }, ANIMATION_TIME
        );

        targetEl.style.height = targetEl.scrollHeight + 'px';
      } else {
        targetEl.style.height = `${targetEl.getBoundingClientRect().height}px`;


        ////////////////////////////////////////////////////////////////////////
        //
        //  Note: In react, just stating the following expression will generate an error:
        //
        //    targetEl.offsetHeight;
        //
        // The error being:
        //
        //    Expected an assignment or function call and instead saw an expression
        //
        //  The original code did this to 'force reflow'. While I'm not sure what that
        //  means, we can fix this error by simply assigning statement to a variable.
        //
        //    let obligatory_assignment = targetEl.offsetHeight;
        //
        //
        //  Note: without this line the navigation animation doesn't contract fluidly.
        //
        ////////////////////////////////////////////////////////////////////////
        let obligatory_assignment = targetEl.offsetHeight;


        targetEl.classList.add(CLASS_COLLAPSING);
        targetEl.classList.remove(CLASS_COLLAPSE, CLASS_SHOW);
        targetEl.style.height = '';

        setTimeout(
          () => {
            targetEl.classList.remove(CLASS_COLLAPSING);
            targetEl.classList.add(CLASS_COLLAPSE);
          }, ANIMATION_TIME
        );
      }
    }
  }

  render(){
    return (
      <nav className="navbar navbar-expand-lg navbar-dark">
        <Link className="navbar-brand" to={this.props.brandUrl}>{this.props.brandTitle}</Link>

        <button
          className="navbar-toggler custom-toggler"
          type="button" data-toggle="collapse"
          data-target="#navContent"
          aria-controls="navContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={this.toggleCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div id="navContent" className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
          {
            this.props.linksArray.map(
              (object, index) => {
                return (
                  <li key={index} className="nav-item">
                    <Link to={object.linkUrl} className="nav-link">
                      <i className={object.iconClassString} /> {object.linkTitle}
                    </Link>
                  </li>
                );
              }
            )
          }
          </ul>
        </div>
      </nav>
    );
  }
}


export default Navigation;
