import React, { Component } from 'react';
import { shape, string } from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled(Link)`
  width: 32%;
  border: 2px solid #333;
  border-radius: 4px;
  padding-right: 10px;
  margin-bottom: 25px;
  owerflow: hidden;
  display: inline-block;
  color:black;
  text-decoration:none;
`;

const Image = styled.img`
  width: 46%;
  float: left;
  margin-right: 10px;
`;

class ShowCard extends Component {
  shouldComponentUpdate() {
    return false;
  }
  render() {
    return (
      <Wrapper to={`/details/${this.props.show.imdbID}`}>
        <Image src={`public/img/posters/${this.props.show.poster}`} alt={`${this.props.show.title} Show Poster`} />
        <div>
          <h3>{this.props.show.title}</h3>
          <h4>{this.props.show.year}</h4>
          <p>{this.props.show.description}</p>
        </div>
      </Wrapper>
    );
  }
}

ShowCard.propTypes = {
  show: shape({
    poster: string.isRequired,
    title: string.isRequired,
    year: string.isRequired,
    description: string.isRequired,
    imdbID: string.isRequired
  }).isRequired
};
export default ShowCard;
