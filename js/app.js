import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

function ScrollToTop({ history }) {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    }
  });

  return (null);
}

export default withRouter(ScrollToTop);

function App() {
    return (
      <Router>
        <ScrollToTop /> {/* Include the ScrollToTop component */}
        <Switch>
          {/* Define your routes using <Route> components */}
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    );
  }
  var $grid = $('.gridder').isotope({
    itemSelector: '.grid-item',
    percentPosition: true
  })
  $('.grid').isotope({
    itemSelector: '.grid-item'
  });