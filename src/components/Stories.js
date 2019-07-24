import React from 'react';

import Posts from './Posts';
class Stories extends React.Component {

  state = {
    stories: [],
  };

  componentDidMount() {
    const storyIds = this.props.location.state.data.kids;
    storyIds.map(storyId => {
      this.getComment(storyId);
    });
  }

  getComment = async (storyId) => {
    let api = await fetch('https://hacker-news.firebaseio.com/v0/item/' + storyId + '.json');
    let data = await api.json();
    const newStory = await {
      by: data.by,
      id: data.id,
      kids: data.kids || [],
      parent: data.parent,
      text: data.text,
      time: data.time,
      type: data.type,
    }

    this.addToStories(newStory);
  }

  addToStories = (newStory) => {
    this.setState({ stories: [...this.state.stories, newStory] });
  }

  render() {
    return (
      <>
        <Posts />
        <div className="story-wrapper" style={{ height: window.screen.availHeight + 'px' }}>
          <ul className="modal story-modal" style={{ height: window.screen.availHeight / 1.5 + 'px' }}>
          {this.props.location.state.data.title}
            {this.state.stories.slice(0,2).map(story => (
              <li key={story.id}><div dangerouslySetInnerHTML={{__html: story.text}} /></li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}

// export default withRouter(Stories);
export default Stories;