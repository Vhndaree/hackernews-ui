import React from 'react';

import NewsItem from './NewsItem';

class Posts extends React.Component {

  state = {
    news: [],
  };

  async componentDidMount() {
    // fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
    //   .then(response => response.json())
    //   .then(data => {
    //     data.map(newsId => {
    //       this.getNews(newsId);
    //     });
    //   });
    //  () => {

    // })()
    let api = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json');
    let data = await api.json();
    data.slice(0, 20).map(newsId => {
      this.getNews(newsId);
    })
  }

  getNews = async (newsId) => {
    let api = await fetch('https://hacker-news.firebaseio.com/v0/item/' + newsId + '.json');
    let data = await api.json();

    this.setState({ news: [...this.state.news, data] });
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