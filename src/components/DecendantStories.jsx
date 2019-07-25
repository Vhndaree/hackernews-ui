import React from 'react';

class DecendantStories extends React.Component {

  state = {
    data: {},
  }

  async componentDidMount() {
    const api = await fetch('https://hacker-news.firebaseio.com/v0/item/' + this.props.storyId + '.json');
    let data = await api.json();

    this.setState({ data : data});
  }

  displayDecendantStories = (kids) => {

    if (kids && kids.length > 0) {

      return (
        <li className='decendants'>
          {kids.map((id, key) => (
            <DecendantStories storyId={id} key={key} />
          ))}
        </li>
      );
    }
  }

  render() {
    console.log(this.state.data)
    return (
      <>
        <li className='story'>
          <div dangerouslySetInnerHTML={{ __html: this.state.data.text }} />
          <span className='author'>{'comment by: ' + this.state.data.by + ' | '}</span>
          <span className='time'>{'Published on: ' + new Date(this.state.data.time).toLocaleString()}</span>
        </li>
        {this.displayDecendantStories(this.state.data.kids)}
      </>
    );
  }
}

export default DecendantStories;