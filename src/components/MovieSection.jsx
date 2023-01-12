import react, { useState, useEffect, useContext } from "react";
import { AppContext } from "../context/AppContext";
import Search from "./Search";
import axios from "axios";

const MovieSection = () => {
    const { search, setMovies, movies } = useContext(AppContext);

  //fetch properties
  useEffect(() => {
    const getMovies = async () => {
        console.log(search);
      let response = await fetch(
        `https://movie-database-alternative.p.rapidapi.com/?s=${search}&r=json&page=1`,
        {
          method: "GET",
        //   params: {s: `hello`, r: 'json', page: '1'},
          headers: {
            "X-RapidAPI-Key":
              "920f0e185cmsh00f7ca4868d2750p145f2ejsn13009abbc95b",
            "X-RapidAPI-Host": "movie-database-alternative.p.rapidapi.com",
          },
        }
        );
        response = await response.json();
        setMovies(response);
        console.log(movies);
    };
    getMovies();
  },[]);

  return (
    <div className="h-[300px]">
      <div>
        <h3>Featured Movies</h3>
        <i class="bx bx-dots-horizontal-rounded"></i>
      </div>
      <div>
        <Search />
      </div>
    </div>
  );
};

export default MovieSection;
