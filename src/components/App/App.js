import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Header from '../elements/Header/Header';
import NotFound from '../elements/NotFound/NotFound';
import Home from '../Home/Home';
import Movie from '../Movie/Movie';
// import './App.css';

const  App = () => {
  return (
    <div className="App">
      <HashRouter>
        <React.Fragment>
            <Header />
            <Switch>
              <Route path='/' component={Home} exact />
              <Route path='/:movieId' component={Movie} exact />
              <Route component={NotFound} />
            </Switch>
        </React.Fragment>
      </HashRouter>
    </div>
  )
}

export default App;
