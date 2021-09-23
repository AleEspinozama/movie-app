import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail, clearMovieDetail } from '../../actions/index';
import { Link } from 'react-router-dom';

import './Movie.css';
// usando destructuring
//const { match: { params: { id }}} = this.props;
// manera convencional
//const movieId = this.props.match.params.id;

class Movie extends React.Component {

    componentDidMount(){
     this.props.clearMovieDetail();
     const movieId = this.props.match.params.id;
     this.props.getMovieDetail(movieId);
    }

    render() {
         console.log(this.props.movieDetail);
        return (
            <div className="container row">
            <img src={this.props.movieDetail.Poster} alt={this.props.movieDetail.Title} className= "column imgdetail"></img>
              <div className="movie-details column">
                  <h1>{this.props.movieDetail.Title}</h1>
                  <h3>{this.props.movieDetail.Plot} </h3>
                  <div className="minims">
                      <h3>Director: {this.props.movieDetail.Director} </h3>
                      <h3>Writer: {this.props.movieDetail.Writer} </h3>
                      <h3>Actors: {this.props.movieDetail.Actors} </h3>
                      <h3>Year: {this.props.movieDetail.Year} </h3>
                      <h3>Language: {this.props.movieDetail.Language} </h3>
                      <h3>Genre: {this.props.movieDetail.Genre} </h3>
                      <h3>Box office: {this.props.movieDetail.BoxOffice} </h3>
                      <h3>Awards: {this.props.movieDetail.Awards} </h3>
                      <h3>Released: {this.props.movieDetail.Released} </h3>
                      <h3>Year: {this.props.movieDetail.Year} </h3>
                      <h3>{this.props.movieDetail.Runtime} </h3>
                      <h3>IMDB rating: {this.props.movieDetail.imdbRating} </h3>
                  </div>
                  <Link exact to="/movie-app" className= "title back">Home</Link>
              </div>
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
      getMovieDetail: (id) => dispatch(getMovieDetail(id)),
      clearMovieDetail: () => dispatch(clearMovieDetail())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Movie);