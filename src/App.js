// App.js
import React, { useState } from 'react';
import MovieList from './components/moviesLists';
import Filtre from './components/filter';
import AddMovie from './components/addMovie';
//import './App.css';

const App = () => {
  const [films, setFilms] = useState([
    // ... (films existants)
    { title: 'Titanic', description: 'Le voyage sans retour ', posterURL: './images/titanic.jpg', note: 9 },
    { title: 'Fast & Furious', description: 'Course de voitures ', posterURL: './images/fast and furious.jpg', note: 7 },
    
  ]);

  // pour ajouter un nouveau film, on fait appel au setter de films
  // et lui passe le newMovie
  const addMovie = (newMovie) => {
    setFilms([...films, newMovie]);
  };

  //
  const filterMovies = ({ titre, note }) => {
    const filteredMovies = films.filter((movie) => {
      // cette ligne permet de vérifier si le titre/les semblant du titre est inclu (existe) dans 
      const titleMatch = movie.title.toLowerCase().includes(titre.toLowerCase());
      // cette ligne aussi vérifie si la note indiquée est présente
      const noteMatch = !note || movie.note >= parseInt(note);
      return titleMatch && noteMatch;
    });
    // et on donne le resultat a setfilm pour afficher notre recherche
    setFilms(filteredMovies);
  };

  // Affichage de l'application
  return (
    <div className="app">
      <Filtre onFilter={filterMovies} />
      <MovieList movies={films} />
      <AddMovie onAddMovie={addMovie} />
    </div>
  );
};

export default App;
