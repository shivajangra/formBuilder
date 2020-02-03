import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import './index.css';
import App from './App'; 
import OpenTemplate from './components/template/open_template';
import TemplateList from './components/template/template_list';
// ReactDOM.render(<App />, document.getElementById('root'));
 
ReactDOM.render((
    <Router>
        <div> 
        <nav className="page_body">
          <Link to="/">Create template</Link>
          <Link to="/templatelist">TemplateList</Link>
        </nav>
  
        <Switch>
          <Route exact path="/" component={App} />
          <Route path='/opentemplate/:tempId' component={OpenTemplate} />
          <Route path="/templatelist" component={TemplateList} />
        </Switch>
        </div>
     </Router>
  ), document.getElementById('root'))
  