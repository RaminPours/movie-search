import React from "react";

function FavoritesList({ favorites, onRemove }) {
  if (favorites.length === 0) return <p>Geen favorieten geselecteerd 🤷‍♂️</p>;

  return (
    <div>
      <h2>💖 Favoriete Films 💝</h2>
      <ul style={{ listStyle: "none", padding: 0, textAlign: "center", width: "35%", margin: "0 auto" }}>

        {favorites.map((movie) => 
        <li key={movie.id} style={{ margin: "10px 0", border: "1px solid #957ef8ff", padding: "10px", borderRadius: "5px", backgroundColor: "#e2b394ff" }}>
          
          {movie.title} ({movie.year})
            
            <button onClick={() => onRemove(movie.id)} style={{ marginLeft: "10px", cursor: "pointer", backgroundColor: "#ff6b6b", color: "white", border: "none", borderRadius: "5px", padding: "5px 10px"  }}>
              ❌ Verwijder
            </button>
          </li>
        )}
      </ul>
    </div>
  );
}

export default FavoritesList;

