import { Container, Typography } from "@mui/material";

export interface moviesData {
  data: {
    director: string;
    producer: string;
    opening_crawl: string;
    release_date: string;
    title: string;
  };
}

export const MovieComp = ({ data }: moviesData) => {
  return (
    <Container maxWidth="sm">
      <Typography variant="h2" component="div">
        {data.title}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Release date: {data.release_date}
      </Typography>
      <Typography variant="body2">Director: {data.director}</Typography>
      <Typography variant="body2">Producer: {data.producer}</Typography>
      <Typography variant="body1" component="div">
        {data.opening_crawl}
      </Typography>
    </Container>
  );
};
