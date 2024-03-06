import { CategoryCard } from '../components/Category/CategoryCard';
import categoriesJson from '../data/content.json';

const categoryNames = categoriesJson.categories.flatMap(
	(category) => category.name
);

const Home = () => {
	return (
		<div className="bg-disney-login bg-no-repeat bg-cover h-[100vh] bg-center">
			<div className="w-full h-[40%] bg-white mb-6"></div>

			<div className="flex w-full justify-evenly items-center">
				{categoryNames.map((name) => (
					<CategoryCard key={name} category={name} />
				))}
			</div>

			<div className="w-full bg-white h-[30%] mt-6">
				<h6>Recomended for you</h6>
			</div>
		</div>
	);
};

export default Home;
