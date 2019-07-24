import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './css/reset.css';
import './css/style.css';
import Header from './layout/Header';
import Posts from './components/Posts';
import Story from './components/Stories';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Router>
          <Route exact path="/" component={Posts} />
          <Route exact path="/stories/:storyId" component={Story} />
        </Router>
      </>
    );
  }
}

export default App;
