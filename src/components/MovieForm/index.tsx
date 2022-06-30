import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import {IMovie} from "../../interfaces/IMovie";
import { allMovies, getWatchlist } from "../../utils/localStorage";

const initialValues = {
    id: uuidv4(),
    title: "",
    image: "",
    comment: ""
};

interface IMovieFormProps {
    refresh: () => void,
}

const Index: React.FC<IMovieFormProps> = ({ refresh }) => {
    const [values, setValues] = useState<IMovie>(initialValues);

    const renderInputField = (name: string) => {
        return (
            <div className="inputContainer">
                <label className="title">{name} :</label>
                <input className="inputField" type="text" name={name} onChange={(e) => handleChange(name, e.target.value)} />
            </div>
        )
    }

    const handleChange = (name: string, value: string) => {
        setValues( (oldValues) => ({ ...oldValues, [name]: value }));
    }

    const submitForm = () => {
        const movies = getWatchlist();
        movies.push(values);
        localStorage.setItem(allMovies, JSON.stringify(movies));
        setValues(initialValues);
        refresh();
    }

    return (
        <form>
            <h1>Add movie</h1>
            <div className="container">
                {renderInputField("title")}
                {renderInputField("image")}
                {renderInputField("comment")}
                <button className="btn submitButton" type="button" onClick={submitForm}>ADD MOVIE</button>
            </div>
        </form>
    )
}

export default Index;