(this["webpackJsonp12-react-redux"]=this["webpackJsonp12-react-redux"]||[]).push([[0],{29:function(e,t,i){},35:function(e,t,i){},41:function(e,t,i){},42:function(e,t,i){},43:function(e,t,i){},44:function(e,t,i){"use strict";i.r(t);var o=i(0),n=i.n(o),a=i(17),r=i.n(a),c=(i(29),i(12)),s=i(13),l=i(15),j=i(14),h=i(10),d=i(5),u="ADD_MOVIE_FAVORITE",v="GET_MOVIES",p="GET_MOVIE_DETAIL",b="REMOVE_MOVIE_FAVORITE",m="CLEAR_MOVIE_DETAIL";function O(e){return function(t){return fetch("http://www.omdbapi.com/?apikey=7a03be8d&i="+e+"&plot=full").then((function(e){return e.json()})).then((function(e){t({type:p,payload:e})}))}}function f(e){return{type:b,payload:e}}i(35);var x=i(1),D=function(e){Object(l.a)(i,e);var t=Object(j.a)(i);function i(){return Object(c.a)(this,i),t.apply(this,arguments)}return Object(s.a)(i,[{key:"render",value:function(){var e=this;return console.log(this.props.movies),Object(x.jsxs)("div",{className:"favslist",children:[Object(x.jsx)("h2",{children:"Favorites"}),Object(x.jsx)("div",{className:"lista",children:this.props.movies.map((function(t){return Object(x.jsxs)("div",{children:[Object(x.jsx)(d.b,{to:"/movie/".concat(t.id),children:Object(x.jsx)("img",{src:t.poster,alt:t.title})}),Object(x.jsxs)("div",{className:"det",children:[Object(x.jsx)("h3",{children:t.title}),Object(x.jsx)("button",{onClick:function(){return e.props.removeMovieFavorite({id:t.id})},children:"X"})]})]},t.id)}))})]})}}]),i}(o.Component);var g=Object(h.b)((function(e){return{movies:e.moviesFavourites}}),(function(e){return{getMovieDetail:function(t){return e(O(t))},removeMovieFavorite:function(t){return e(f(t))}}}))(D),y=(i(41),function(e){Object(l.a)(i,e);var t=Object(j.a)(i);function i(e){var o;return Object(c.a)(this,i),(o=t.call(this,e)).state={title:""},o}return Object(s.a)(i,[{key:"handleChange",value:function(e){this.setState({title:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.getMovies(this.state.title)}},{key:"render",value:function(){var e,t=this,i=this.state.title;return console.log(this.props.movies),Object(x.jsxs)("div",{children:[Object(x.jsx)("h2",{children:"Buscador"}),Object(x.jsxs)("form",{className:"form-container",onSubmit:function(e){return t.handleSubmit(e)},children:[Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{className:"label",htmlFor:"title",children:"Pel\xedcula: "}),Object(x.jsx)("input",{type:"text",id:"title",autoComplete:"off",value:i,onChange:function(e){return t.handleChange(e)}})]}),Object(x.jsx)("button",{type:"submit",children:"BUSCAR"})]}),Object(x.jsx)("div",{className:"movieslist",children:null===(e=this.props.movies)||void 0===e?void 0:e.map((function(e){return Object(x.jsxs)("div",{className:"movie",children:[Object(x.jsx)(d.b,{to:"/movie-app/movie/".concat(e.imdbID),children:Object(x.jsx)("img",{src:e.Poster,alt:e.Title})}),Object(x.jsxs)("div",{className:"det",children:[Object(x.jsx)("h3",{children:e.Title}),Object(x.jsx)("button",{onClick:function(){return t.props.addMovieFavorite({title:e.Title,id:e.imdbID,poster:e.Poster})},children:Object(x.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-star",width:"20",height:"20",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"#a905b6",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[Object(x.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),Object(x.jsx)("path",{d:"M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"})]})})]})]},e.imdbID)}))})]})}}]),i}(o.Component));var w=Object(h.b)((function(e){return{movies:e.moviesLoaded}}),(function(e){return{addMovieFavorite:function(t){return e({type:u,payload:t})},getMovies:function(t){return e((i=t,function(e){return fetch("http://www.omdbapi.com/?apikey=".concat("7a03be8d","&s=").concat(i)).then((function(e){return e.json()})).then((function(t){e({type:v,payload:t})}))}));var i},getMovieDetail:function(t){return e(O(t))},removeMovieFavorite:function(t){return e(f(t))}}}))(y);i(42);function M(){return Object(x.jsxs)("header",{className:"navbar",children:[Object(x.jsx)(d.b,{exact:!0,to:"/movie-app/",className:"title",children:"Movie App"}),Object(x.jsx)("nav",{children:Object(x.jsx)("ul",{className:"list",children:Object(x.jsxs)("li",{className:"list-item",children:[Object(x.jsx)(d.c,{exact:!0,to:"/movie-app/",children:"Home"}),Object(x.jsx)(d.c,{to:"/movie-app/favs",children:"Favoritas"})]})})})]})}var E=i(3),N=(i(43),function(e){Object(l.a)(i,e);var t=Object(j.a)(i);function i(){return Object(c.a)(this,i),t.apply(this,arguments)}return Object(s.a)(i,[{key:"componentDidMount",value:function(){this.props.clearMovieDetail();var e=this.props.match.params.id;this.props.getMovieDetail(e)}},{key:"render",value:function(){return console.log(this.props.movieDetail),Object(x.jsxs)("div",{className:"container row",children:[Object(x.jsx)("img",{src:this.props.movieDetail.Poster,alt:this.props.movieDetail.Title,className:"column imgdetail"}),Object(x.jsxs)("div",{className:"movie-details column",children:[Object(x.jsx)("h1",{children:this.props.movieDetail.Title}),Object(x.jsxs)("h3",{children:[this.props.movieDetail.Plot," "]}),Object(x.jsxs)("div",{className:"minims",children:[Object(x.jsxs)("h3",{children:["Director: ",this.props.movieDetail.Director," "]}),Object(x.jsxs)("h3",{children:["Writer: ",this.props.movieDetail.Writer," "]}),Object(x.jsxs)("h3",{children:["Actors: ",this.props.movieDetail.Actors," "]}),Object(x.jsxs)("h3",{children:["Year: ",this.props.movieDetail.Year," "]}),Object(x.jsxs)("h3",{children:["Language: ",this.props.movieDetail.Language," "]}),Object(x.jsxs)("h3",{children:["Genre: ",this.props.movieDetail.Genre," "]}),Object(x.jsxs)("h3",{children:["Box office: ",this.props.movieDetail.BoxOffice," "]}),Object(x.jsxs)("h3",{children:["Awards: ",this.props.movieDetail.Awards," "]}),Object(x.jsxs)("h3",{children:["Released: ",this.props.movieDetail.Released," "]}),Object(x.jsxs)("h3",{children:["Year: ",this.props.movieDetail.Year," "]}),Object(x.jsxs)("h3",{children:[this.props.movieDetail.Runtime," "]}),Object(x.jsxs)("h3",{children:["IMDB rating: ",this.props.movieDetail.imdbRating," "]})]}),Object(x.jsx)(d.b,{exact:!0,to:"/movie-app",className:"title back",children:"Home"})]})]})}}]),i}(n.a.Component));var _=Object(h.b)((function(e){return{movieDetail:e.movieDetail}}),(function(e){return{getMovieDetail:function(t){return e(O(t))},clearMovieDetail:function(){return e({type:m})}}}))(N);var k=function(){return Object(x.jsxs)(n.a.Fragment,{children:[Object(x.jsx)(M,{}),Object(x.jsx)(E.a,{exact:!0,path:"/movie-app/",component:w}),Object(x.jsx)(E.a,{path:"/movie-app/favs",component:g}),Object(x.jsx)(E.a,{path:"/movie-app/movie/:id",component:_})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var F=i(18),I=i(9),T={moviesFavourites:[],moviesLoaded:[],movieDetail:{},vacio:!1};var A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return console.log("Me llego para agregar: "+t.payload.id),Object(I.a)(Object(I.a)({},e),{},{moviesFavourites:e.moviesFavourites.concat(t.payload)});case v:return Object(I.a)(Object(I.a)({},e),{},{moviesLoaded:t.payload.Search});case p:return console.log("Me llego el detalle: "+t.payload.Title),Object(I.a)(Object(I.a)({},e),{},{movieDetail:t.payload});case b:return console.log("Me llego para borrar: "+t.payload.id),Object(I.a)(Object(I.a)({},e),{},{moviesFavourites:e.moviesFavourites.filter((function(e){return e.id!==t.payload.id}))});case m:return Object(I.a)(Object(I.a)({},e),{},{movieDetail:{}});default:return Object(I.a)({},e)}},L=i(24),C=Object(F.c)(A,Object(F.b)(Object(F.a)(L.a),window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():function(e){return e}));r.a.render(Object(x.jsxs)(h.a,{store:C,children:[Object(x.jsx)(d.a,{children:Object(x.jsx)(k,{})}),","]}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[44,1,2]]]);
//# sourceMappingURL=main.b045b715.chunk.js.map