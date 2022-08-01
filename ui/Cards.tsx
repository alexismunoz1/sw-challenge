import { Card, CardActions, CardContent, Button, Typography } from "@mui/material";

type moviesCardProps = {
  title: string;
  releaseDate: string;
  director: string;
  producer: string;
};

export const MoviesCard = ({
  title,
  releaseDate,
  director,
  producer,
}: moviesCardProps) => {
  return (
    <Card sx={{ minWidth: 275, maxWidth: 300 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Release date: {releaseDate}
        </Typography>
        <Typography variant="body2">Director: {director}</Typography>
        <Typography variant="body2">Producer: {producer}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};
