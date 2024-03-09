import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import { Separator } from "./ui/separator";

const fetchMovies = async (url) => {
  const apiKey = process.env.MOVIEDB_AUTH;
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
    });
    if (response.ok) {
      const data = await response.json();
      return data?.results;
    } else {
      console.error("Failed to fetch trending movies");
    }
  } catch (error) {
    console.error("Error fetching trending movies:", error);
  }
};

const MovieCarousel = async ({ url, title }) => {
  const movies = await fetchMovies(url);
  const baseUrl = "https://image.tmdb.org/t/p/w300/";

  return (
    <div className="max-w-[90%]">
      <Carousel className="my-6">
        <h3 className="tabs font-semibold">{title.toUpperCase()}</h3>
        <Separator className="mb-4" />
        <CarouselContent className="-ml-1">
          {movies.map((movie) => (
            <CarouselItem
              className="pl-2 basis-1/4 md:basis-1/6"
              key={movie.id}
            >
              <div className="rounded-sm border overflow-hidden hover:border-2 hover:border-primary">
                <Link href={`/film/${movie.id}`}>
                  <img
                    className=""
                    src={baseUrl + movie.poster_path}
                    alt="movie poster"
                  />
                </Link>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="md:inline-flex hidden" />
        <CarouselNext className="md:inline-flex hidden" />
      </Carousel>
    </div>
  );
};

export default MovieCarousel;
