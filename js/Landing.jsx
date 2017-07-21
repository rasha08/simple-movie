import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setSearchTerm } from './actionCreators';

class Landing extends Component {
  constructor() {
    super();

    this.goToSearch = this.goToSearch.bind(this);
  }
  goToSearch(event) {
    event.preventDefault();
    this.props.history.push('/search');
  }
  render() {
    return (
      <div className="landing">
        <h1>svideo</h1>
        <form onSubmit={this.goToSearch}>
          <input
            onChange={this.props.handleSearchTerm}
            value={this.props.searchTerm}
            type="text"
            placeholder="search..."
          />
          <Link to="/search">or browse all...</Link>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({ searchTerm: state.searchTerm });
const mapDispatchToProps = dispatch => ({
  handleSearchTerm(event) {
    dispatch(setSearchTerm(event.target.value));
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(Landing);
