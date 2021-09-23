import {ADD_MOVIE_FAVORITE, GET_MOVIES, GET_MOVIE_DETAIL, REMOVE_MOVIE_FAVORITE, CLEAR_MOVIE_DETAIL} from "../action-types"

const initialState = {
    moviesFavourites: [],
    moviesLoaded: [],
    movieDetail: {},
    vacio: false
  };


  function rootReducer(state = initialState, action) {

      switch (action.type){
        case ADD_MOVIE_FAVORITE:
            console.log ("Me llego para agregar: " + action.payload.id)
            return {
                ...state,
                moviesFavourites: state.moviesFavourites.concat(action.payload)
            }
        case GET_MOVIES:
            return {
                ...state,
                moviesLoaded: action.payload.Search
            }
        case GET_MOVIE_DETAIL:
            console.log ("Me llego el detalle: " + action.payload.Title)
            return {
                ...state,
                movieDetail: action.payload
            }
        case REMOVE_MOVIE_FAVORITE:
            console.log ("Me llego para borrar: " + action.payload.id)
            return {
                ...state,
                moviesFavourites: state.moviesFavourites.filter(m => m.id !== action.payload.id)
            }
        case CLEAR_MOVIE_DETAIL:
            return {
                ...state,
                movieDetail: {}
            }
        
        default:
            return {
                ...state
            }
      }
  }

  export default rootReducer;