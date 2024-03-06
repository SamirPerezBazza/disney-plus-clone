import { Link } from 'react-router-dom';

interface Props {
	category: string;
}

export const CategoryCard = ({ category }: Props) => {
	console.log(category);

	return (
		<Link className="w-[18%]" to="/">
			<div className="w-full h-[100px] bg-gradient-to-b from-gray-600 to-gray-700 rounded">
				Image
			</div>
		</Link>
	);
};
