export function addMovieFavorite(payload) {
    return { 
        type: "ADD_MOVIE_FAVORITE", 
        payload 
    };
}
  
export function getMovies(titulo) {
    return function(dispatch) { //regresa una acción dispatch
      return fetch("http://www.omdbapi.com/?apikey=7a03be8d&s=" + titulo)
        .then(response => response.json())
        .then(json => {
          dispatch({ type: "GET_MOVIES", payload: json });
        });
    };
}

export function getMovieDetail (idmovie) {
    return function(dispatch) {
        return fetch("http://www.omdbapi.com/?apikey=7a03be8d&i=" + idmovie + "&plot=full")
          .then(response => response.json())
          .then(json => {
            dispatch({ type: "GET_MOVIE_DETAIL", payload: json });
          });
      };
}

export function removeMovieFavorite (payload) {
    return {
        type: "REMOVE_MOVIE_FAVORITE",
        payload
    }

}

  