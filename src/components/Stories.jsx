import React from 'react';
import { Link } from 'react-router-dom';

import Posts from './Posts';
import DecendantStories from './DecendantStories';
class Stories extends React.Component {

  state = {
    stories: [],
  };

  componentDidMount() {
    const storyIds = this.props.location.state.data.kids || [];

    this.setState({stories: storyIds})
  }

  render() {
    return (
      <>
        <div className="story-wrapper" style={{ height: window.screen.availHeight + 'px' }}>
          <ul className="modal story-modal" style={{ height: window.screen.availHeight / 1.5 + 'px' }}>
            <div className="story-title-wrapper">
              <span className="story-title">
                <a href={(this.props.location.state.data.url !== '' || this.props.location.state.data.url !== null) ? this.props.location.state.data.url : '#'} target='_blank'>
                  {this.props.location.state.data.title}
                </a>
              </span>
            </div>
            <Link
              to={{
                pathname: '/',
              }}
            >
              <i className="fa fa-times" aria-hidden="true"></i>
            </Link>

            {this.state.stories.map((storyId, key) => (
              <DecendantStories key={key} storyId={storyId} />
            ))}
          </ul>
        </div>
      </>
    );
  }
}

export default Stories;