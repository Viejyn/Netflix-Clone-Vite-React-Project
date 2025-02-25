import axios from "axios";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { baseImgUrl, options } from "../contants";
import { Splide, SplideSlide} from "@splidejs/react-splide";
// Default theme
import '@splidejs/react-splide/css';


const MovieList = ({ genre }) => {

    const [movies,setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!genre?.id) return; // Eğer genre.id tanımlı değilse, API çağrısını yapma

        setLoading(true); // Yükleme başlatılıyor
        setError(null); // Hata resetleniyor

        axios
          .get(
            `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=tr&page=1&sort_by=popularity.desc&with_genres=${genre.id}`,
            options
          )
          .then((res) => {
            setMovies(res.data.results);
            setLoading(false);
          })
          .catch((err) => {
            console.error("API Hatası:", err);
            setError("Veri yüklenirken hata oluştu.");
            setLoading(false);
          });
    }, [genre]);

    return (
        <div className="p-4">
            {/* Yükleniyor mesajı */}
            {loading && <p>...Yükleniyor</p>}

            {/* Hata mesajı */}
            {error && <p style={{ color: "red" }}>{error}</p>}

            {/* Eğer filmler varsa başlık ve listeyi göster */}
            {!loading && !error && movies.length > 0 && <h1 className="mb-3">{genre.name}</h1>}
            
            <Splide 
              className="movie-slider"
              options={{
                    autoWidth:true,
                    gap:"10px",
                    pagination:false,
               }}
            >
               {movies.map((movie) => (                
                    <SplideSlide key={movie.id} className="movie-slide">
                        <Link to={`/movie/${movie.id}`}>
                           <img 
                             className="movie" 
                             src={movie.poster_path ? `${baseImgUrl}${movie.poster_path}` : "/placeholder.jpg"} 
                             alt={movie.title || "Film"}
                           />       
                        </Link> 
                        <p className="movie-title">{movie.title}</p>
                        <p className="movie-rating">⭐ {movie.vote_average?.toFixed(1)}</p>            
                    </SplideSlide>                
                ))}
            </Splide>
        </div>
    );
};

export default MovieList;