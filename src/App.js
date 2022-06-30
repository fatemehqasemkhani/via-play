import React from 'react';
import './App.css';

import { addWatchedMovie, add, removeWatchedMovie, getWatchedMovies, getAllMovies } from './index.js';

// Define same pattern for function definition (function keyword or const?)

const getMoviesComponents = (movies) => {
  // Avoid using var for defining variables, alternative keywords (let, const)
  var components = [];

  // This should be converted to a separate file as component that takes a single movie as prop. Then we probably don't even need for function as we can just do
  // Better to remove function keyword and use shortest syntax in both part (for forEach and onClick)
  // Use Map() method for iterating, Its faster and creates new array so you dont need to define an empty array and push the objects to it
  // Remove extra HTML elements
  // For A tag, add e.preventDefault method to prevent the link from following the url or jump to the top of the page
  // Better not to add inline styles
  // When there is no url for link, Its better to use Button instead of link
  movies.forEach(function(movie) {
    components.push(
      <div className="all">
        <div>
          <img src={movie.image} height="100px" alt="" />
        </div>
        <span>
          <a className="movie-watched" href="#" onClick={function() { addWatchedMovie(movie.title, movie.comment, movie.image) }}>
            {movie.title}
          </a>
        </span>
        <br />
        <span>
          {movie.comment}
        </span>
        <br />
        <br />
      </div>
    )
  })

  return components;
}

function getWatchedMoviesComponents(movies) {
  var components = [];
  // Same comments like getMoviesComponents function
  movies.forEach(function(movie) {
    components.push(movie && (
      <div className="watched">
        <div>
          <img src={movie.image} height="100px" alt="" />
        </div>
        <span>
          <a className="movie-watched" href="#" onClick={function() { removeWatchedMovie(movie.title) }}>
            {movie.title}
          </a>
        </span>
        <br />
        <span>
          {movie.comment}
        </span>
        <br />
        <br />
      </div>
    ))
  })

  return components;
}

// Add a type checker to the project like prop-types, flow or typescript, there is not validation for data
// Create Form component for Add movie, later on you most probably need to edit the movies which have added
// Use react hooks for not losing the react life cycle (when changing the input values, and also for the times that UI will update by new entities)
// Better to use Button tag, not input with button type
// Why wrapping the input element in <b></b> tag?
function App(props) {
  return (
    <div className="App">
      <h1>Codest Movies!</h1>
      <h1>Add movie!</h1>
      <b>TITLE:<br /><input type="text" onChange={function(e) { title = e.target.value; }} /></b><br />
      <b>IMAGE URL:<br /><input type="text" onChange={function(e) { image = e.target.value; }} /></b><br />
      <b>COMMENT:<br /><input type="text" onChange={function(e) { comment = e.target.value; }} /></b><br />
      <input type="button" onClick={function(e) { add(title, image, comment); }} value="ADD MOVIE" />

      <h1>Watchlist:</h1>
      {getMoviesComponents(getAllMovies())}

      <h1>Already watched:</h1>
      {getWatchedMoviesComponents(getWatchedMovies())}
    </div>
  );
}

// Strange way and place for define the variables
var title = '';
var image = '';
var comment = '';

export default App;