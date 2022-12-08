import React from "react";
import '../components/Movie.css';
import { Link } from 'react-router-dom';

function Movie(props){
    console.log(props);
    return (
        <div className="movie">
            <Link to={`/movie-detail/${props.id}`}>
            <img src={ props.poster } alt={ props.title } title={ props.title } />
            <div className="movie__data">
                <h3 className="movie__title">{ props.title }</h3>
                <h5 className="movie__year">{ props.year }</h5>
                <ul className="movie_genres">
                    {
                        props.genres.map((gr, index)=>{
                            return (
                                <li key={ index } className="movie__gr">{ gr }</li>
                            );
                        })
                    }
                </ul>
                <p className="movie__summary">{ props.summary.slice(0, 180) }...</p>
            </div>
            </Link>
        </div>
    );
}

export default Movie;