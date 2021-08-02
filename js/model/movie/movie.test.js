
import { searchMovieById } from "./movies.js";
import { searchAllInfoMoviePerId } from './movies.js'
import "babel-polyfill";

const data = {
  imdbID: "tt2455546",
};

test("should return movie id tt2455546", async () => {
  const movie = await searchMovieById("tt2455546")
   expect(movie.id).toBe(data.imdbID);
});

test('should return movies id tt2455546', () => {
    searchAllInfoMoviePerId(movies).then(data => {
      expect(data.id).resolves.toEqual(data.imdbID);

    })
  
}); 