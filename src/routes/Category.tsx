/* eslint-disable @typescript-eslint/no-explicit-any */

import { Link, LoaderFunction, useLoaderData } from 'react-router-dom';
import { getCategory } from '../utils/getCategory';
import { Category as CategoryType } from '../types/categories';
import { PageLayout } from '../layouts/PageLayout';

interface Params {
	category: string;
}

export const loader: LoaderFunction = async ({ params }) => {
	const { category } = params as unknown as Params;

	const categories = await getCategory(category);
	return categories[0];
};

const Category = () => {
	const categories = useLoaderData() as CategoryType;

	return (
		<PageLayout className="p-6">
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
		</PageLayout>
	);
};

export default Category;
