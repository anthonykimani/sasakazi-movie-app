import react, { useState, useEffect, useContext } from "react";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import MovieCard from "./MovieCard";

const MovieSection = () => {
  const { search, setMovies, movies, setSearch } = useContext(AppContext);
  const [titles, setTitles] = useState([]);
  const [query, setQuery] = useState("iron man");

  const handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setQuery(value);
    console.log(query);
  };

  const handleSetSearch = (event) => {
    event.preventDefault();
    console.log(query);
    setSearch(query);
  };

  //fetch properties
  useEffect(() => {
    const getMovies = async () => {
      console.log(query);
      let response = await fetch(
        `https://movie-database-alternative.p.rapidapi.com/?s=${query}&r=json&page=1`,
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
      setTitles(movies.Search);

      console.log(movies);
      console.log(movies.Search);
    };
    getMovies();
  }, [search]);

  return (
    <div className="h-[300px]">
      <div>
        <h3>Featured Movies</h3>
        <i class="bx bx-dots-horizontal-rounded"></i>
      </div>
      <div>
        <div class="flex justify-around">
          <form onSubmit={handleSetSearch}>
            <div class="max-w-[1200px] w-[100%]">
              <div class="flex space-x-1 items-center mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-8 w-8 text-red-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p class="text-white text-lg font-semibold">
                  Search Movies
                </p>
              </div>
              <div class="flex space-x-4">
                <div class="flex rounded-md overflow-hidden min-w-[500px]">
                  <input
                    type="text"
                    class="rounded-md rounded-r-none  w-[100%]"
                    name="search"
                    onChange={handleInput}
                  />
                  <input
                    type="submit"
                    className="bg-indigo-600 text-white px-6 text-lg font-semibold py-4 rounded-r-md"
                    value="Search"
                  />
                </div>
                <button class="bg-white px-6 text-lg font-semibold py-4 rounded-md">
                  Clear
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="grid grid-cols-4 m-5 auto-cols-auto">
        {titles.map((element) => (
          <MovieCard
            image={element.Poster}
            title={element.Title}
            description={element.Type}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieSection;
