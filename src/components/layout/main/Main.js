import React             from 'react';
import { Route, Switch } from 'react-router-dom';
import Home              from '../../pages/home/Home';
import About             from '../../pages/about/About';
import Projects          from '../../pages/projects/Projects';
import Resume            from '../../pages/resume/Resume';
import Contact           from '../../pages/contact/Contact';
import NotFound          from "../../pages/notFound/NotFound";


const Main = () => {
  return (
    <Switch>
      <Route exact path="/"         component={Home} />
      <Route       path="/about"    component={About} />
      <Route       path="/projects" component={Projects} />
      <Route       path="/resume"   component={Resume} />
      <Route       path="/contact"  component={Contact} />
      <Route                        component={NotFound} />
    </Switch>
  );
}


export default Main;
