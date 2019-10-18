import React, { Component }  from 'react';
import Header from './components/layout/header/Header';
import Main   from './components/layout/main/Main';


class App extends Component {
  render(){
    return (
      <React.Fragment>
        <Header />
        <Main />
      </React.Fragment>
    );
  }
}

export default App;
