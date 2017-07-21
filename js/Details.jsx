import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAPIDetails } from './actionCreators'
import Header from './Header';
import Spinner from './Spinner';

class Details extends Component {
  constructor() {
    super();
    this.state = {
      apiData: {
        rating: ''
      }
    };
  }

  componentDidMount() {
    if(!this.props.rating){
      this.props.getAPIDetails()
    }
  }
  render() {
    const { title, description, year, poster, trailer } = this.props.show;
    let rattingComponent;
    if (this.props.rating) {
      <h1>{this.props.rating}</h1>;
    } else {
      rattingComponent = <Spinner />;
    }
    return (
      <div className="details">
        <Header />
        <section>
          <h1>{title}</h1>
          <h2>({year})</h2>
          {rattingComponent}
          <img src={`/public/img/posters/${poster}`} alt={`Poser for ${title}`} />
          <p>{description}</p>
        </section>
        <div>
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${trailer}?rel=0$amp;controls=0$amp;showinfo=0`}
            frameBorder="0"
            allowFullScreen
            title={`trailer for ${title}`}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const apiData = state.apiData[ownProps.show.imdbID] ?  state.apiData[ownProps.show.imdbID] : {};
  console.log(apiData.rating);
  return{
    rating: apiData.rating
  }
}

const mapDispachToProps = (dispatch, ownProps)=>({
  getAPIDetails(){
    dispatch(getAPIDetails(ownProps.show.imdbID))
  }
})
export default connect(mapStateToProps, mapDispachToProps)(Details);
