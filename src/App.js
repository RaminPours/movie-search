import React, { useState } from "react";
import { movies } from "./data.js";
import SearchBar from "./SearchBar";
import MovieList from "./MovieList.js"
import FavoritesList from "./FavoritesList";
import Picture from "./image.jsx";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [favorites, setFavorites] = useState([]);

  // movies filteren
  
  const filteredMovies = movies.filter((movie) => 
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );


  // movies favorites
  const addToFavorites = (movie) => {
    if (!favorites.find((fav) => fav.id === movie.id)) {
      setFavorites([...favorites, movie]);
    }
  };

  // favorite movies remove
  const removeFromFavorites = (id) => {
    setFavorites(favorites.filter((movie) => movie.id !== id));
  };

  
  return (
    <div style={{ textAlign: "center" }}>
      <h1> Filmzoeker App</h1>

      <SearchBar value={searchTerm} onChange={setSearchTerm} />

      {searchTerm !== "" && <MovieList movies={filteredMovies} onAdd={addToFavorites} />}

      <FavoritesList favorites={favorites} onRemove={removeFromFavorites} />
      
      <Picture  />
    </div>
  );
}

export default App;