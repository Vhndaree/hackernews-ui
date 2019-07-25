import React from 'react';

import NewsItem from './NewsItem';

class Posts extends React.Component {

  state = {
    news: [],
  };

  componentDidMount() {
    this.props.displayData.map(async newsId => {
      let api = await fetch('https://hacker-news.firebaseio.com/v0/item/' + newsId + '.json');
      let data = await api.json();
      this.setState({ news: [...this.state.news,data] });
    });
  }

  componentDidUpdate(prevProps, prevState) {

    if (prevProps.displayData !== this.props.displayData) {      
      this.setState({news: []});
      this.props.displayData.map(async newsId => {
        let api = await fetch('https://hacker-news.firebaseio.com/v0/item/' + newsId + '.json');
        let data = await api.json();
        this.setState({ news: [...this.state.news,data] });
      });
    }
  }

  render() {
    return (
      <div className='news-list-wrapper'>
        <ul className='news-list'>
          {this.state.news.map(news => (
            <NewsItem
              newsItem={news}
              key={news.id}
            />
          ))}
        </ul>
      </div>
    );
  }
}


export default Posts;