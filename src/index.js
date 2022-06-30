import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// A lot of these "export functions" would be better in different file or folder. This will improve organization and make it easier to read
export function getWatchedMovies() {
    // Avoid using var for defining variables, alternative keywords (let, const)
    // If you have keys in localStorage and using them in different part of codes, that would be better to define variable for them
    var movies = localStorage.getItem('movies-watched');

    // Use ternary operator, simpler and shorter
    if (!movies) {
        return [];
    } else {
        return JSON.parse(movies);
    }
}

export function getAllMovies() {
    // Avoid using var for defining variables, alternative keywords (let, const)
    // If you have keys in localStorage and using them in different part of codes, that would be better to define variable for them
    var movies = localStorage.getItem('movies-all');

    // Add a mock folder and define the data in the specific file, This will improve organization and make it easier to read
    // Use ternary operator, simpler and shorter
    if (!movies) {
        return [
            {
                title: 'The Avengers',
                image: 'http://d21lz9b0v8r1zn.cloudfront.net/wp-content/uploads//2012/03/detail.jpg',
                comment: 'New York blows up in this!'
            },
            {
                title: 'Dark City',
                image: 'https://i.chzbgr.com/full/5569379584/hA96709E0/',
                comment: 'This looks mysterious. Cool!'
            },
            {
                title: 'Hot Tub Time Machine',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG7vNmphIcVhEcybvSvMgbTkV6EE2twHBNanKvgDx3ZS7Ivn6Dtg',
                comment: 'Someone said this was fun. Maybe!'
            },
        ];
    } else {
        return JSON.parse(movies);
    }
}

// Better to just pass the movie object into function, instead of passing "title, description, image".Reduces code and chance of mistake
export function add(title, description, image) {
    // Avoid using var for defining variables, alternative keywords (let, const)
    var movie = {};

    // Better to use more simpler, newer and readable syntax for creating the object
    movie.title = title;
    movie.description = description;
    movie.image = image;

    // Avoid using var for defining variables, alternative keywords (let, const)
    var movies = getAllMovies();
    movies.push(movie);
    // If you have keys in localStorage and using them in different part of codes, that would be better to define variable for them
    localStorage.setItem('movies-all', JSON.stringify(movies));

    // Strange way to mount the components
    render();
}

// Better to just pass the movie object into function, instead of passing "title, description, image". Reduces code and chance of mistake
export function addWatchedMovie(title, description, image) {
    // Avoid using var for defining variables, alternative keywords (let, const)
    var movie = {};
    // Better to use more simpler, newer and readable syntax for creating the object
    movie.title = title;
    movie.description = description;
    movie.image = image;
    // Avoid using var for defining variables, alternative keywords (let, const)
    var movies = getWatchedMovies();
    movies.push(movie);
    // If you have keys in localStorage and using them in different part of codes, that would be better to define variable for them
    localStorage.setItem('movies-watched', JSON.stringify(movies));
    // Strange way to mount the components
    render();
}

export function removeWatchedMovie(title) {
    // Avoid using var for defining variables, alternative keywords (let, const)
    var movies = getWatchedMovies();

    // Its doing movies[i] = null, but it should really just remove the movie from the array.
    // That is, we dont need to keep movie object in the array with "null" title.
    // And we can probably just use newMovieSet = movies.filter(x => x.title !== title));
    // Use === instead of == for strict comparison
    for (var i = 0; i < movies.length; i++) {
        if (!movies[i]) continue;
        if (movies[i].title == title) {
            movies[i] = null
        }
    }
    // If you have keys in localStorage and using them in different part of codes, that would be better to define variable for them
    localStorage.setItem('movies-watched', JSON.stringify(movies));
    // Strange way to mount the components
    render();
}

// Create components and pass props to them, let App element just renders the whole application
// Would be better to upgrade react, as long as the app is not still that much big
function render() {
    ReactDOM.render(<App movies={getAllMovies()} watched={getWatchedMovies()} />, document.getElementById('root'))
}

render();