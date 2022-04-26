import { useEffect, useState } from "react";
import Movie from "./components/Movie";

function MovieApp() {
	const [loading, setLoading] = useState(true);
	const [movies, setMovies] = useState([]);

	const getMovies = async () => {
		//더 짧게 한다면 아래와 같이 써도 된다.
		const json = await (
			await fetch(
				"https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
			)
		).json();
		// const response = await fetch(
		// 	"https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
		// );
		// const json = await response.json();
		setMovies(json.data.movies);
		setLoading(false);
	};
	useEffect(() => {
		getMovies();
	}, []);

	// 아래보다 위의 코드로 많이 쓴다.
	// useEffect(() => {
	// 	fetch(
	// 		"https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
	// 	)
	// 		.then((response) => response.json())
	// 		.then((json) => {
	// 			setMovies(json.data.movies);
	// 			setLoading(false);
	// 		});
	// }, []); //첫 로딩에서 한번만 가져올거다.
	return (
		<div>
			{loading ? (
				<h1>Loading...</h1>
			) : (
				<div>
					{movies.map((movie) => (
						<Movie
							key={movie.id}
							coverImg={movie.medium_cover_image}
							title={movie.title}
							summary={movie.summary}
						/>
					))}
				</div>
			)}
		</div>
	);
}

export default MovieApp;
//[1,2,3,4,5,6].map(x => x*2)에서 x는 array의 각각 item을 의미한다.
