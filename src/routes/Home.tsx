import { CategoryCard } from '../components/Category/CategoryCard';
import categoriesJson from '../data/content.json';

const categoryNames = categoriesJson.categories.flatMap(
	(category) => category.name
);

const recomendedMovies = categoriesJson.categories[1].movies;

const Home = () => {
	return (
		<div className="bg-disney-login bg-no-repeat bg-cover h-[100vh] bg-center">
			<div
				data-hs-carousel='{
    "loadingClasses": "opacity-0",
		"isAutoPlay": true
  }'
				className="relative mb-4"
			>
				<div className="hs-carousel relative overflow-hidden w-full min-h-[350px] bg-transparent rounded-lg">
					<div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
						<div className="hs-carousel-slide">
							<div className="flex justify-center h-full bg-transparent p-6">
								<span className="self-center text-4xl transition duration-700">
									<img
										src="https://facts.net/wp-content/uploads/2023/06/37-facts-about-the-movie-iron-man-1687326841.jpeg"
										alt="Iron Man"
									/>
								</span>
							</div>
						</div>
						<div className="hs-carousel-slide">
							<div className="flex justify-center h-full bg-transparent p-6">
								<span className="self-center text-4xl transition duration-700">
									<img
										src="https://ichef.bbci.co.uk/images/ic/640x360/p070qzfv.jpg"
										alt="Toy Story"
									/>
								</span>
							</div>
						</div>
						<div className="hs-carousel-slide">
							<div className="flex justify-center h-full bg-transparent p-6">
								<span className="self-center text-4xl transition duration-700">
									<img
										src="https://ichef.bbci.co.uk/images/ic/640x360/p06vksld.jpg"
										alt="Inside Out"
									/>
								</span>
							</div>
						</div>
					</div>
				</div>

				<div className="hs-carousel-pagination flex justify-center absolute bottom-3 start-0 end-0 space-x-2">
					<span className="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer"></span>
					<span className="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer"></span>
					<span className="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer"></span>
				</div>
			</div>

			<div className="flex w-full justify-evenly items-center">
				{categoryNames.map((name) => (
					<CategoryCard key={name} category={name} />
				))}
			</div>

			<div className="w-full mt-6 px-4">
				<h6 className="font-bold text-white">Recomended for you</h6>
				<div className="flex justify-between items-center">
					{recomendedMovies.map((recMovie, index) => (
						<div
							key={index}
							className="w-[18%] h-[100px] bg-gradient-to-b from-gray-600 to-gray-700 rounded mt-2"
						>
							<img src={recMovie.imageUrl} alt={recMovie.name} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Home;
