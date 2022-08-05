import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { MovieInfo } from "components/movie-info";
import { mockFilmColl } from "lib/mokups";

test("render component movie-info", () => {
  const component = render(<MovieInfo data={mockFilmColl} />);

  expect(component.container).toHaveTextContent(mockFilmColl.title);
  expect(component.container).toHaveTextContent(mockFilmColl.release_date);
  expect(component.container).toHaveTextContent(mockFilmColl.director);
  expect(component.container).toHaveTextContent(mockFilmColl.producer);
  expect(component.container).toHaveTextContent(mockFilmColl.opening_crawl);
});
