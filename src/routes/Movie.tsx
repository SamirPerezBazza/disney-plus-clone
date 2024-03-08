import { useLoaderData } from 'react-router-dom';
import { getMovie } from '../utils/getMovie';
import { Movie as MovieType } from '../types/categories';

export async function loader({ params }: any) {
	const { category, movie } = params;

	const movieData = await getMovie(category, movie);

	return movieData[0];
}

export const Movie = () => {
	const movie = useLoaderData() as MovieType;

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
			<h1 className="text-white font-bold text-5xl">{movie.name}</h1>
			<p className="text-white mt-2">{movie.description}</p>
			<p className="text-white">{movie.length}</p>
		</div>
	);
};
