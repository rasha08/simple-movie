import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setSearchTerm } from './actionCreators';

const Header = props => {
  let utilSpace;
  if (props.showSearch) {
    utilSpace = <input onChange={props.handleSearchTerm} value={props.searchTerm} type="text" placeholder="search" />;
  } else {
    utilSpace = (
      <h2>
        <Link to="/search">
          Back
        </Link>
      </h2>
    );
  }
  return (
    <header>
      <Link to="/">
        <h1>svideo</h1>
      </Link>
      {utilSpace}
    </header>
  );
};

Header.defaultProps = {
  showSearch: false
};

const mapStateToProps = state => ({
  searchTerm: state.searchTerm
});
const mapDispatchToProps = dispatch => ({
  handleSearchTerm(event) {
    dispatch(setSearchTerm(event.target.value));
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
