import Carousel from "@/components/Carousel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import SearchInput from "@/components/SearchInput";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <main className="flex flex-col items-center md:min-h-screen md:px-3">
      <Dialog>
        <DialogTrigger>
          <Badge className="tabs">
            <MagnifyingGlassIcon />
            Search
          </Badge>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Search for a movie</DialogTitle>
          </DialogHeader>
          <SearchInput />
        </DialogContent>
      </Dialog>
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
