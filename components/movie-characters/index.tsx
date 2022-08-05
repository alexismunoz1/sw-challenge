import { CharacterCard } from "components/characters-card";
import { moviesData } from "lib/types";
import { Grid } from "@mui/material";

export const MovieCharacters = ({ data }: moviesData) => {
  return (
    <Grid
      sx={{ padding: 5, margin: "auto" }}
      container
      justifyContent='center'
      maxWidth='xl'>
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
