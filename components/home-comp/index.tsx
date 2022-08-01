import { Container } from "@mui/material";
import { MoviesCard } from "ui/Cards";

export type moviesData = {
  data: {
    count: number;
    results: {
      characters: string[];
      created: string;
      director: string;
      edited: string;
      episode_id: number;
      opening_crawl: string;
      planets: string[];
      producer: string;
      release_date: string;
      species: string[];
      starships: string[];
      title: string;
      url: string;
      vehicles: string[];
    }[];
  };
};

export const HomeComp = ({ data }: moviesData) => {
  console.log(data);
  return (
    <div>
      <Container maxWidth="sm">
        {data.results.map((item) => {
          return (
            <MoviesCard
              key={item.episode_id}
              title={item.title}
              releaseDate={item.release_date}
              director={item.director}
              producer={item.producer}
            />
          );
        })}
      </Container>
    </div>
  );
};
