import { createContext, useCallback, useContext, useMemo } from 'react';
import { Movie } from '../types/categories';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useAuth } from './AuthContext';

interface Props {
	children: React.ReactNode;
}

interface MovieUser extends Movie {
	user: string;
}

interface FavoritesContextValue {
	movies: MovieUser[];
	addMovie: (data: Movie) => void;
}

const FavoritesContext = createContext<FavoritesContextValue>({
	movies: [],
	addMovie: () => {},
});

export const FavoritesProvider = ({ children }: Props) => {
	const [favoriteMovies, setFavoriteMovies] = useLocalStorage(
		'favorites',
		'[]'
	);

	const { user } = useAuth();

	const addMovie = useCallback(
		(movie: Movie) => {
			if (
				favoriteMovies?.some(
					(favMovie: MovieUser) => favMovie.name === movie.name
				)
			) {
				setFavoriteMovies(
					favoriteMovies.filter(
						(favMovie: MovieUser) => favMovie.name === movie.name
					)
				);
				return;
			}

			setFavoriteMovies(
				favoriteMovies
					? [...favoriteMovies, { ...movie, user: user?.email }]
					: [{ ...movie, user: user?.email }]
			);
		},
		[favoriteMovies, setFavoriteMovies, user?.email]
	);

	const value: FavoritesContextValue = useMemo(
		() => ({
			movies:
				favoriteMovies?.filter(
					(movie: MovieUser) => movie.user === user?.email
				) ?? [],
			addMovie,
		}),
		[favoriteMovies, user?.email, addMovie]
	);
	return (
		<FavoritesContext.Provider value={value}>
			{children}
		</FavoritesContext.Provider>
	);
};

export const useFavorites = () => {
	return useContext(FavoritesContext);
};
