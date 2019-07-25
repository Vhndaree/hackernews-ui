import React from 'react';
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

  goBackOnOuterDivCLick = (e) => {

    if (e.target.className === 'story-wrapper') {
      this.goBack();
    }
  }

  render() {
    return (
      <>

        <button className='button' onClick={this.goBack}>
          <i className="fa fa-times" aria-hidden="true"></i>
        </button>
        <div className="story-wrapper" onClick={this.goBackOnOuterDivCLick}>
          <ul className="modal story-modal" style={{ height: window.screen.availHeight / 1.2 + 'px' }}>
            <div className="story-title-wrapper">
              <span className="story-title">
                <a href={(this.props.location.state.data.url !== '' || this.props.location.state.data.url !== null) ? this.props.location.state.data.url : '#'} target='_blank'>
                  {this.props.location.state.data.title}
                </a>
              </span>
            </div>

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