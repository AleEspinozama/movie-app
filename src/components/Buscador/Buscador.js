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
        <div className= "movieslist">      
         { this.props.movies?.map(movie=> 
            <div key={movie.imdbID} className="movie" >
                <Link to={`/movie-app/movie/${movie.imdbID}`}  >
                <img src={movie.Poster} alt={movie.Title}></img>
                </Link>
                  <div className="det">
                    <h3>{movie.Title}</h3>
                    <button onClick={() => this.props.addMovieFavorite({title: movie.Title, id: movie.imdbID, poster: movie.Poster})}>
                              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-star" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#a905b6" fill="none" strokeLinecap="round" strokeLinejoin="round">
                              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                              <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                               </svg>
                    </button>   
                  </div>       
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
    movies: state.moviesLoaded,
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
