import react, { useState, useEffect, useContext } from "react";
import { AppContext } from "../context/AppContext";
import Search from "./Search";
import axios from "axios";
import MovieCard from "./MovieCard";

const MovieSection = () => {
    const { search, setMovies, movies } = useContext(AppContext);
    const [ titles, setTitles ] = useState([]);

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
        await setMovies(response);
        await setTitles(movies.Search);
        console.log(movies);
        console.log(movies.Search);
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
      <div className="grid grid-cols-4 m-5 auto-cols-auto">
      {titles.map(element=><MovieCard image={element.Poster} title={element.Title} description={element.Type} />)}
      </div>
    </div>
  );
};

export default MovieSection;
