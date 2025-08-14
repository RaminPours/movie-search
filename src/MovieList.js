import React from "react";

function MovieList({ movies, onAdd }) {
  if (movies.length === 0) 
    return <p>Geen films gevonden !! 👀</p>;

  return (
    <div>
      <h2>Zoekresultaten⏬</h2>

      <ul style={{ listStyle: "none", padding: 0, border: "1px solid #ccc", borderRadius: "5px", width: "35%", margin: "0 auto", backgroundColor: "#63d676ff" }}>
        
        {movies.map((movie) => <li key={movie.id} style={{ margin: "10px 0" }}>
        
            {movie.title} ({movie.year})

        <button onClick={() => onAdd(movie)} style={{ marginLeft: "10px", cursor: "pointer", backgroundColor: "#ff6b6b", color: "white", border: "none", borderRadius: "5px", padding: "5px 10px" }}>
          ⭐ Voeg toe aan favorieten ❤
        </button>
        </li>)}
      
      </ul>
    </div>
  );
}

export default MovieList;

