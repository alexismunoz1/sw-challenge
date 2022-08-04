import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { fetchApiByUrl } from "lib/api";

interface GetCharacterRes {
  birth_year: string;
  created: string;
  edited: string;
  eye_color: string;
  films: string[];
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  name: string;
  skin_color: string;
  species: string[];
  starships: string[];
  url: string;
  vehicles: string[];
}

export const useGetCharacterData = (
  characterUrl: string
): UseQueryResult<GetCharacterRes> => {
  return useQuery(["character", characterUrl], () => fetchApiByUrl(characterUrl), {
    staleTime: Infinity,
  });
};
