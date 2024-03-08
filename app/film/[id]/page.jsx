import React from "react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import MainMovieDetails from "@/components/MainMovieDetails";
import CastTabsContent from "@/components/tabs/CastTabsContent";
import ReviewTabsContent from "@/components/tabs/ReviewTabsContent";
import CrewTabsContent from "@/components/tabs/CrewTabsContent";
import DetailsTabsContent from "@/components/tabs/DetailsTabsContent";
import GenresTabsContent from "@/components/tabs/GenresTabsContent";

const getMovieById = async (id) => {
  const apiKey = process.env.MOVIEDB_AUTH;
  try {
    const detailsResponse = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );

    const reviewsResponse = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );

    const creditsResponse = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );

    if (detailsResponse.ok && creditsResponse.ok && reviewsResponse.ok) {
      const detailsData = await detailsResponse.json();
      const creditsData = await creditsResponse.json();
      const reviewsData = await reviewsResponse.json();
      return { detailsData, creditsData, reviewsData };
    } else {
      console.error("Failed to fetch movie");
    }
  } catch (error) {
    console.error("Error fetching movie:", error);
  }
};

const MovieDetails = async ({ params }) => {
  const movie = await getMovieById(params.id);
  const details = movie.detailsData;
  const genres = details.genres;
  const credits = movie.creditsData;
  const reviews = movie.reviewsData.results;
  const crew = movie.creditsData.crew;
  const cast = movie.creditsData.cast;
  const director = credits.crew?.find((crew) => crew.job === "Director");
  const year = details.release_date.slice(0, 4);
  const baseUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="min-h-screen mx-32">
      <MainMovieDetails
        director={director}
        details={details}
        year={year}
      ></MainMovieDetails>
      <Separator />
      <div>
        <Tabs defaultValue="reviews" className="p-6">
          <TabsList className="h-full mb-6 tabs">
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
            <TabsTrigger value="cast">Cast</TabsTrigger>
            <TabsTrigger value="crew">Crew</TabsTrigger>
            <TabsTrigger value="details">Details</TabsTrigger>
            <TabsTrigger value="genre">Genres</TabsTrigger>
          </TabsList>
          <div>
            <ReviewTabsContent reviews={reviews} />
            <CastTabsContent cast={cast} />
            <CrewTabsContent crew={crew} />
            <DetailsTabsContent details={details} />
            <GenresTabsContent genres={genres} />
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default MovieDetails;
