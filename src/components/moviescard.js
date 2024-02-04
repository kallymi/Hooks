import React from 'react';
import './styles/moviecard.css'
const MovieCard = ({ movie }) => {

    return (
        // la structure de l'affiche du film
        <div className="movie-card">
            {/* grâce au propos 'movie' nous optenons les posteUrl
            et le tilte et la description du film */}
            <img src={movie.posterURL} alt={movie.title} />
            <h3>{movie.title}</h3>
            <p>{movie.description}</p>
            <p>Note: {movie.note}</p>
            
        </div>
        
        
    );
};

export default MovieCard;
