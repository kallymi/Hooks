import React, { useState } from 'react';
import './styles/addMovie.css'

// Utilise le hook useState pour définir 
// l'état local 'newMovie' avec des valeurs initiales.
const AddMovie = ({ onAddMovie }) => {

    // Partie state
    // l'objet newMovie est caractérisé par ses voriables suivants
    const [newMovie, setNewMovie] = useState({
        title: '',
        description: '',
        posterURL: '',
        note: '',
    });


//Partie comportement du composant

// Fonction handleInputChange gère les changements dans 
//les champs de saisie et met à jour l'état 'newMovie'.
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewMovie((prevMovie) => ({ ...prevMovie, [name]: value }));
    };
// Fonction handleAddMovie est appelée lors du clic sur le bouton 'Ajouter',
// elle passe les données du nouveau film à la fonction onAddMovie et réinitialise l'état 'newMovie'.
    const handleAddMovie = () => {
        onAddMovie(newMovie);
        setNewMovie({
        title: '',
        description: '',
        posterURL: '',
        note: '',
        });
    };

// Partie affichage du composant

    return (
        <div className="block">
            <h2>Ajouter un nouveau film</h2>

            {/* Champs de saisie du nouveau film */}
            <div className='add-movie'>
                {/* tous les champs renvoient en handleInputChange 
                le name et le value*/}

            {/* de plus chaque input à son value propre (title, 
                description, posteUrl et note) */}
                <input
                    type="text"
                    placeholder="Titre du film"
                    name="title"
                    value={newMovie.title}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    placeholder="Description"
                    name="description"
                    value={newMovie.description}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    placeholder="URL de l'affiche"
                    name="posterURL"
                    value={newMovie.posterURL}
                    onChange={handleInputChange}
                />
                <input
                    type="number"
                    placeholder="Note"
                    name="note"
                    value={newMovie.note}
                    onChange={handleInputChange}
                />
            </div>
            {/* le dandleAddMovie renvoie directement les valeurs de handleInputChange  qui ont
            été chargé dans les input*/}
            <button onClick={handleAddMovie}>Ajouter</button>
        </div>
    );
};

export default AddMovie;