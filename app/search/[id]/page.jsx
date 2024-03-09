import React from "react";
import MovieCard from "@/components/MovieCard";

const searchMovies = async (query) => {
  const apiKey = process.env.MOVIEDB_AUTH;
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      return data.results;
    } else {
      console.error("Failed to fetch trending movies");
    }
  } catch (error) {
    console.error("Error fetching trending movies:", error);
  }
};

const SearchResults = async ({ params }) => {
  const query = params.id;
  const results = await searchMovies(query);

  return (
    <div className="flex flex-col items-center">
      {results.length > 0 ? (
        <div className="my-4 tabs">
          Results for <em>{query.replaceAll("%20", " ")}</em>
        </div>
      ) : (
        <div className="my-4 tabs">
          No results for <em>{query.replaceAll("%20", " ")}</em>
        </div>
      )}
      <div className="grid grid-cols-4 gap-8 mx-32 mb-6">
        {results.map((movie) => {
          return <MovieCard key={movie.id} movie={movie}></MovieCard>;
        })}
      </div>
    </div>
  );
};

export default SearchResults;
