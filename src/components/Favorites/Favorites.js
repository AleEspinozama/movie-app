import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { getMovieDetail, removeMovieFavorite } from "../../actions";
import './Favorites.css';

export class ConnectedList extends Component {
 

  render() {
    console.log(this.props.movies);
    return (
      <div className="favslist">
          <h2>Favorites</h2>
          <div className="lista">
              {this.props.movies.map(movie=> 
                <div key={movie.id}>
                  <Link to={`/movie/${movie.id}`}  >
                    <img src={movie.poster} alt={movie.title}></img>
                  </Link>
                  <div className="det">
                  <h3>{movie.title}</h3>
                  <button onClick={() => this.props.removeMovieFavorite({id: movie.id})}>X</button>
                  </div>
              </div>
                )
              }
        </div>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    movies: state.moviesFavourites
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getMovieDetail: id => dispatch(getMovieDetail(id)),
    removeMovieFavorite: id => dispatch(removeMovieFavorite(id))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedList);
