import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from '../elements/Header/Header';
import NotFound from '../elements/NotFound/NotFound';
import Home from '../Home/Home';
import Movie from '../Movie/Movie';
// import './App.css';

const  App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <React.Fragment>
            <Header />
            <Switch>
              <Route path='/' component={Home} exact />
              <Route path='/:movieId' component={Movie} exact />
              <Route component={NotFound} />
            </Switch>
        </React.Fragment>
      </BrowserRouter>
    </div>
  )
}

export default App;
