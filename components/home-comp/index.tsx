import { Container } from "@mui/material";
import { useState, SetStateAction } from "react";
import { MoviesCard } from "ui/Cards";
import { SelectOptions } from "ui/Select";

type movieData = {
  director: string;
  episode_id: number;
  producer: string;
  release_date: string;
  title: string;
};

export type moviesData = {
  data: {
    results: movieData[];
  };
};

export const HomeComp = ({ data }: moviesData) => {
  const [movies, setMovies] = useState(data.results);

  const sortByProperty = (property: string, collection: movieData[]) => {
    const sortedMovies = collection.sort((a: any, b: any) =>
      a[property] > b[property] ? 1 : -1
    );
    setMovies(sortedMovies);
  };

  const [option, setOption] = useState("");

  const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
    const selectOption = e.target.value as string;
    setOption(selectOption);
    sortByProperty(selectOption, movies);
  };

  return (
    <Container maxWidth="sm">
      <SelectOptions handleChange={handleChange} option={option} />
      {movies.map((item) => {
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
  );
};
