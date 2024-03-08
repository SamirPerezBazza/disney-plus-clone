import { Link } from 'react-router-dom';
import pixarLogo from '../../assets/png/pixar_logo.png';
import marvelLogo from '../../assets/png/marvel_logo.png';
import disneyLogo from '../../assets/png/disney_logo.png';
import starWarsLogo from '../../assets/png/star_wars_logo.png';
import natgeoLogo from '../../assets/png/natgeo_logo.png';

interface Props {
	category: string;
}

const images: { [key: string]: string } = {
	Pixar: pixarLogo,
	Disney: disneyLogo,
	Marvel: marvelLogo,
	'Star Wars': starWarsLogo,
	'National Geographic': natgeoLogo,
};

export const CategoryCard = ({ category }: Props) => {
	const imgSrc = images[category];

	return (
		<Link className="w-[18%]" to={`/category/${category}`}>
			<div className="flex items-center justify-center w-full h-[100px] bg-gradient-to-b from-gray-600 to-gray-700 rounded">
				<img
					className="max-w-[100px]"
					src={imgSrc}
					alt={`${category} logo`}
				/>
			</div>
		</Link>
	);
};
