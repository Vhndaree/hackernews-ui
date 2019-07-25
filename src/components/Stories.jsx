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

    this.setState({ stories: storyIds })
  }

  goBack = () => {
    this.props.history.goBack();
  }

  render() {
    return (
      <>
        <div className="story-wrapper" style={{ height: window.screen.availHeight + 'px' }}>
          <ul className="modal story-modal" style={{ height: window.screen.availHeight / 1.2 + 'px' }}>
            <div className="story-title-wrapper">
              <span className="story-title">
                <a href={(this.props.location.state.data.url !== '' || this.props.location.state.data.url !== null) ? this.props.location.state.data.url : '#'} target='_blank'>
                  {this.props.location.state.data.title}
                </a>
              </span>
            </div>
            <button onClick={this.goBack}>
              <i className="fa fa-times" aria-hidden="true"></i>
            </button>

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