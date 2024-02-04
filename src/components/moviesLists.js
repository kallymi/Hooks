import React from 'react';
import MovieCard from './moviescard';
import './styles/moviecard.css'

// Composant fonctionnel MovieList qui affiche une liste de films.
const MovieList = ({ movies }) => {
    return (
        <div className="movie-list">
            {/* Utilise la méthode map pour itérer à travers 
            la liste de films et afficher chaque film à l'aide
            du composant MovieCard. */}
            {movies.map((movie) => (
                // Chaque instance de MovieCard a une clé unique 
                // définie par le titre du film et reçoit les détails
                //  du film via la prop 'movie'.
                <MovieCard key={movie.title} movie={movie} />
            ))}
        </div>
    );
};

export default MovieList;
