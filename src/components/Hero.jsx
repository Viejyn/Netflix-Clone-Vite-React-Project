import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { baseImgUrl } from "../contants";

const Hero = () => {

    const state = useSelector((store) => store.movieReducer);
    const [randomMovie, setRandomMovie] = useState(null);

    useEffect(() => {
      if (state.populerMovies && state.populerMovies.length > 0) {
        const randomIndex = Math.floor(Math.random() * state.populerMovies.length);
        setRandomMovie(state.populerMovies[randomIndex]);
      }      
    }, [state.populerMovies]);

    return (
        <div className="row p-4 d-flex">
          {/*Yükleme Sürüyorsa Ekrana Loading Bas */}
          {state.isLoading && <p>Yükleniyor...</p>}

          {/*Yükleme Bittiyse ve Film Seçildiyse */}
          {!state.isLoading && randomMovie && (
            <>
            <div className="col-md-6 mt-3 d-flex flex-column align-items-center gap-3">
              <h1 className="text-center">{randomMovie.title}</h1>
              <p>{randomMovie.overview}</p>
              <p className="text-warning">
                IMDB: ⭐ {randomMovie.vote_average ? randomMovie.vote_average.toFixed(1) : "N/A"}
              </p>

              <div className="d-flex gap-3">
                <button className="btn btn-danger">Film İzle</button>
                <button className="btn btn-info">Listeye Ekle</button>
              </div>
            </div>
            <div className="col-md-6 mt-3 d-flex align-items-center justify-content-center">
              {randomMovie.backdrop_path ? (
                <img 
                  className="img-fluid rounded" 
                  src={`${baseImgUrl}${randomMovie.backdrop_path}`} 
                  alt={randomMovie.title} 
                />
              ) : (
                <p>Görsel Bulunamadı</p>
              )}             
            </div>
            </>
          )}         
        </div>
    );
};

export default Hero;