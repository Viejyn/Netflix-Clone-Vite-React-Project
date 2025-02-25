import axios from "axios";
import React, { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { baseImgUrl, options } from "../contants";
import Badges from "../components/Badges";

const MovieDetail = () => {
    const {movieId} = useParams();
    const [movie,setMovie] = useState();

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,options)
        .then((res) => setMovie(res.data))
    },[movieId])

    return (
        <div className="movie-detail row p-4">
            {!movie ? (<p>...Yükleniyor</p>) : (
                <>
                 <div className="col-md-4 position-relative">
                    <div style={{ maxWidth:'400px' }}>
                        <img className="rounded w-100 shadow" src={baseImgUrl.concat(movie.poster_path)} alt="" />
                        <p 
                         style={{right:'50px'}} 
                         className="position-absolute bg-warning p-1 rounded shadow bottom-0">
                            ⭐ {movie.vote_average.toFixed(1)}
                        </p>
                    </div>
                    {movie.title}
                 </div>   
                 <div className="col-md-8">
                    <h1>{movie.title}</h1>
                    <p>{movie.overview}</p>

                    <div className="row">
                        <div>
                            <Badges 
                            title='Kategoriler' 
                            list={movie.genres}
                            color="bg-primary"
                            />

                            <Badges 
                            title='Diller' 
                            list={movie.spoken_languages}
                            color="bg-danger"
                            />

                            <Badges 
                            title='Yapımcı Şirketler' 
                            list={movie.production_companies}
                            color="bg-success"
                            />
                        </div>
                        <div>
                            <p>Maliyet: {movie.budget}</p>
                            <p>Hasılat: {movie.revenue}</p>
                        </div>

                    </div>
                 </div>                              
                </>
            )}

        </div>
    )
};

export default MovieDetail;