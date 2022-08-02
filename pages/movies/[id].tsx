import { fetchApiGet } from "lib/api";
import { MovieComp, moviesData } from "components/movie-comp";

const MoviePage = ({ data }: moviesData) => {
  return (
    <div>
      <MovieComp data={data} />
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
