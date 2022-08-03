import { Container, Grid } from "@mui/material";
import { useState, SetStateAction } from "react";
import { MoviesCard } from "ui/Cards";
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

  const sortByProperty = (property: string, collection: movieData[]) => {
    const sortedMovies = collection.sort((a: any, b: any) => {
      return a[property] > b[property] ? 1 : -1;
    });
    setMovies(sortedMovies);
  };

  const [option, setOption] = useState("");

  const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
    const selectOption = e.target.value as string;
    sortByProperty(selectOption, movies);
    setOption(selectOption);
  };

  return (
    <Grid sx={{ flexGrow: 1, padding: 5 }} container justifyContent='center' spacing={3}>
      <Container maxWidth='sm'>
        <SelectOptions option={option} handleChange={handleChange} />
      </Container>
      <Grid item xs={10}>
        <Grid container justifyContent='center' spacing={3}>
          {movies.map((item) => (
            <Grid key={item.episode_id} item>
              <MoviesCard
                key={item.episode_id}
                title={item.title}
                releaseDate={item.release_date}
                director={item.director}
                producer={item.producer}
                movieUrl={item.url}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};
