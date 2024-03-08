import React from "react";
import { Separator } from "./ui/separator";
import AverageRating from "./AverageRating";

const MainMovieDetails = ({ details, director, year }) => {
  const baseUrl = "https://image.tmdb.org/t/p/w500";
  return (
    <div className="flex justify-between h-1/2 py-6 space-x-6">
      <div className="w-1/4 flex justify-center items-center">
        {details.poster_path ? (
          <img
            className="max-w-full max-h-full rounded-lg"
            src={baseUrl + details.poster_path}
            alt="movie poster"
          />
        ) : (
          <div className="h-full w-[70%] rounded-lg text-center bg-slate-300 tabs">
            No poster available
          </div>
        )}
      </div>
      <div className="flex flex-col w-1/2 p-4">
        <h1 className="mb-2">{details.title}</h1>
        <h2>
          Directed by {director ? director.name : "Unknown"} ({year})
        </h2>
        <p className="tag py-6">{details.tagline.toUpperCase()}</p>
        <p>{details.overview}</p>
      </div>
      <AverageRating details={details} />
    </div>
  );
};

export default MainMovieDetails;
