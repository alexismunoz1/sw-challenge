import { SubtitleVariant, TinyTextVariant, BodyText } from "ui/Typography";
import { Card, CardActions, CardContent } from "@mui/material";
import { ButtonPrimary } from "ui/Button";
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
    const movieIdFromUrl = movieUrl.charAt(28);
    router.push(`/movies/${movieIdFromUrl}`);
  };

  return (
    <Card
      sx={{
        width: 350,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}>
      <CardContent>
        <SubtitleVariant>{title}</SubtitleVariant>
        <TinyTextVariant>Release date: {releaseDate}</TinyTextVariant>
        <BodyText>Director: {director}</BodyText>
      </CardContent>
      <CardActions onClick={handleClick}>
        <ButtonPrimary>Learn More</ButtonPrimary>
      </CardActions>
    </Card>
  );
};
