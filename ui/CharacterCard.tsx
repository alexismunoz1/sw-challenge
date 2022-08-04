import { Card, CardContent, Skeleton, Typography } from "@mui/material";
import { useGetCharacterData } from "hooks";

export const CharacterCard = ({ characterUrl }: { characterUrl: string }) => {
  const { data: character } = useGetCharacterData(characterUrl);

  return character ? (
    <Card
      sx={{
        width: 350,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}>
      <CardContent>
        <Typography color={"#eedd1e"} variant='h5' component='div'>
          {character ? character.name : null}
        </Typography>
        <Typography variant='body1'>
          Height: {character ? character.height : null}
        </Typography>
        <Typography variant='body1'>Mass: {character ? character.mass : null}</Typography>
        <Typography variant='body1'>
          Gender: {character ? character.gender : null}
        </Typography>
      </CardContent>
    </Card>
  ) : (
    <Skeleton variant='rectangular' width={350} height={144} />
  );
};
