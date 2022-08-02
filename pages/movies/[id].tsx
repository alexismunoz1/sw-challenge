import { fetchApiGet } from "lib/api";
import { MovieComp } from "components/movie-comp";

const MoviePage = ({ data }: any) => {
  return (
    <div>
      <MovieComp data={data} />
    </div>
  );
};

export default MoviePage;

export async function getStaticPaths() {
  const allMoviesId = ["1", "2", "3", "4"];

  return {
    paths: allMoviesId.map((id) => {
      return {
        params: { id },
      };
    }),
    fallback: true,
  };
}

export async function getStaticProps(context: any) {
  const movieId = context.params.id;
  const data = await fetchApiGet(`films/${movieId}`);

  return {
    props: { data },
  };
}
