import { Container, Typography, Grid } from "@mui/material";
import { CharacterCard } from "ui/CharacterCard";

export interface moviesData {
  data: {
    characters: string[];
    director: string;
    opening_crawl: string;
    producer: string;
    release_date: string;
    title: string;
  };
}

export const MovieComp = ({ data }: moviesData) => {
  return (
    <Grid
      sx={{ padding: 5, margin: "auto" }}
      container
      justifyContent='center'
      maxWidth='xl'>
      <Container>
        <Typography variant='h2' component='div'>
          {data.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color='text.secondary'>
          Release date: {data.release_date}
        </Typography>
        <Typography variant='h5'>Director: {data.director}</Typography>
        <Typography variant='h5'>Producer: {data.producer}</Typography>
        <Typography margin={"10px 0"} variant='body1' component='div'>
          {data.opening_crawl}
        </Typography>
        <Typography variant='h6' component='div'>
          Characters:
        </Typography>
      </Container>
      <Grid container justifyContent='center'>
        {data.characters.map((url, index: number) => (
          <Grid key={index} item sx={{ padding: "30px 15px 0 15px" }}>
            <CharacterCard characterUrl={url} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};
