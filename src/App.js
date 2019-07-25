import React from 'react';
import { BrowserRouter as Router, BrowserHistory, Route } from 'react-router-dom';

import './css/reset.css';
import './css/style.css';
import Header from './layout/Header';
import Posts from './components/Posts';
import Story from './components/Stories';

class App extends React.Component {
  state = {
    newsIds: [],
    page: 0,
    isLoaded: false,
  };
  async componentDidMount() {

    let api = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json');
    let data = await api.json();
    data.map(newsId => {
      if (newsId !== null || newsId !== 'undefined') this.setState({ newsIds: [...this.state.newsIds, newsId] });
    })
    this.setState({ isLoaded: true });
  }

  getDisplayData = () => {
    let displayData = this.state.newsIds.slice(this.state.page * 20, (this.state.page + 1) * 20);
    return displayData;
  }

  changePage = (byPageNumber) => {
    this.setState({ page: this.state.page + byPageNumber });
  }

  render() {

    if (!this.state.isLoaded) {
      return (
        <></>
      )
    }
    return (
      <>
        <Header changePage={this.changePage} page={{ currentPage: this.state.page + 1, totalPages: this.state.newsIds.length / 20 }} />
        <Router>
          <Posts displayData={this.getDisplayData()} />
          <Route exact path="/stories/:storyId" component={Story} />
        </Router>
      </>
    );
  }
}

export default App;
