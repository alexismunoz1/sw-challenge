import { Card, CardActions, CardContent, Button, Typography } from "@mui/material";
import { useRouter } from "next/router";

interface cardProps {
  title: string;
  releaseDate: string;
  director: string;
  movieUrl: string;
}

export const MoviesCard = ({ title, releaseDate, director, movieUrl }: cardProps) => {
  const router = useRouter();

  const handleClick = () => {
    //se obtiene el id de la película mediante la url
    const movieIdFromUrl = movieUrl.charAt(28);
    router.push(`/movies/${movieIdFromUrl}`);
  };

  return (
    <Card
      sx={{
        width: 350,
        height: 180,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}>
      <CardContent>
        <Typography variant='h5' color={"#eedd1e"} component='div'>
          {title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color='text.secondary'>
          Release date: {releaseDate}
        </Typography>
        <Typography variant='body2'>Director: {director}</Typography>
      </CardContent>
      <CardActions onClick={handleClick}>
        <Button size='small' sx={{ marginLeft: "auto" }}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};
