import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="header-wrapper">
          <h1>The Hacker News</h1>
          {/* <div className="search-field">
            <input type="text" placeholder="SEARCH" />
            <i className="fa fa-search" aria-hidden="true"></i>
          </div> */}
        </div>
      </header>
    );
  }
}


export default Header;