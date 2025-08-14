import React from "react";

function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Zoek een film..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{ padding: "10px", width: "300px", fontSize: "16px" }}
    />
  );
}

export default SearchBar;