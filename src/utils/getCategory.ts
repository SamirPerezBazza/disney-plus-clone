
import movies from "../data/content.json";
import { Category } from "../types/categories";

export const getCategory = (category: string) => new Promise<Category[]>((resolve, reject) => {
  try {
    const categoryData = movies.categories.filter((movie) => movie.name === category) as Category[];

    setTimeout(() => {
      resolve(categoryData);
    }, 500);
  } catch (error) {
    reject(error);
  }

});
