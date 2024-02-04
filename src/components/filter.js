import React, { useState } from 'react';
import './styles/addMovie.css'

const Filtre = ({ onFilter }) => {
    const [titre, setTitre] = useState('');
    const [note, setNote] = useState('');

    const handleFilter = () => {
        onFilter({ titre, note });
    };

    return (
        // les iputes de recherches
        <div className="filter">
            
            <input
                type="text"
                placeholder="Titre du film"
                value={titre}
                // le onChange recherche directement dans le titre
                //grâce au setter le value correspondant et affiche le grâce 
                //au target
                onChange={(e) => setTitre(e.target.value)}
            />
            <input
                type="number"
                placeholder="Note"
                value={note}
                // ceci est répeter aussi ici pour la value note
                onChange={(e) => setNote(e.target.value)}
            />
            {/* Le handleFilter renvoie la confirmation des recherche */}
            <button onClick={handleFilter}>Filtrer</button>
        </div>
    );
};

export default Filtre;
