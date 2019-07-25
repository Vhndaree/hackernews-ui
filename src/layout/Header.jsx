import React from 'react';

class Header extends React.Component {

  showPreviousButton = () => {
    if (this.props.page.currentPage > 1) {
      return (
        <button className="previous" onClick={() => this.props.changePage(-1)}>
          &lt;
        </button>
      );
    }
  }


  showNextButton = () => {
    if (this.props.page.currentPage < this.props.page.totalPages) {
      return (
        <button className="next" onClick={() => this.props.changePage(1)}>
          &gt;
        </button>
      );
    }
  }

  render() {
    return (
      <header>
        <div className="header-wrapper">
          <h1>The Hacker News</h1>
          {/* <div className="search-field">
            <input type="text" placeholder="SEARCH" />
            <i className="fa fa-search" aria-hidden="true"></i>
          </div> */}
          <div className="paginate">
            {this.showPreviousButton()}
            <span className="page-number">{this.props.page.currentPage}</span>
            {this.showNextButton()}
          </div>
        </div>
      </header>
    );
  }
}


export default Header;