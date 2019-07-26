import React from 'react';
import { Link } from 'react-router-dom';

class NewsItem extends React.Component {

  render() {
    const { id, by, time, title } = this.props.newsItem;
    return (
      <li className='news-item'>
        <span className='title'>
          <Link
            to={{
              pathname: '/stories/' + id ,
              state: { data: this.props.newsItem },
            }}
          >
            {title}
          </Link>
        </span>
        <span className='author'>{'Author: ' + by + ' | '}</span>
        <span className='time'>{'Published on: ' + new Date(time*1000).toLocaleString()}</span>
      </li>
    );
  }
}


export default NewsItem;