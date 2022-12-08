import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Detail(){
    const { id } = useParams();
    const [ movie, setMovie ] = useState();
    const [ loading, setLoading ] = useState(true);
    const getMovie = async () => {
        const json = await (
          await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setMovie(json.data.movie);
        setLoading(false);
      };
      useEffect(()=>{
        getMovie();
      }, []);   

    return (
        <div>
            { loading ? (
                <div>Loading...</div>
            ) : (
                <h1>{ movie.title }</h1>
            ) }
        </div>
    )
}

export default Detail;