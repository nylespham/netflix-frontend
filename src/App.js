import React, { useState, useEffect } from "react";
import "./App.css";
// import api from "./api/axiosConfig";
import axios from "axios";
import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Header from "./components/header/header";
import Trailer from "./components/trailer/Trailer";
import Review from "./components/review/Review";

function App() {
  const [movies, setMovies] = useState();
  const [movie, setMovie] = useState();
  const [reviews, setReviews] = useState();
  const getMovies = async() => {
    try {
      const response = await axios.get("http://localhost:8080/api/v1/movies",{
        headers: {
          "Access-Control-Allow-Origin" : "*"
        }
      });
      setMovies(response.data);
    } catch(err) {
      console.log(err);
    }
  }

  const getMovieData = async(movieId) => {
    try {
      const response = await axios.get(`http://localhost:8080/api/v1/movies/${movieId}`,{
        headers: {
          "Access-Control-Allow-Origin" : "*"
        }
      });

      const singleMovie = response.data;
      setMovie(singleMovie);
      setReviews(singleMovie.reviews);

    } catch(err) {
      console.log(err);
    }

  }

  useEffect(() => {
    getMovies();
  }, [])

  return (
    <div className="App">
    <Header />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/"  element={<Home movies={movies}/>}></Route>
          <Route path="/trailer/:ytTrailerId"  element={<Trailer/>}></Route>
          <Route path="/reviews/:movieId" element={<Review getMovieData={getMovieData} movie={movie} reviews={reviews} setReviews={setReviews}/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
