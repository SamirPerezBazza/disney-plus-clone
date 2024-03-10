import { useLoaderData } from 'react-router-dom';
import { getMovie } from '../utils/getMovie';
import { Movie as MovieType } from '../types/categories';
import { useFavorites } from '../context/FavoritesContext';

interface Params {
	category: string;
	movie: string;
}

export async function loader({ params }: { params: Params }) {
	const { category, movie } = params;

	const movieData = await getMovie(category, movie);

	return movieData[0];
}

export const Movie = () => {
	const movie = useLoaderData() as MovieType;

	const { movies, addMovie } = useFavorites();

	return (
		<div
			className={`h-[100vh] p-4`}
			style={{
				backgroundImage: `url('${movie.imageUrl}')`,
				filter: 'grayscale(60%)',
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
			}}
		>
			<h1 className="text-white font-bold text-5xl text">{movie.name}</h1>
			<p className="text-white mt-2 text-left w-1/3">{movie.description}</p>
			<p className="text-white mt-2">{movie.length}</p>
			<button onClick={() => addMovie(movie)}>
				{movies.some((favMovie) => favMovie.name === movie.name)
					? 'Remove from favorites'
					: 'Add to Favorites'}
			</button>
		</div>
	);
};
