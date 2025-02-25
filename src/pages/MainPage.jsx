import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Hero from "../components/Hero";
import { getMovies, setLoading, getGenres } from "../redux/actions/actions";
import MovieList from "../components/MovieList";

const MainPage = () => {
    const dispatch = useDispatch();
    const state = useSelector((store)=>store.movieReducer);

    useEffect(() => {
        dispatch(setLoading(true));       
        dispatch(getMovies());
        dispatch(getGenres());
    }, []);

    return (
        <div>
            <Hero/>

            {state?.genres?.map((genre,i) => (
                <MovieList key={i} genre={genre} />
            ))}
        </div>
    );
};

export default MainPage;