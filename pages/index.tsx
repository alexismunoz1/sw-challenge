import { HomeComp, moviesData } from "components/home-comp";
import { fetchApiGet } from "lib/api";
import { GetStaticProps } from "next";

const Home = ({ data }: moviesData) => {
  return (
    <div>
      <HomeComp data={data} />
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const data = await fetchApiGet("films");
  return {
    props: { data },
  };
};
