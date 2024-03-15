import React from "react";
import Link from "next/link";

const MovieCard = ({ movie }) => {
  const baseUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="rounded-sm border overflow-hidden hover:border-2 hover:border-primary aspect-[2/3] min-w-6">
      <Link href={`/film/${movie.id}`}>
        {movie.poster_path !== null ? (
          <img
            className=""
            src={baseUrl + movie.poster_path}
            alt="movie poster"
          />
        ) : (
          <div className="h-full w-auto text-center bg-slate-300 tabs">
            No poster available
          </div>
        )}
      </Link>
    </div>
  );
};

export default MovieCard;
