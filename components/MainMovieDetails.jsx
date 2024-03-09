import React from "react";
import { Separator } from "./ui/separator";
import AverageRating from "./AverageRating";

const MainMovieDetails = ({ details, director, year }) => {
  const baseUrl = "https://image.tmdb.org/t/p/w500";
  return (
    <div className="flex md:flex-row flex-col justify-between mb-4 h:1/4 sm:h-1/2 md:space-x-6 items-center md:items-start">
      <div className="w-1/4 flex justify-center items-center">
        {details.poster_path ? (
          <img
            className="rounded-lg border"
            src={baseUrl + details.poster_path}
            alt="movie poster"
          />
        ) : (
          <div className="h-full w-[70%] rounded-lg text-center bg-slate-300 tabs">
            No poster available
          </div>
        )}
      </div>
      <div className="flex flex-col md:w-1/2">
        <h1 className="mb-2 mt-3 md:mt-0 lg:text-5xl md:text-3xl text-3xl">
          {details.title}
        </h1>
        <h2 className="">
          Directed by {director ? director.name : "Unknown"} ({year})
        </h2>
        <p className="tag py-6">{details.tagline.toUpperCase()}</p>
        <p className="mb-4 text-sm lg:text-base">{details.overview}</p>
      </div>
      <AverageRating details={details} />
    </div>
  );
};

export default MainMovieDetails;
