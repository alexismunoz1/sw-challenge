import { fetchApiGet } from "lib/api";
import { moviesData } from "lib/types";
import { MovieInfo } from "components/movie-info";
import { MovieCharacters } from "components/movie-characters";

const MoviePage = ({ data }: moviesData) => {
  return (
    <div>
      <MovieInfo data={data} />
      <MovieCharacters data={data} />
    </div>
  );
};

export default MoviePage;

export async function getStaticPaths() {
  const allMoviesId = ["1", "2", "3", "4", "5", "6"];

  return {
    paths: allMoviesId.map((id) => {
      return {
        params: { id },
      };
    }),
    fallback: false,
  };
}

export async function getStaticProps(context: { params: { id: string } }) {
  const movieId = context.params.id;
  const data = await fetchApiGet(`films/${movieId}`);

  return {
    props: { data },
  };
}
