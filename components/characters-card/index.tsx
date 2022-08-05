import { Card, CardContent } from "@mui/material";
import { useGetCharacterData } from "hooks";
import { SubtitleVariant, BodyText } from "ui/Typography";
import { SkeletonCard } from "ui/SkeletonCard";

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
        <SubtitleVariant>{character ? character.name : null}</SubtitleVariant>
        <BodyText>Height: {character ? character.height : null}</BodyText>
        <BodyText> Mass: {character ? character.mass : null}</BodyText>
        <BodyText>Gender: {character ? character.gender : null}</BodyText>
      </CardContent>
    </Card>
  ) : (
    <SkeletonCard />
  );
};
