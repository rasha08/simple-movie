import React from 'react';
import Header from './Header';
import ShowCard from './ShowCard';
import { connect } from 'react-redux';

const Search = props => (
  <div className="search">
    <Header showSearch />
    <div>
      {props.shows
        .filter(
          show => `${show.title} ${show.description}`.toLowerCase().indexOf(props.searchTerm.toLowerCase()) !== -1
        )
        .map(show => <ShowCard key={show.imdbID} show={show} />)}
    </div>
  </div>
);

const mapStateToProps = state => ({
  searchTerm: state.searchTerm
});

export default connect(mapStateToProps)(Search);
