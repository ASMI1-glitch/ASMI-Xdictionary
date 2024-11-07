import React, { useState } from "react";

const DictionaryApp = () => {
  const [definition, setDefinition] = useState("");
  const [error, setError] = useState(false);

  const searchWord = () => {
    const word = document.querySelector('#word-input').value.trim().toLowerCase();
    
    if (!word) {
      setDefinition("Word not found in the dictionary");
      setError(true);
    } else if (word === "react") {
      setDefinition("A JavaScript library for building user interfaces.");
      setError(false);
    } else if (word === "component") {
      setDefinition("A reusable building block in React.");
      setError(false);
    } else {
      setDefinition("Word not found in the dictionary.");
      setError(true);
    }
  };

  return (
    <div>
      <h1>Dictionary App</h1>
      <input type="text" id="word-input" placeholder="Search for a word" />
      <button id="search-button" onClick={searchWord}>Search</button>
      <div id="definition-container">
        <strong>Definition:</strong>
        <p id="definition-text">{definition}</p>
      </div>
    </div>
  );
};

export default DictionaryApp;
