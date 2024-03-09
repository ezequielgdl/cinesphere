import Carousel from "@/components/Carousel";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center md:min-h-screen">
      <Carousel
        url={"https://api.themoviedb.org/3/trending/movie/week?language=en-US"}
        title="Trending This Week"
      ></Carousel>
      <Carousel
        url={"https://api.themoviedb.org/3/movie/upcoming"}
        title="Upcoming Movies"
      ></Carousel>
      <Carousel
        url={"https://api.themoviedb.org/3/movie/top_rated"}
        title="Top Rated"
      ></Carousel>
    </main>
  );
}
