import React from 'react';

import NewsItem from './NewsItem';

class Posts extends React.Component {

  state = {
    news: [],
  };

  componentDidMount() {
    fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
      .then(response => response.json())
      .then(data => {
        data.map(newsId => {
          this.getNews(newsId);
        });
      });
  }

  getNews = (newsId) => {
    fetch('https://hacker-news.firebaseio.com/v0/item/' + newsId + '.json')
      .then(response => response.json())
      .then(data => {
        const newNews = {
          by: data.by,
          descendants: data.descendants,
          id: data.id,
          kids: data.kids,
          score: data.score,
          time: data.time,
          title: data.title,
          type: data.type,
          url: data.url,
        }

        this.addToNews(newNews);
      });
  }

  addToNews = (newNews) => {
    this.setState({ news: [...this.state.news, newNews] });
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