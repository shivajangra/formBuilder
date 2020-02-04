import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import './index.css';
import App from './App'; 
import Auth from './components/auth/auth';
import OpenTemplate from './components/template/open_template';
import TemplateList from './components/template/template_list';
// import Header from './layout/header';
// ReactDOM.render(<App />, document.getElementById('root'));
 
ReactDOM.render((
    <Router>
        <div> 
        {/* <Header /> */}
  
        <Switch>
          <Route exact path="/" component={Auth} />
          <Route path='/opentemplate/:tempId' component={OpenTemplate} />
          <Route path="/templatelist" component={TemplateList} />
          <Route path="/createtemplate" component={App} />
        </Switch>
        </div>
     </Router>
  ), document.getElementById('root'))
  