import { Container, Grid } from "@mui/material";
import { useState, SetStateAction } from "react";
import { MoviesCard } from "components/movie-card";
import { SelectOptions } from "ui/Select";

interface movieData {
  director: string;
  episode_id: number;
  producer: string;
  release_date: string;
  title: string;
  url: string;
}

export interface moviesData {
  data: {
    results: movieData[];
  };
}

export const HomeComp = ({ data }: moviesData) => {
  const [movies, setMovies] = useState(data.results);
  const [option, setOption] = useState("");

  const sortByProperty = (property: string, collection: movieData[]) => {
    const sortedMovies = collection.sort((a: any, b: any) => {
      return a[property] > b[property] ? 1 : -1;
    });
    setMovies(sortedMovies);
  };

  const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
    const selectOption = e.target.value as string;
    sortByProperty(selectOption, movies);
    setOption(selectOption);
  };

  return (
    <Grid
      sx={{ padding: 5, margin: "auto" }}
      container
      justifyContent='center'
      maxWidth='xl'>
      <Container maxWidth='sm' sx={{ padding: "0" }}>
        <SelectOptions option={option} handleChange={handleChange} />
      </Container>
      <Grid container justifyContent='center'>
        {movies.map((item) => (
          <Grid key={item.episode_id} item sx={{ padding: "30px 15px 0 15px" }}>
            <MoviesCard
              key={item.episode_id}
              title={item.title}
              releaseDate={item.release_date}
              director={item.director}
              movieUrl={item.url}
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};
