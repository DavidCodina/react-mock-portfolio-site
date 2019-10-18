import React, { Component } from 'react';
import Tab                  from './Tab';
import tabs                 from '../data/tab-data';


class Tabs extends Component {
  state = {
    activeNavLink: 0,
    tabs: []
  };

  componentDidMount(){
    this.setState({ tabs });
  }

  changeTab = (index) => {
    this.setState({ activeNavLink: index })
  };

  //The tab button could/should also be rendered from the data.
  render(){
    return (
      <div className="tab-container">
        <div className="tab-buttons-container">
          <button
            className={ (this.state.activeNavLink === 0) ? 'btn btn-primary' : 'btn'}
            onClick={ () => this.changeTab(0)}
          >React</button>

          <button
            className={ (this.state.activeNavLink === 1) ? 'btn btn-primary' : 'btn'}
            onClick={ () => this.changeTab(1)}
          >PHP</button>

          <button
            className={ (this.state.activeNavLink === 2) ? 'btn btn-primary' : 'btn'}
            onClick={ () => this.changeTab(2)}
          >Javascript</button>
        </div>


        <div className="tab-content">
          {
            this.state.tabs.map(
              (tab, index) => {
                return (
                  <Tab
                    key={index}
                    index={index}
                    title={tab.title}
                    activeNavLink={this.state.activeNavLink}
                    data={tab.data}
                  />
                );
              }
            )
          }
        </div>
      </div>
    );
  }
}


export default Tabs;
