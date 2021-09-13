import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';

import './Movie.css';
// usando destructuring
//const { match: { params: { id }}} = this.props;
// manera convencional
//const movieId = this.props.match.params.id;

class Movie extends React.Component {

    componentDidMount(){
     const movieId = this.props.match.params.id;
     this.props.getMovieDetail(movieId);
    }

    render() {
        // console.log("Estoy en el detalle de la peli");
        return (
            <div className="movie-detail">
            <h1>{this.props.movieDetail.Title}</h1>
            <h3>{this.props.movieDetail.Plot} </h3>
            </div>
        );
    }
}


function mapStateToProps(state) {
  return {
    movieDetail: state.movieDetail

  }
}

function mapDispatchToProps(dispatch) {
  return {
      getMovieDetail: (id) => dispatch(getMovieDetail(id))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Movie);