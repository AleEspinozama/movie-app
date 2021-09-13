import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { getMovieDetail, removeMovieFavorite } from "../../actions";
import './Favorites.css';

export class ConnectedList extends Component {
 

  render() {
    console.log(this.props.movies);
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
         {this.props.movies.map(movie=> 
          <li key={movie.id}>
            <Link to={`/movie/${movie.id}`}  >
            <h3>{movie.title}</h3>
            </Link>
            <button onClick={() => this.props.removeMovieFavorite({id: movie.id})}>X</button>
          </li>
            )
          }
        </ul>
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
