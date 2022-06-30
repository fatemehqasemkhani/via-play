import React from 'react';
import {allMovies, getWatchedMovies, getWatchlist, watchedMovies} from "../../utils/localStorage";
import {IMovie} from "../../interfaces/IMovie";

interface ICardProps {
    refresh: () => void,
    data: IMovie,
    type: string,
}

const Index: React.FC<ICardProps> = ({ data, type, refresh }) => {
    const {title, image, comment} = data;

    const addToAlreadyWatched = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        const movies = getWatchedMovies();
        movies.push(data);
        localStorage.setItem(watchedMovies, JSON.stringify(movies));
        refresh();
    }

    const removeFromList = () => {
        const movies = type === 'watchList' ? getWatchlist() : getWatchedMovies();
        const filteredMovies = movies.filter((item: IMovie) => item.id !== data.id);
        localStorage.setItem(type === 'watchList' ? allMovies : watchedMovies, JSON.stringify(filteredMovies));
        refresh();
    }

    return (
        <div>
            <img className="thumbnail" src={image} alt="" />
            <div className="content">
                <button className="title" onClick={(e) => addToAlreadyWatched(e)}>
                    {title}
                </button>
                <span>
                  <b>Comment:</b> {comment}
                </span>
                <button className="btn removeBtn" onClick={removeFromList}>Remove</button>
            </div>
        </div>
    )
}

export default Index;