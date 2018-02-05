import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
    }
  }

  onSubmitForm = (event) => {
    event.preventDefault();
    this.props.onSearchTermChange(this.state.term);
  }

  render() {
    return (
      <div className="search-bar">
        <form onSubmit={this.onSubmitForm}>
          <input
            onChange={event => this.setState({term: event.target.value})}/><br
            value={this.state.term}
          />
        </form>
        <button type="submit" style={{display: 'none'}}></button>
      </div>
    );

  }
}

export default SearchBar;
