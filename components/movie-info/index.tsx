import { Container, Typography, Grid } from "@mui/material";
import { Title, TinyTextVariant, LargeText, BodyText } from "ui/Typography";
import { moviesData } from "lib/types";

export const MovieInfo = ({ data }: moviesData) => {
  return (
    <Grid
      sx={{ padding: 5, margin: "auto" }}
      container
      justifyContent='center'
      maxWidth='xl'>
      <Container maxWidth='md'>
        <Title>{data.title}</Title>
        <TinyTextVariant>Release date: {data.release_date}</TinyTextVariant>
        <LargeText>Director: {data.director}</LargeText>
        <LargeText>Producer: {data.producer}</LargeText>
        <BodyText>{data.opening_crawl}</BodyText>
        <LargeText>Characters:</LargeText>
      </Container>
    </Grid>
  );
};
