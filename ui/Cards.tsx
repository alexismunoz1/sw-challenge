import { Card, CardActions, CardContent, Button, Typography } from "@mui/material";
import { useRouter } from "next/router";

interface cardProps {
  title: string;
  releaseDate: string;
  director: string;
  producer: string;
  movieUrl: string;
}

export const MoviesCard = ({
  title,
  releaseDate,
  director,
  producer,
  movieUrl,
}: cardProps) => {
  const router = useRouter();

  const handleClick = () => {
    const movieIdFromUrl = movieUrl.charAt(28);
    router.push(`/movies/${movieIdFromUrl}`);
  };

  return (
    <Card sx={{ width: 350, height: 200 }}>
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
      <CardActions onClick={handleClick}>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};
