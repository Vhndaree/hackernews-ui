import React from 'react';
import { BrowserRouter as Router, BrowserHistory, Route } from 'react-router-dom';

import './css/reset.css';
import './css/style.css';
import Header from './layout/Header';
import Posts from './components/Posts';
import Story from './components/Stories';

class App extends React.Component {
  state = {
    news: [],
  };

  addToState = (data) => {
    this.setState({ news: [...this.state.news, data] })
  }

  getDisplayData = () => {
    let displayData = this.state.news;

    return displayData;
  }

  render() {
    return (
      <>
        <Header handleSearch={this.handleSearch} />
        <Router>
          <Posts addToState={this.addToState} displayData={this.getDisplayData()}/>
          <Route exact path="/stories/:storyId" component={Story} />
        </Router>
      </>
    );
  }
}

export default App;
