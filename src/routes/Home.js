import { useState, useEffect } from "react";
import Movie from "../components/Movie";

function Home () {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    //api fetching 
    const getMovies = async () => {
        const json = await (
        await fetch(
            `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
            )
        ).json();
        
        //movie의 데이터
        setMovies(json.data.movies);

        //if loading done, Loading text will be disappear
        setLoading(false);
    }

    useEffect(() => {
        getMovies();
    }, [])
        
    return(
    <div>
        {loading ? (
        <h1>Loading...</h1> 
        ) : (
        <div>
            {movies.map((movie) => (
            <Movie 
                key={movie.id} 
                id={movie.id}
                coverImg={movie.medium_cover_image} 
                title={movie.title} 
                summary={movie.summary} 
                genres={movie.genres} 
            /> 
            )
            
            )} 
        </div>
    )}
  </div>
  
    )
}

export default Home;