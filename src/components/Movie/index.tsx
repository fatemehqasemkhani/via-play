import React, {useEffect, useState} from 'react';
import MovieForm from "../MovieForm";
import Card from "../Card";
import Container from "../Container";
import {IMovie} from "../../interfaces/IMovie";
import { getWatchlist, getWatchedMovies } from "../../utils/localStorage";

const Index: React.FC = () => {
    const [refresh, setRefresh] = useState<boolean>(false);

    // Refresh the Component when movie has added to already watchlist, or removed or added.
    useEffect(() => {}, [refresh]);

    const renderCards = (movies: IMovie[], type: string) => {
        return movies.length ? movies.map((item: IMovie) => <Card key={item.id} data={item} type={type} refresh={() => setRefresh(!refresh)} />) : "There is no Data!";
    }

    return (
        <section>
            <h1>Codest Movies!</h1>
            <MovieForm refresh={() => setRefresh(!refresh)} />
            <div style={{ display: "flex" }}>
                <Container title="Watchlist:" children={renderCards(getWatchlist(), "watchList")} />
                <Container title="Already watched:" children={renderCards(getWatchedMovies(), "watched")} />
            </div>
        </section>
    )
}

export default Index;