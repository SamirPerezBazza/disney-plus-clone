
import movies from "../data/content.json";
import { Category, Movie } from "../types/categories";

export const getMovie = (category: string, movie: string) => new Promise<Movie[]>((resolve, reject) => {
  try {
    const categoryData = movies.categories.filter((movie) => movie.name === category) as Category[];

    const movieData = categoryData[0].movies.filter((catMovie) => catMovie.name === movie) as Movie[];

    setTimeout(() => {
      resolve(movieData);
    }, 500);
  } catch (error) {
    reject(error);
  }

});
