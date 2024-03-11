import { Link } from 'react-router-dom';
import { useFavorites } from '../context/FavoritesContext';
import { getCategoryByMovieName } from '../utils/getCategory';
import { PageLayout } from '../layouts/PageLayout';

export const Favorites = () => {
	const { movies } = useFavorites();

	return (
		<PageLayout className="flex h-[100vh] p-6">
			{movies.map((movie, index) => (
				<Link
					key={index}
					className="w-[18%] h-[100px] "
					to={`../category/${getCategoryByMovieName(movie.name)?.name}/${
						movie.name
					}`}
					replace
				>
					<div className="w-full h-full bg-gradient-to-b from-gray-600 to-gray-700 rounded mt-2">
						<img src={movie.imageUrl} alt={movie.name} />
					</div>
				</Link>
			))}
		</PageLayout>
	);
};
