import { useState } from 'react';
import './App.css';
import Movie from './components/Movie';
import Form from './components/Form';
import { uid } from 'uid';

const initialMovieData = [
	{
		id: '28djdh72',
		name: 'The Incredible Hulk',
		isLiked: false,
	},
	{
		id: 'dknseu2',
		name: 'Spiderman 1-25',
		isLiked: false,
	},
	{
		id: 'dkwi02ksk',
		name: 'Lord of the Rings',
		isLiked: true,
	},
];

export default function App() {
	const [movies, setMovies] = useState(initialMovieData);

	function handleAddMovie(newMovie) {
		// Add and object to the array movies.
		setMovies([...movies, { id: uid(), ...newMovie }]);
	}

	function handleDeleteMovie(idMovie) {
		// Delete an Object from the array movies, the one I am clicking.
		setMovies(movies.filter((movie) => movie.id != idMovie));
	}

	function handleLikeMovie(idMovie) {
		// Toggle the isLiked
		setMovies(
			movies.map((movie) =>
				movie.id === idMovie ? { ...movie, isLiked: !movie.isLiked } : movie
			)
		);
	}

	return (
		<div className="app">
			<h1>Favorite Movies</h1>
			<ul className="list">
				{movies.map((movie) => (
					<li key={movie.id}>
						<Movie
							name={movie.name}
							isLiked={movie.isLiked}
							id={movie.id}
							onDeleteMovie={handleDeleteMovie}
							onToggleLike={handleLikeMovie}
						/>
					</li>
				))}
			</ul>
			<Form onAddMovie={handleAddMovie} />
		</div>
	);
}
