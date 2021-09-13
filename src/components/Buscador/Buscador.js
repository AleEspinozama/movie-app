import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { getMovieDetail, getMovies, removeMovieFavorite, addMovieFavorite } from "../../actions";
import './Buscador.css';



export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }
  handleChange(event) {
    this.setState({ title: event.target.value });

  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovies(this.state.title)
  }

  render() {
    const { title } = this.state;
    console.log(this.props.movies);
    return (
      <div>
        <h2>Buscador</h2>
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label className="label" htmlFor="title">Película: </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button type="submit">BUSCAR</button>
        </form>
        <div>
         {this.props.movies.map(movie=> 
            <div key={movie.imdbID}>
                <Link to={`/movie/${movie.imdbID}`}  >
                <h3>{movie.Title}</h3>
                </Link>
                <button onClick={() => this.props.addMovieFavorite({title: movie.Title, id: movie.imdbID})}>Fav</button>
              </div>
            )
          }
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) { //trae el estado de redux en forma de props
  return {
    movies: state.moviesLoaded

  };
}

function mapDispatchToProps(dispatch) { //permite que el componente dispache acciones
  return {
    addMovieFavorite: movie => dispatch(addMovieFavorite(movie)),
    getMovies: title => dispatch(getMovies(title)),
    getMovieDetail: id => dispatch(getMovieDetail(id)),
   removeMovieFavorite: id => dispatch(removeMovieFavorite(id))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Buscador);
