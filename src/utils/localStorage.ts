import { movies } from "./mockData";

export const watchedMovies = "watched-movies";
export const allMovies = "all-movies";

export const getWatchedMovies = () => {
    const moviesInStorage = localStorage.getItem(watchedMovies);
    return moviesInStorage ? JSON.parse(moviesInStorage) : [];
}

export const getWatchlist = () => {
    const moviesInStorage = localStorage.getItem(allMovies);
    return moviesInStorage ? JSON.parse(moviesInStorage) : movies;
}