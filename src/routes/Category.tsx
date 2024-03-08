/* eslint-disable @typescript-eslint/no-explicit-any */

import { Link, useLoaderData } from 'react-router-dom';
import { getCategory } from '../utils/getCategory';
import { Category as CategoryType } from '../types/categories';

export async function loader({ params }: any) {
	const categories = await getCategory(params.category);
	return categories[0];
}

const Category = () => {
	const categories = useLoaderData() as CategoryType;

	return (
		<div className="bg-disney-login h-[100vh] pt-4 px-4">
			<h1 className="text-white text-5xl mb-4">{categories.name}</h1>

			<div className="flex justify-between">
				{categories.movies.map((movie, index) => (
					<Link
						key={index}
						to={`/category/${categories.name}/${movie.name}`}
						className="w-[18%] h-[100px] "
					>
						<div className="w-full h-full bg-gradient-to-b from-gray-600 to-gray-700 rounded mt-2">
							<img src={movie.imageUrl} alt={movie.name} />
						</div>
					</Link>
				))}
			</div>
		</div>
	);
};

export default Category;
